import Image from "next/image";
import { useState } from "react";

const programs = [
  {
    title: "BRICKS CHALLENGE",
    description:"Playful introduction to mechanics for early primary students",
    ribbon: "/images/bg-8.png",
  	logo: "/images/Frame 291365.png",
    image: "/images/IMG_1989 1.png",
    bgShape: "/images/Ellipse-637-6.png",
    logoDesktop: "/images/Frame 291365 (7).png", 
    ribbonDesktop: "/images/bg-15.png",
    bgShapeDesktop: "/images/ellipse-desktop-green.png",
    imageDesktop: "/images/IMG_1989-1.png"
  },
  {
    title: "GALILEO TECHNIC",
    description:"Advanced, structured mechanics for upper primary students",
    ribbon: "/images/bg-9.png",
	  logo: "/images/Frame 291365 (1).png",
    image: "/images/img-05.png",
    bgShape: "/images/Ellipse-637-7.png",
    logoDesktop: "/images/Frame 291365 (8).png", 
    ribbonDesktop: "/images/bg-16.png",
    bgShapeDesktop: "/images/ellipse-desktop-red.png",
    imageDesktop: "/images/IMG_1989-2.png"
  },
  {
    title: "BIG BUILDERS",
    description:"Hands-on building program introducing science and nature to preschool children",
    ribbon: "/images/bg-10.png",
	  logo: "/images/Frame 291365 (2).png",
    image: "/images/img-2.png",
    bgShape: "/images/Ellipse-637-2.png",
    logoDesktop: "/images/Frame 291365 (9).png", 
    ribbonDesktop: "/images/bg-17.png",
    bgShapeDesktop: "/images/ellipse-desktop-yellow.png",
    imageDesktop: "/images/IMG_1989-3.png"
  },
  {
    title: "SMARTIVO",
    description:"Coding through play for kindergarteners",
    ribbon: "/images/bg-11.png",
	  logo: "/images/Frame 291365 (3).png",
    image: "/images/img-03.png",
    bgShape: "/images/Ellipse-637-3-1.png",
    logoDesktop: "/images/Frame 291365 (10).png", 
    ribbonDesktop: "/images/bg-18.png",
    bgShapeDesktop: "/images/ellipse-desktop-blue.png",
    imageDesktop: "/images/IMG_1989-4.png"
  },
  {
    title: "ALGO PLAY",
    description:"Foundational coding for primary students",
    ribbon: "/images/bg-12.png",
	  logo: "/images/Frame 291365 (4).png",
    image: "/images/img-06.png",
    bgShape: "/images/Ellipse-637-4-1.png",
    logoDesktop: "/images/Frame 291365 (11).png", 
    ribbonDesktop: "/images/bg-19.png",
    bgShapeDesktop: "/images/ellipse-desktop-purple.png",
    imageDesktop: "/images/IMG_1989-5.png"
  },
  {
    title: "ROBO TOYS",
    description:"Mechanical design and coding for upper primary students",
    ribbon: "/images/bg-13.png",
	  logo: "/images/Frame 291365 (5).png",
    image: "/images/img-04.png",
    bgShape: "/images/Ellipse-637-8.png",
    logoDesktop: "/images/Frame 291365 (12).png", 
    ribbonDesktop: "/images/bg-20.png",
    bgShapeDesktop: "/images/ellipse-desktop-teal.png",
    imageDesktop: "/images/IMG_1989-6.png"
  },
  {
    title: "ALGO C",
    description:"C/C++ coding and robotics for middle and high school students",
    ribbon: "/images/bg-14.png",
	  logo: "/images/Frame 291365 (6).png",
    image: "/images/img_01.png",
    bgShape: "/images/Ellipse-637-5.png",
    logoDesktop: "/images/Frame 291365 (13).png", 
    ribbonDesktop: "/images/bg-21.png",
    bgShapeDesktop: "/images/ellipse-desktop-pink.png",
    imageDesktop: "/images/IMG_1989-7.png"
  },
];



export default function ProgramsSection() {
 const [activeIndex, setActiveIndex] = useState<number | null>(null);
 const createId = (title: string) =>
  title.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="w-full max-w-[400px] mt-10 md:max-w-[100%]">
      {programs.map((item, index) => (
       <div
       id={createId(item.title)}
        key={index}
        onClick={() =>
        setActiveIndex(prev => (prev === index ? null : index))
        }
        className={`program-box relative cursor-pointer flex justify-between w-full rounded-[16px] pl-[10px]  xl:pl-5 shadow-[0_4px_40px_#003B631A] overflow-visible xl:overflow-visible mb-4 xl:mb-8 transition-all duration-300 ${
        activeIndex === index ? "h-[190px]" : "h-[144px]" 
        }
        ${activeIndex === index ? "active" : ""}`}
        > 
		<div>
		<div className="flex">
          {/* Left Ribbon */}
      {/* Left desktop */} 
      <div
  		 className="relative w-[164px] h-[282px] flex justify-center overflow-hidden hidden md:block "
  		 style={{
   		     backgroundImage: `url(${item.ribbonDesktop})`,
    		   backgroundSize: "cover",
   		     backgroundPosition: "center bottom",
 		  }}
		 >
 		  <div className="relative w-[160px] h-[160px] rounded-full">
    		 <Image
     		  src={item.logoDesktop}
     		  alt={item.title}
     		  width={160}
          height={160}
     		  className="object-contain ml-[1.1px] mt-[10px] w-[160px] h-[160px]"
    		 />
  		 </div>
		 </div>

      {/* Ribbon with Logo mobile */}
		  <div
  		 className="relative w-[52px] h-[140px] flex justify-center overflow-hidden  block md:hidden"
  		 style={{
   		     backgroundImage: `url(${item.ribbon})`,
    		   backgroundSize: "cover",
   		     backgroundPosition: "center bottom",
 		  }}
		 >
 		  <div className="relative w-[50px] h-[50px] rounded-full">
    		 <Image
     		  src={item.logo}
     		  alt={item.title}
     		   width={48}
               height={48}
     		  className="object-contain ml-[1.1px] mt-[10px] w-[48px] h-[48px]"
    		 />
  		 </div>
		 </div>
		

          {/* Content */}
          <div className="flex-1 px-1 py-1 mt-4 pl-2 xl:pl-5 xl:mt-8 max-[380px]:mt-2 max-[324px]:w-[135px] md:gap-6 md:mt-8 xl:w-[600px] relative z-10">
            <h2 className="text-[19px] md:text-[50px] xl:text-[52px] font-bold text-[#58585A] mb-2 leading-[22px] md:leading-[60px] xl:leading-[62px] xl:tracking-[2px] max-[380px]:text-[18px]  max-[380px]:leading-[20px]  max-[380px]:mb-1">
              {item.title}
            </h2>
            <p className="text-[#000] text-[12px] w-[160px] md:w-full max-[380px]:text-[12px] md:text-[24px] xl:text-[28px] xl:mt-[26px]">
              {item.description}
            </p>
              
          </div>
		  </div>
		  {activeIndex === index && (
                <button className="mt-0 flex justify-center w-[95%] bg-[#0097DC] text-white text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-md relative z-10
                md:hidden">
                  <Image
                      src="/images/play_circle.png"
                      alt="logo"
                      width={17}
                      height={17}
                      className="object-contain w-[17px] h-[17px] "
                   />
                 Watch video
                </button>
              )}
          </div>
		   
          {/* Right Image */}
          {/* desktop Image */}
           <div className="relative w-[375px] h-[333px] z-0 hidden md:block">
            <div
            className="relative w-[375px] h-[333px] flex items-center justify-center overflow-hidden img-bg"
			     style={{
            backgroundImage: `url(${item.bgShapeDesktop})`,
            backgroundSize: "contain",
            backgroundPosition: "center bottom", // ⬅️ IMPORTANT
            top: "-4px",
            backgroundRepeat: "no-repeat",
          }}
            ></div>
            <div className="w-[400px] h-[407px] absolute top-[-4px] right-[-20px] img-main max-[324px]:w-[140px]" >
            <Image
              src={item.imageDesktop}
              alt={item.title}
              width={400}
              height={407}
              className="object-contain p-2 relative z-10 w-[400px] h-[407px]"
            />
            </div>
          </div>

          {/* mobile Image */}
          <div className="relative w-[118px]  h-[160px] z-0 max-[324px]:w-[100px] block md:hidden">
            <div
            className="relative w-[130px] h-[144px] flex items-center justify-center overflow-hidden img-bg"
			      style={{
            backgroundImage: `url(${item.bgShape})`,
            backgroundSize: "cover",
            backgroundPosition: "center", // ⬅️ IMPORTANT
            top: "0px",
            right:"13px",
            backgroundRepeat: "no-repeat",
          }}
            ></div>
            <div className="w-[175px] h-[168px] absolute top-[-4px] right-[-20px] img-main max-[324px]:w-[140px]" >
            <Image
              src={item.image}
              alt={item.title}
              width={175}
              height={160}
              className="object-contain p-2 relative z-10  w-[175px] h-[160px]"
            />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}