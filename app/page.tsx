"use client";

import Image from "next/image";
import Hero from "./components/hero"; 
import Form from "./components/form";
import ProgramsSection from "./components/ProgramsSection";
import VideoSlider from './components/VideoSlider';

export default function ConnectPage() {
  return (
    <main>
      {/*==============header================*/}
      <div className="flex justify-center items-center py-2">
        <Image
          src="/images/logo_horizontal.png"
          alt="logo"
          width={120}
          height={120}
          className="object-contain w-[130px] h-[45px]"
        />
      </div>

      {/*==============content================*/}
      <Hero /> 
       
      <section className="relative w-full flex flex-col h-[200px] items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 z-10 top-[-110px]">
          <div
            className="block md:hidden w-full h-full bg-cover bg-[position:50%_-36%]"
            style={{
              backgroundImage: `url('/images/why ye (2).png')`,
            }}
          />
          <div
            className="hidden md:block w-full h-full bg-cover bg-bottom"
            style={{
              backgroundImage: `url('/images/why ye (2).png')`,
            }}
          />
        </div>
        
       <div className="relative z-10 flex flex-col gap-4 md:gap-6 px-5">
            <h2 className="text-[28px] text-[#003B63] max-[324px]:text-[24px]">A global STEM education program operating in <span className="text-[#0097DC] font-bold block">100+ countries.</span></h2>
        </div>
    </section>

    {/*====================Form============================*/}
     <section className="relative w-full flex flex-col items-center justify-center min-h-[560px]">
        {/* Background */}
        <div className="absolute inset-0 z-10 top-0">
          <div
            className="block md:hidden w-full h-full bg-cover bg-top"
            style={{
              backgroundImage: `url('/images/Vector-bg.png')`,
            }}
          />
          <div
            className="hidden md:block w-full h-full bg-cover bg-top"
            style={{
              backgroundImage: `url('/images/Vector-bg.png')`,
            }}
          />
        </div>
        
        <div className="relative z-10 flex flex-col gap-4 md:gap-6 px-5 py-12 pt-[70px] pb-[80px]">
            <p className="text-[16px] text-[#FFFFFF] uppercase text-center">oficially recognized by</p>
            <div className="flex items-center justigy-between gap-5 max-[324px]:gap-3">
                <div className="flex items-center gap-2">
                  <Image
                   src="/images/ICONS-BB (4).png"
                   alt="logo"
                   width={50}
                   height={50}
                   className="object-contain w-[50px] h-[50px] max-[390px]:w-[35px] max-[324px]:w-[24px]"
                  />
                  <p className="text-[13px] font-bold uppercase text-[#fff] text-center max-[390px]:text-[12px] max-[324px]:text-[10px]">harvard <span className="block text-[8px] font-light tracking-[1px]">school of education</span></p>
                </div>
                <div className="flex items-center gap-2">
                   <Image
                   src="/images/ICONS-BB (5).png"
                   alt="logo"
                   width={50}
                   height={50}
                   className="object-contain w-[50px] h-[50px] max-[390px]:w-[35px] max-[324px]:w-[24px]"
                  />
                   <p className="text-[13px] font-bold uppercase text-[#fff] text-center max-[390px]:text-[12px] max-[324px]:text-[10px]">european union <span className="block text-[8px] font-light tracking-[1px]">comission</span></p>
                </div>
            </div>
            <Form /> 
        </div>
    </section>
    
     {/*====================programs============================*/}
     <section className="relative w-full flex flex-col items-center min-h-[560px]">
        {/* Background */}
        <div className="absolute inset-0 z-10 top-[-90px]">
          <div
            className="block md:hidden w-full h-full bg-cover bg-top"
            style={{
              backgroundImage: `url('/images/path-program.png')`,
            }}
          />
          <div
            className="hidden md:block w-full h-full bg-cover bg-top"
            style={{
              backgroundImage: `url('/images/path-program.png')`,
            }}
          />
        </div>
        <div className="relative z-10 flex flex-col md:gap-6 px-5 py-10 pt-[50px] ">
               <h2 className="text-[32px] text-[#0090D5] font-bold leading-tight max-[324px]:text-[28px]">Young Engineers Programs:</h2>
               <ProgramsSection />
        </div>
      </section>

      <VideoSlider />

      {/*====================Footer=================== */}
      <section className="relative w-full flex flex-col min-h:h-[200px] items-center justify-center py-10 mt-10">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="block md:hidden w-full h-full bg-cover bg-[position:50%_-36%]"
            style={{
              backgroundImage: `url('/images/footer-bg.png')`,
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="hidden md:block w-full h-full bg-cover bg-bottom"
            style={{
              backgroundImage: `url('/images/footer-bg.png')`,
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>

        <div className="relative flex items-center justify-center w-[274px]">
          <Image
          src="/images/logo+eu.png"
          alt="logo"
          width={274}
          height={56}
          className="object-contain w-[274px] h-[56px] mb-11"
          />
        </div>
        <div className="relative flex items-center justify-center w-[274px]">
           <Image
           src="/images/Frame 1984078214.png"
           alt="logo"
           width={24}
           height={24}
           className="object-contain w-[24px] h-[24px]"
          />
          <p className="text-[14px] text-white">Young Engineers [territory name]</p>
        </div>
        <hr className="relative w-[274px] border-t border-[#fff] mt-3 mb-3" />
          
        {/* Social Icons */}
        <div className="relative flex justify-center gap-6 mb-4">
        <div className="relative w-10 h-10 flex items-center justify-center">
         <a href="#">
          <Image
           src="/images/Social Icons.png"
           alt="logo"
           width={24}
           height={24}
           className="object-contain w-[24px] h-[24px]"
          />
          </a>
        </div>

        <div className="w-10 h-10 rounded-full flex items-center justify-center">
          <a href="#">
          <Image
           src="/images/Social Icons (1).png"
           alt="logo"
           width={24}
           height={24}
           className="object-contain w-[24px] h-[24px]"
          />
          </a>
        </div>
       </div>


       {/* Links */}
      <div className="relative flex justify-center items-center gap-2 text-sm mb-4">
        <a href="#" className="underline hover:opacity-80 text-[14px] text-white">
          Privacy Policy
        </a>
        <span className="text-white">|</span>
        <a href="#" className="underline hover:opacity-80 text-[14px] text-white">
          Terms of Service
        </a>
      </div>
       <hr className="relative w-[274px] border-t border-[#fff] mt-3 mb-3" />
   
      {/* Copyright */}
      <p className="relative text-[10px] opacity-80 text-white">
        © Young Engineers 2025 - All Rights Reserved.
      </p>
      </section>

    </main>
  );
}