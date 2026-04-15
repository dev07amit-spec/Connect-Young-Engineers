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
      alert("Please accept the terms");
      return;
    }

    console.log(formData);
    alert("Form submitted successfully ✅");
  };

  return (
    <div className="flex justify-center items-center flex-col w-[300px] mx-auto mt-[10px] max-[324px]:w-[280px] md:w-[400px] xl:w-[640px]">
	  <h2 className="text-[28px] font-bold text-[#fff] leading-tight text-center mb-4  max-[324px]:text-[24px] md:text-[32px] xl:text-[52px] uppercase xl:mb-9">Interested in <span className="block">Classes Near You?</span></h2>
	  <p className="text-[16px] font-normal text-[#fff] leading-tight text-center xl:text-[20px] xl:w-[380px]">Submit your
       details and we’ll contact you on WhatsApp.</p>
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
        <label className="flex items-center gap-2 xl:gap-3 text-[12px] text-white font-light w-[244px] md:w-[327px]  xl:w-[366px] cursor-pointer">
          <input type="checkbox" className="hidden peer" />

          {/* Custom checkbox */}
          <div className="w-[25px] h-[25px] rounded-md border-2 border-white flex items-center justify-center transition-all duration-300 peer-checked:bg-blue-500 peer-checked:border-white">
    
            {/* inner square */}
            <div className="w-[14px] h-[14px] rounded-sm bg-white opacity-0 scale-50 transition-all duration-300 peer-checked:opacity-100 peer-checked:scale-100"></div>
  
          </div>

          <span className="w-[90%] md:text-[16px]"> I have read and agree to <a href="#" className="underline">Privacy Policy</a> & <a href="#" className="underline">Terms of Service</a></span>
        </label>
      
      


        {/* Submit */}
        <button
          type="submit"
          className="w-full flex items-center justify-center h-[50px] rounded-[50px] bg-[#F2F2F2] text-[#828282] gap-[10px] text-[16px] font-light cursor-pointer"
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