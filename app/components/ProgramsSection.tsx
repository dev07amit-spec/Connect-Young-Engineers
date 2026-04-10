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
  },
  {
    title: "GALILEO TECHNIC",
    description:"Advanced, structured mechanics for upper primary students",
    ribbon: "/images/bg-9.png",
	logo: "/images/Frame 291365 (1).png",
    image: "/images/img-05.png",
    bgShape: "/images/Ellipse-637-7.png",
  },
  {
    title: "BIG BUILDERS",
    description:"Hands-on building program introducing science and nature to preschool children",
    ribbon: "/images/bg-10.png",
	logo: "/images/Frame 291365 (2).png",
    image: "/images/img-2.png",
    bgShape: "/images/Ellipse-637-2.png",
  },
  {
    title: "SMARTIVO",
    description:"Coding through play for kindergarteners",
    ribbon: "/images/bg-11.png",
	logo: "/images/Frame 291365 (3).png",
    image: "/images/img-03.png",
    bgShape: "/images/Ellipse-637-3-1.png",
  },
  {
    title: "ALGO PLAY",
    description:"Foundational coding for primary students",
    ribbon: "/images/bg-12.png",
	logo: "/images/Frame 291365 (4).png",
    image: "/images/img-06.png",
    bgShape: "/images/Ellipse-637-4-1.png",
  },
  {
    title: "ROBO TOYS",
    description:"Mechanical design and coding for upper primary students",
    ribbon: "/images/bg-13.png",
	logo: "/images/Frame 291365 (5).png",
    image: "/images/img-04.png",
    bgShape: "/images/Ellipse-637-8.png",
  },
  {
    title: "ALGO C",
    description:"C/C++ coding and robotics for middle and high school students",
    ribbon: "/images/bg-14.png",
	logo: "/images/Frame 291365 (6).png",
    image: "/images/img_01.png",
    bgShape: "/images/Ellipse-637-5.png",
  },
];



export default function ProgramsSection() {
 const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="w-full max-w-[400px] mt-10">
      {programs.map((item, index) => (
       <div
        key={index}
        onClick={() =>
        setActiveIndex(prev => (prev === index ? null : index))
        }
        className={`relative cursor-pointer flex justify-between w-full rounded-[16px] pl-[10px] shadow-[0_4px_40px_#003B631A] overflow-hidden mb-4 transition-all duration-300 ${
        activeIndex === index ? "h-[190px]" : "h-[144px]" 
        }
        ${activeIndex === index ? "active" : ""}`}
        > 
		<div>
		<div className="flex">
          {/* Left Ribbon */}
		  <div
  		 className="relative w-[52px] h-[140px] flex justify-center overflow-hidden"
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
          <div className="flex-1 px-1 py-1 mt-4 pl-2 max-[380px]:mt-2 max-[324px]:w-[135px]">
            <h2 className="text-[20px] font-bold text-[#58585A] mb-2 leading-[22px] max-[380px]:text-[18px]  max-[380px]:leading-[20px]  max-[380px]:mb-1">
              {item.title}
            </h2>
            <p className="text-[#000] text-[13px] max-w-md max-[380px]:text-[12px]">
              {item.description}
            </p>
              
          </div>
		  </div>
		  {activeIndex === index && (
                <button className="mt-0 flex justify-center w-[95%] bg-blue-500 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-md relative z-10">
                  ▶ Watch video
                </button>
              )}
          </div>
		   
          {/* Right Image */}
          <div className="relative w-[118px]  h-[160px] z-0 max-[324px]:w-[100px] ">
            <div
            className="relative w-[130px] h-[160px] flex items-center justify-center overflow-hidden img-bg"
			style={{
            backgroundImage: `url(${item.bgShape})`,
            backgroundSize: "contain",
            backgroundPosition: "center bottom", // ⬅️ IMPORTANT
            top: "-4px",
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