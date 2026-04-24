"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    agree: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agree) {
      setError("Please accept the terms");
      return;
    }

    setError("");
    setSuccess(true);

    console.log(formData);

    // 👉 Reset form (optional)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      agree: false,
    });
  };

  return (
    <div className="flex justify-center items-center flex-col w-[300px] mx-auto mt-[10px] max-[324px]:w-[280px] md:w-[400px] xl:w-[640px]">
      
      <h2 className="text-[28px] font-bold text-[#fff] text-center mb-4 md:text-[32px] xl:text-[52px] uppercase">
        Interested in <span className="block">Classes Near You?</span>
      </h2>

      <p className="text-[16px] text-[#fff] text-center xl:text-[20px] xl:w-[380px]">
        Submit your details and we’ll contact you on WhatsApp.
      </p>

      <form
        onSubmit={handleSubmit}
        className="p-6 px-0 rounded-2xl w-full max-w-md space-y-4"
      >
        {/* First Name */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="w-full px-[30px] py-[15px] rounded-[50px] border border-white text-white h-[50px] bg-transparent"
        />

        {/* Last Name */}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="w-full px-[30px] py-[15px] rounded-[50px] border border-white text-white h-[50px] bg-transparent"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-[30px] py-[15px] rounded-[50px] border border-white text-white h-[50px] bg-transparent"
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="+0 (000) - 000 - 00 - 00"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-[30px] py-[15px] rounded-[50px] border border-white text-white h-[50px] bg-transparent"
        />

        {/* Checkbox */}
        <label className="flex items-center gap-3 text-[12px] text-white font-light cursor-pointer">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="hidden peer"
          />

          {/* Custom checkbox */}
          <div className="w-[25px] h-[25px] rounded-md border-2 border-white flex items-center justify-center transition-all duration-300 peer-checked:bg-blue-500">
            <div className="w-[14px] h-[14px] rounded-sm bg-white opacity-0 scale-50 transition-all duration-300 peer-checked:opacity-100 peer-checked:scale-100"></div>
          </div>

          <span className="w-[90%] md:text-[16px]">
            I have read and agree to{" "}
            <a
              href="https://translationconnect.youngengineers.org/privacy-policy/"
              target="_blank"
              className="underline"
            >
              Privacy Policy
            </a>{" "}
            &{" "}
            <a
              href="https://translationconnect.youngengineers.org/terms-of-service/"
              target="_blank"
              className="underline"
            >
              Terms of Service
            </a>
          </span>
        </label>

        {/* Error Message */}
        {error && (
          <p className="text-red-400 text-[12px]">{error}</p>
        )}

        {/* Success Message */}
        {success && (
          <p className="text-green-400 text-[14px] text-center">
            Form submitted successfully ✅
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={!formData.agree}
          className={`w-full flex items-center justify-center h-[50px] rounded-[50px] gap-[10px] text-[16px] font-light transition ${
            formData.agree
              ? "bg-white text-black cursor-pointer"
              : "bg-[#F2F2F2] text-[#828282] cursor-not-allowed"
          }`}
        >
          <Image
            src="/images/Vector.png"
            alt="logo"
            width={20}
            height={20}
            className="object-contain w-[20px] h-[20px]"
          />
          Submit
        </button>
      </form>
    </div>
  );
}