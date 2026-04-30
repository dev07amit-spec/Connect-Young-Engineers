"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { submitContactForm } from "@/lib/formSubmission";
import { countryCodes } from "@/lib/countryCodes";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const utmSource = searchParams.get("utmSource");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+1",
    agree: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
        // Fallback to +1 if detection fails
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
    // Requires standard format AND a valid domain ending (at least 2 letters, e.g., .co, .com)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    // Validates phone number characters and ensures digit count is between 7 and 15
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/;
    const digitCount = phone.replace(/\D/g, "").length;
    return phoneRegex.test(phone) && digitCount >= 7 && digitCount <= 15;
  };
  // -----------------------------------

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    // Auto-clear success/error messages when the user corrects their input
    if (error) setError("");
    if (success) setSuccess(false);

    // Optional: Real-time blocking of letters in the phone field
    if (name === "phone") {
      // Only allow numbers, plus, dashes, parentheses, and spaces
      const cleanedValue = value.replace(/[^\d\+\-\(\)\s]/g, "");
      setFormData({ ...formData, phone: cleanedValue });
      return;
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Run validations before attempting submission
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address (e.g., name@domain.com).");
      return;
    }

    if (!validatePhone(formData.phone)) {
      setError("Please enter a valid phone number with 7 to 15 digits.");
      return;
    }

    if (!formData.agree) {
      setError("Please accept the terms.");
      return;
    }

    setError("");
    setSuccess(false);
    setIsLoading(true);

    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName || null,
        email: formData.email,
        phone: `${formData.countryCode}${formData.phone}`,
        source: "Connect App",
        utmSource: utmSource || "",
      };

      await submitContactForm(payload);

      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        countryCode: "+1",
        agree: false,
      });
    } catch (err: any) {
      setError(typeof err === "string" ? err : "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col w-[300px] mx-auto mt-[10px] max-[324px]:w-[280px] md:w-[400px] xl:w-[640px]">
      <h2 className="text-[28px] font-bold text-[#fff] text-center mb-4 md:text-[32px] xl:text-[52px] uppercase">
        Interested in <span className="block">Classes Near You?</span>
      </h2>

      <p className="text-[16px] text-[#fff] text-center xl:text-[20px] xl:w-[380px]">
        Submit your details and we’ll contact you on WhatsApp.
      </p>

      <form onSubmit={handleSubmit} className="p-6 px-0 rounded-2xl w-full max-w-md space-y-4">
        {/* First Name */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          maxLength={50} // Added limitation
          value={formData.firstName}
          onChange={handleChange}
          required
          disabled={isLoading}
          className="w-full px-[30px] py-[15px] rounded-[50px] border border-white text-white h-[50px] bg-transparent disabled:opacity-50"
        />

        {/* Last Name */}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          maxLength={50} // Added limitation
          value={formData.lastName}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full px-[30px] py-[15px] rounded-[50px] border border-white text-white h-[50px] bg-transparent disabled:opacity-50"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          maxLength={100} // Stops the user from typing a massive email
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isLoading}
          className="w-full px-[30px] py-[15px] rounded-[50px] border border-white text-white h-[50px] bg-transparent disabled:opacity-50"
        />

        {/* Phone with Country Code Dropdown */}
        <div className="relative flex gap-2 w-full">
          <div className="relative flex-none" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              disabled={isLoading}
              className="flex items-center justify-between gap-1.5 px-3 py-[15px] rounded-[50px] border border-white text-white h-[50px] bg-transparent min-w-[95px] md:min-w-[110px] disabled:opacity-50"
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
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 text-white text-left transition-all group"
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
            required
            disabled={isLoading}
            className="flex-1 min-w-0 px-4 md:px-[30px] py-[15px] rounded-[50px] border border-white text-white h-[50px] bg-transparent disabled:opacity-50 text-sm md:text-base placeholder:text-white/50"
          />
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
            <a href="https://translationconnect.youngengineers.org/privacy-policy/" target="_blank" className="underline">
              Privacy Policy
            </a>{" "}
            &{" "}
            <a href="https://translationconnect.youngengineers.org/terms-of-service/" target="_blank" className="underline">
              Terms of Service
            </a>
          </span>
        </label>

        {/* Error Message */}
        {error && <p className="text-red-400 text-[12px]">{error}</p>}

        {/* Success Message */}
        {success && (
          <p className="text-green-400 text-[14px] text-center">
            Form submitted successfully ✅
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={!formData.agree || isLoading}
          className={`w-full flex items-center justify-center h-[50px] rounded-[50px] gap-[10px] text-[16px] font-light transition ${formData.agree && !isLoading
              ? "bg-white text-black cursor-pointer hover:bg-gray-200"
              : "bg-[#F2F2F2] text-[#828282] cursor-not-allowed"
            }`}
        >
          {isLoading ? (
            <span>Submitting...</span>
          ) : (
            <>
              <Image src="https://yefranchisees.b-cdn.net/connect-new/Vector-1.png" alt="logo" unoptimized width={20} height={20} className="object-contain w-[20px] h-[20px]" />
              Submit
            </>
          )}
        </button>
      </form>
    </div>
  );
}