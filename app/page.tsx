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
      <div className="flex justify-center items-center py-2 bg-white">
        <Image
          src="/images/logo_horizontal.png"
          alt="logo"
          width={120}
          height={120}
          className="object-contain w-[130px] h-[45px] xl:w-[160px] xl:h-[52px]"
        />
      </div>

      {/*==============content================*/}
      <Hero /> 
       
      <section className="relative w-full flex flex-col h-[200px] xl:h-[280px] items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 z-10 top-[-110px] md:top-[-270px] xl:top-[-290px]">
          <div
            className="block md:hidden w-full h-full bg-cover bg-[position:50%_-36%]"
            style={{
              backgroundImage: `url('/images/why%20ye%20(2).png')`,
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="hidden md:block w-full h-full bg-cover bg-top"
            style={{
              backgroundImage: `url('/images/why-ye-desktop.png')`,
               backgroundRepeat: "no-repeat",
            }}
          />
        </div>
       
       {/* Desktop */}
        <div className="relative z-10 flex  items-center gap-4 md:gap-6 px-5 hidden md:flex max-w-[1360px] m-auto">
            <h2 className="text-[40px] text-[#003B63]">A global STEM education program operating in <span className="text-[#0097DC] font-bold ">100+ countries.</span></h2>
			      <div className="ml-4 min-w-[580px] text-center">
			          <h3 className="text-[27px] text-[#0069A7] uppercase mb-6">oficially recognized by</h3>
				        <div className="flex items-center justify-center gap-10">
				          <Image
                   src="/images/Frame 1984078163.png"
                   alt="logo"
                   width={200}
                   height={130}
                   className="object-contain w-[200px] h-[130px]"
                  />
				          <Image
                   src="/images/Frame 1984078167.png"
                   alt="logo"
                   width={200}
                   height={130}
                  className="object-contain w-[200px] h-[130px]"
                  />
				        </div>
		        	</div>
        </div>  

      {/* mobile */}
       <div className="relative z-10 flex flex-col gap-4 md:gap-6 px-5 block md:hidden">
            <h2 className="text-[28px] text-[#003B63] max-[324px]:text-[24px]">A global STEM education program operating in <span className="text-[#0097DC] font-bold block">100+ countries.</span></h2>
       </div>
    </section>

    {/*====================Form============================*/}
     <section className="relative w-full flex flex-col items-center justify-center min-h-[700px] bg-white">
        {/* Background */}
        <div className="absolute inset-0 z-10 top-0">
          <div
            className="block md:hidden w-full h-full bg-cover bg-top"
            style={{
              backgroundImage: `url('/images/Vector-bg.png')`,
               backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="hidden md:block w-full h-full bg-cover bg-top"
            style={{
              backgroundImage: `url('/images/path-desktop.png')`,
               backgroundRepeat: "no-repeat",
            }}
          />
        </div>
        
        <div className="relative z-10 flex flex-col gap-4 md:gap-6 px-5 py-12 pt-[70px] pb-[80px]  max-w-[1360px] m-auto 
       md:flex-row xl:items-center md:pt-[210px] md:pb-[150px]">
           <div className="block md:hidden">
            <p className="text-[16px] text-[#FFFFFF] uppercase text-center">oficially recognized by</p>
            <div className="flex items-center justigy-between gap-5 max-[324px]:gap-3">
                <div className="flex items-center gap-2">
                  <Image
                   src="/images/ICONS-BB (4).png"
                   alt="logo"
                   width={50}
                   height={50}
                   className="object-contain w-[50px] h-[50px] max-[400px]:w-[35px] max-[324px]:w-[24px]"
                  />
                  <p className="text-[13px] font-bold uppercase text-[#fff] text-center max-[390px]:text-[12px] max-[324px]:text-[10px]">harvard <span className="block text-[8px] font-light tracking-[1px]">school of education</span></p>
                </div>
                <div className="flex items-center gap-2">
                   <Image
                   src="/images/ICONS-BB (5).png"
                   alt="logo"
                   width={50}
                   height={50}
                   className="object-contain w-[50px] h-[50px] max-[400px]:w-[35px] max-[324px]:w-[24px]"
                  />
                   <p className="text-[13px] font-bold uppercase text-[#fff] text-center max-[390px]:text-[12px] max-[324px]:text-[10px]">european union <span className="block text-[8px] font-light tracking-[1px]">comission</span></p>
                </div>
            </div>
            </div>
            <Form /> 
            <div className="hidden md:block">
                <Image
                   src="/images/mission_vision.png"
                   alt="logo"
                   width={690}
                   height={640}
                   className="object-contain w-[500px] h-[500px] xl:w-[690px] xl:h-[640px] "
                  />
            </div>
        </div>
    </section>
    
     {/*====================programs============================*/}
     <section className="relative w-full flex flex-col items-center min-h-[560px]">
        {/* Background */}
        <div className="absolute inset-0 z-10 top-[-90px] md:top-[-140px] xl:top-[-175px] min-[1800px]:!top-[-210px]">
          <div
            className="block md:hidden w-full h-full bg-cover bg-top"
            style={{
              backgroundImage: `url('/images/path-program.png')`,
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="hidden md:block w-full h-full bg-cover bg-top !h-[450px]"
            style={{
              backgroundImage: `url('/images/program-bg.png')`,
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
        <div className="relative z-10 flex flex-col md:gap-6 px-5 py-10 pt-[50px] max-w-[1360px] m-auto  md:w-full overflow-hidden">
               <h2 className="text-[32px] text-[#0090D5] font-bold leading-tight max-[324px]:text-[28px] md:text-[50px] xl:text-[52px] md:w-[60%] xl:w-[700px] uppercase">Young Engineers Programs:</h2>
               <ProgramsSection />
        </div>
      </section>


      <section className="relative w-full flex flex-col items-center xl:min-h-[460px] xl:pt-[160px] xl:pb-[70px] bg-white">
        {/* Background */}
        <div className="absolute inset-0 z-10 top-[-90px] xl:top-[-60px]">
          <div
            className="hidden md:block w-full h-full bg-cover bg-top"
            style={{
              backgroundImage: `url('/images/path-bg.png')`,
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      <VideoSlider />
     </section>


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

        <div className="relative flex items-center justify-center w-[274px] xl:w-[730px]">
          <Image
          src="/images/logo+eu.png"
          alt="logo"
          width={274}
          height={56}
          className="object-contain w-[274px] h-[56px] mb-10 xl:w-[430px] xl:h-[130px]"
          />
        </div>
        <div className="relative flex items-center gap-2 justify-center w-[274px] xl:w-[730px] xl:gap-3">
          <Image
           src="/images/Frame 1984078214.png"
           alt="logo"
           width={24}
           height={24}
           className="object-contain w-[24px] h-[24px] block md:hidden"
          />
           <Image
           src="/images/Frame 1984078214 (1).png"
           alt="logo"
           width={60}
           height={60}
           className="object-contain w-[60px] h-[60px] hidden md:block"
          />

          <p className="text-[14px] text-white xl:text-[28px]">Young Engineers [territory name]</p>
        </div>
        <hr className="relative w-[274px] border-t border-[#fff] mt-3 mb-3 xl:w-[700px] xl:mt-8 xl:mb-8" />
          
        {/* Social Icons */}
        <div className="relative flex justify-center gap-6 mb-4">
        <div className="relative w-10 h-10 flex items-center justify-center">
         <a href="#">
          <Image
           src="/images/Social Icons.png"
           alt="logo"
           width={24}
           height={24}
           className="object-contain w-[24px] h-[24px]  xl:w-[60px] xl:h-[60px]"
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
           className="object-contain w-[24px] h-[24px] xl:w-[60px] xl:h-[60px]"
          />
          </a>
        </div>
       </div>


       {/* Links */}
      <div className="relative flex justify-center items-center gap-2 text-sm mb-4">
        <a href="#" className="underline hover:opacity-80 text-[14px] text-white xl:text-[28px]">
          Privacy Policy
        </a>
        <span className="text-white xl:text-[28px]">|</span>
        <a href="#" className="underline hover:opacity-80 text-[14px] text-white xl:text-[28px]">
          Terms of Service
        </a>
      </div>
       <hr className="relative w-[274px] border-t border-[#fff] mt-3 mb-3 xl:w-[700px] xl:mt-8 xl:mb-8" />
   
      {/* Copyright */}
      <p className="relative text-[10px] opacity-80 text-white xl:text-[24px]">
        © Young Engineers 2025 - All Rights Reserved.
      </p>
      </section>

    </main>
  );
}