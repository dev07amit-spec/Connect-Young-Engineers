"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { submitContactForm } from "@/lib/formSubmission";
import { countryCodes } from "@/lib/countryCodes";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import FacebookPixel from "./FacebookPixel";

const SuccessPopup = ({ onClose, redirectUrl }: { onClose: () => void; redirectUrl?: string }) => {
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center p-4 z-[10000]">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm text-center animate-in fade-in zoom-in duration-300">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close popup"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mt-2 flex flex-col items-center">
          <div className="bg-blue-500 text-white rounded-full p-3 inline-flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="text-3xl font-bold text-blue-500 mb-3">Thank you!</h2>
          <p className="text-gray-600 text-sm mb-6">
            We’ve received your information and will contact you via WhatsApp shortly.
          </p>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-150 cursor-pointer"
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.open(redirectUrl || 'https://www.youngengineers.org', '_blank')
              }
            }}
          >
            <span>Find out More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

interface ContactFormProps {
  pixelId?: string;
  whatsappPrefilledMessage?: string;
}

export default function ContactForm({ pixelId, whatsappPrefilledMessage }: ContactFormProps) {
  const searchParams = useSearchParams();
  const utmSource = searchParams.get("utmSource") || searchParams.get("utmsource");
  const { trackLead, getFbcFbp } = useFacebookPixel();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+1",
    agree: false,
  });

  // Upgraded error state to handle individual fields
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    submit: ""
  });

  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState<string | undefined>(undefined);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry = countryCodes.find(c => c.code === formData.countryCode) || countryCodes[0];

  const filteredCountries = countryCodes.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.code.includes(searchTerm)
  );

  useEffect(() => {
    // Detect country by IP
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.country_calling_code) {
          setFormData(prev => ({ ...prev, countryCode: data.country_calling_code }));
        }
      } catch (error) {
        console.error("Country detection failed:", error);
        setFormData(prev => ({ ...prev, countryCode: "+1" }));
      }
    };

    detectCountry();

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- Stricter Validation Helpers ---
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/;
    const digitCount = phone.replace(/\D/g, "").length;
    // Updated max length to 12
    return phoneRegex.test(phone) && digitCount >= 7 && digitCount <= 12;
  };
  // -----------------------------------

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (success) setSuccess(false);
    // Auto-clear the specific field error when the user starts typing again
    setErrors(prev => ({ ...prev, [name]: "", submit: "" }));

    // Block letters in phone field
    if (name === "phone") {
      const cleanedValue = value.replace(/[^\d\+\-\(\)\s]/g, "");

      // NEW: Stop them from typing if there are already 12 numbers
      if (cleanedValue.replace(/\D/g, "").length > 12) return;

      setFormData({ ...formData, phone: cleanedValue });
      return;
    }
    // NEW: Block numbers and special chars in Name fields (allow letters, spaces, hyphens)
    if (name === "firstName" || name === "lastName") {
      const cleanedValue = value.replace(/[^a-zA-Z\s\-]/g, "");
      setFormData({ ...formData, [name]: cleanedValue });
      return;
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // NEW: Validate fields exactly when the user leaves them
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email" && value.length > 0) {
      if (!validateEmail(value)) {
        setErrors(prev => ({ ...prev, email: "Please enter a valid email address." }));
      }
    }

    if (name === "phone" && value.length > 0) {
      if (!validatePhone(value)) {
        setErrors(prev => ({ ...prev, phone: "Please enter 7 to 12 digits." }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let formIsValid = true;
    let newErrors = { firstName: "", lastName: "", email: "", phone: "", submit: "" };

    // Run final validations before submission
    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      formIsValid = false;
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
      formIsValid = false;
    }

    if (!formData.firstName) {
      newErrors.firstName = "First name is required.";
      formIsValid = false;
    }

    if (!formData.agree) {
      newErrors.submit = "Please accept the terms.";
      formIsValid = false;
    }

    setErrors(newErrors);

    // If any validation failed, stop submission
    if (!formIsValid) return;

    setSuccess(false);
    setIsLoading(true);

    try {
      const { fbc, fbp } = getFbcFbp();
      const testEventCode = searchParams.get("test_event_code");
      const eventId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName || null,
        email: formData.email,
        phone: `${formData.countryCode}${formData.phone}`,
        utmSource: utmSource || "direct",
        pixelId: pixelId,
        fbc: fbc || null,
        fbp: fbp || null,
        eventSourceUrl: typeof window !== "undefined" ? window.location.href : "",
        eventID: eventId,
        whatsappPrefilledMessage: whatsappPrefilledMessage || "Hi",
        ...(testEventCode && { testEventCode }),
      };

      const result = await submitContactForm(payload);
      
      // Track lead with facebook
      trackLead(payload);

      if (result && result.redirectUrl) {
        setRedirectUrl(result.redirectUrl);
      }

      setSuccess(true);
      setShowPopup(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        countryCode: "+1",
        agree: false,
      });
    } catch (err: any) {
      setErrors(prev => ({ ...prev, submit: typeof err === "string" ? err : "An unexpected error occurred." }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col w-[300px] mx-auto mt-[10px] max-[324px]:w-[280px] md:w-[400px] xl:w-[640px]">
      {pixelId && <FacebookPixel pixelId={pixelId} />}
      <h2 className="text-[28px] font-bold text-[#fff] text-center mb-4 md:text-[32px] xl:text-[52px] uppercase">
        Interested in <span className="block">Classes Near You?</span>
      </h2>

      <p className="text-[16px] text-[#fff] text-center xl:text-[20px] xl:w-[380px]">
        Submit your details and we’ll contact you on WhatsApp.
      </p>

      <form onSubmit={handleSubmit} className="p-6 px-0 rounded-2xl w-full max-w-md space-y-4">

        {/* First Name */}
        <div className="w-full">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            maxLength={20} // Changed to 20
            value={formData.firstName}
            onChange={handleChange}
            required
            disabled={isLoading}
            className={`w-full px-[30px] py-[15px] rounded-[50px] border ${errors.firstName ? 'border-red-400' : 'border-white'} text-white h-[50px] bg-transparent disabled:opacity-50`}
          />
          {errors.firstName && <p className="text-red-400 text-[12px] mt-1 ml-[30px]">{errors.firstName}</p>}
        </div>

        {/* Last Name */}
        <div className="w-full">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            maxLength={20} // Changed to 20
            value={formData.lastName}
            onChange={handleChange}
            disabled={isLoading}
            className="w-full px-[30px] py-[15px] rounded-[50px] border border-white text-white h-[50px] bg-transparent disabled:opacity-50"
          />
        </div>

        {/* Email */}
        <div className="w-full">
          <input
            type="email"
            name="email"
            placeholder="Email"
            maxLength={100}
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur} // NEW: Validates when leaving field
            required
            disabled={isLoading}
            className={`w-full px-[30px] py-[15px] rounded-[50px] border ${errors.email ? 'border-red-400' : 'border-white'} text-white h-[50px] bg-transparent disabled:opacity-50`}
          />
          {errors.email && <p className="text-red-400 text-[12px] mt-1 ml-[30px]">{errors.email}</p>}
        </div>

        {/* Phone with Country Code Dropdown */}
        <div className="w-full">
          <div className="relative flex gap-2 w-full z-50">
            <div className="relative flex-none" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                disabled={isLoading}
                className="cursor-pointer flex items-center justify-between gap-1.5 px-3 py-[15px] rounded-[50px] border border-white text-white h-[50px] bg-transparent min-w-[95px] md:min-w-[110px] disabled:opacity-50"
              >
                <img
                  src={selectedCountry?.svg}
                  alt={selectedCountry?.name}
                  className="w-5 h-3.5 object-cover rounded-[2px]"
                />
                <span className="text-sm font-medium">{selectedCountry?.code}</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute z-[100] mt-2 w-64 left-0 bg-[#003B63] border border-[#ffffff40] rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 backdrop-blur-sm">
                  <div className="p-3 border-b border-white/10">
                    <input
                      type="text"
                      placeholder="Search country..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-white/50 placeholder:text-white/40"
                    />
                  </div>
                  <div className="max-h-64 overflow-y-auto custom-scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                    <style jsx>{`
                      .custom-scrollbar-thin::-webkit-scrollbar {
                        width: 4px;
                      }
                      .custom-scrollbar-thin::-webkit-scrollbar-track {
                        background: transparent;
                      }
                      .custom-scrollbar-thin::-webkit-scrollbar-thumb {
                        background: rgba(255, 255, 255, 0.2);
                        border-radius: 10px;
                      }
                      .custom-scrollbar-thin::-webkit-scrollbar-thumb:hover {
                        background: rgba(255, 255, 255, 0.3);
                      }
                    `}</style>
                    {filteredCountries.map((country) => (
                      <button
                        key={`${country.id}-${country.code}`}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, countryCode: country.code });
                          setIsDropdownOpen(false);
                          setSearchTerm("");
                        }}
                        className="cursor-pointer w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 text-white text-left transition-all group"
                      >
                        <img
                          src={country.svg}
                          alt={country.name}
                          className="w-6 h-4 object-cover rounded shadow-sm group-hover:scale-110 transition-transform"
                        />
                        <span className="flex-1 text-sm font-light truncate">{country.name}</span>
                        <span className="text-xs font-semibold text-white/60 group-hover:text-white transition-colors">{country.code}</span>
                      </button>
                    ))}
                    {filteredCountries.length === 0 && (
                      <div className="px-4 py-8 text-center text-white/40 text-sm italic">
                        No countries found
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="000 - 000 - 00 - 00"
              maxLength={20}
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur} // NEW: Validates when leaving field
              required
              disabled={isLoading}
              className={`flex-1 min-w-0 px-4 md:px-[30px] py-[15px] rounded-[50px] border ${errors.phone ? 'border-red-400' : 'border-white'} text-white h-[50px] bg-transparent disabled:opacity-50 text-sm md:text-base placeholder:text-white/50`}
            />
          </div>
          {errors.phone && <p className="text-red-400 text-[12px] mt-1 ml-[120px]">{errors.phone}</p>}
        </div>

        {/* Checkbox */}
        <label className="flex items-center gap-3 text-[12px] text-white font-light cursor-pointer">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            disabled={isLoading}
            className="hidden peer"
          />
          <div className="w-[25px] h-[25px] rounded-md border-2 border-white flex items-center justify-center transition-all duration-300 peer-checked:bg-blue-500">
            <div className="w-[14px] h-[14px] rounded-sm bg-white opacity-0 scale-50 transition-all duration-300 peer-checked:opacity-100 peer-checked:scale-100"></div>
          </div>
          <span className="w-[90%] md:text-[16px]">
            I have read and agree to{" "}
            <Link href="/privacy-policy" className="underline">
              Privacy Policy
            </Link>{" "}
            &{" "}
            <Link href="/terms-of-service" className="underline">
              Terms of Service
            </Link>
          </span>
        </label>

        {/* Submit-Level Error Message */}
        {errors.submit && <p className="text-red-400 text-[12px] text-center">{errors.submit}</p>}

        {/* Success Message - Removed plain text as per request */}

        {/* Submit */}
        <button
          type="submit"
          disabled={!formData.agree || isLoading}
          className={`relative w-full flex items-center justify-center h-[50px] rounded-[50px] gap-[10px] text-[16px] font-medium transition-all duration-300 ${formData.agree && !isLoading
            ? "bg-white text-[#003B63] cursor-pointer hover:bg-[#F2F2F2] shadow-lg active:scale-[0.98]"
            : "bg-[#F2F2F2] text-[#828282] cursor-not-allowed"
            }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-3">
              <svg className="animate-spin h-5 w-5 text-[#003B63]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Submitting...</span>
            </div>
          ) : (
            <>
              <Image src="https://yefranchisees.b-cdn.net/connect-new/Vector-1.png" alt="logo" unoptimized width={20} height={20} className="object-contain w-[20px] h-[20px]" />
              Submit
            </>
          )}
        </button>
      </form>

      {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} redirectUrl={redirectUrl} />}

      {isLoading && <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite linear;
        }
      `}</style>}
    </div>
  );
}