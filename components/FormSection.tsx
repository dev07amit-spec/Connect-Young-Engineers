import Image from "next/image";
import Form from "./form"; // Import the client-side form component here

export default function FormSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center min-h-[700px] bg-white">
      <div className="absolute inset-0 z-0 top-0">
        <div className="block md:hidden w-full h-full bg-cover bg-top" style={{ backgroundImage: `url('https://yefranchisees.b-cdn.net/connect-new/Vector-bg.png')`, backgroundRepeat: "no-repeat" }} />
        <div className="hidden md:block w-full h-full bg-cover bg-top" style={{ backgroundImage: `url('https://yefranchisees.b-cdn.net/connect-new/path-desktop.png')`, backgroundRepeat: "no-repeat" }} />
      </div>

      <div className="relative z-20 flex flex-col gap-4 md:gap-6 px-5 py-12 pt-[70px] pb-[80px]  max-w-[1360px] m-auto md:flex-row xl:items-center md:pt-[210px] md:pb-[150px]">        <div className="block md:hidden">
        <p className="text-[16px] text-[#FFFFFF] uppercase text-center mb-4">oficially recognized by</p>
        <div className="flex items-center justigy-between gap-5 max-[324px]:gap-3">
          <div className="flex items-center gap-2">
            <Image src="https://yefranchisees.b-cdn.net/connect-new/ICONS-BB%20(4).png" unoptimized alt="logo" width={50} height={50} className="object-contain w-[50px] h-[50px] max-[400px]:w-[35px] max-[324px]:w-[24px]" />
            <p className="text-[13px] font-bold uppercase text-[#fff] text-center max-[390px]:text-[12px] max-[365px]:text-[11px] max-[324px]:text-[10px]">harvard <span className="block text-[8px] font-light tracking-[1px]">school of education</span></p>
          </div>
          <div className="flex items-center gap-2">
            <Image src="https://yefranchisees.b-cdn.net/connect-new/ICONS-BB%20(5).png" unoptimized alt="logo" width={50} height={50} className="object-contain w-[50px] h-[50px] max-[400px]:w-[35px] max-[324px]:w-[24px]" />
            <p className="text-[13px] font-bold uppercase text-[#fff] text-center max-[390px]:text-[12px] max-[365px]:text-[11px] max-[324px]:text-[10px]">european union <span className="block text-[8px] font-light tracking-[1px]">comission</span></p>
          </div>
        </div>
      </div>
        <Form />
        <div className="hidden md:block">
          {/* ✅ FIX 4: Changed h-[500px] to h-auto to fix the aspect ratio warning */}
          <Image
            src="https://yefranchisees.b-cdn.net/connect-new/mission%26vision.webp"
            alt="logo"
            width={690}
            height={640}
            unoptimized
            className="object-contain w-[500px] h-auto xl:w-[690px] xl:h-auto"
          />
        </div>
      </div>
    </section>
  );
}