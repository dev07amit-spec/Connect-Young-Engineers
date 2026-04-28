import Image from "next/image";
import Hero from "../components/hero";
import Form from "../components/form";
import ProgramsSection from "../components/ProgramsSection";
import VideoSlider from "../components/VideoSlider";
import Footer from "../components/footer";
import FormSection from "@/components/FormSection";
import InvalidFranchisee from "@/components/InvalidFranchisee";
import { Suspense } from "react";
import axios from "axios";
import VideoSliderWrapper from "@/components/VideoSliderWrapper";


// 1. Make the component async
export default async function ConnectPage({
  searchParams,
}: {
  // 2. Type searchParams as a Promise
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // 3. Await the params before extracting the ID
  const resolvedParams = await searchParams;
  const utmSource = typeof resolvedParams?.utmSource === "string" ? resolvedParams.utmSource : null;

  if (!utmSource) {
    return <InvalidFranchisee />;
  }

  // Validate UTM source via API
  try {
    const response = await axios.get(
      `https://translationconnect.youngengineers.org/wp-json/connect/v1/get-language-content/?utm_number=${utmSource}`
    );

    if (response.status !== 200 || response.data?.success === false) {
      return <InvalidFranchisee />;
    }
  } catch (error) {
    // If 404 or any other error, show invalid page
    return <InvalidFranchisee />;
  }

  const selectedVideoId = typeof resolvedParams?.videoId === "string" ? resolvedParams.videoId : null;

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
        <div className="absolute inset-0 z-10 top-[-110px] md:top-[-280px] xl:top-[-330px]">
          <div
            className="block md:hidden w-full h-full bg-cover bg-[position:50%_-36%]"
            style={{ backgroundImage: `url('https://yefranchisees.b-cdn.net/connect-new/why%20ye%20(5).png')`, backgroundRepeat: "no-repeat" }}
          />
          <div
            className="hidden md:block w-full h-full bg-cover bg-top"
            style={{ backgroundImage: `url('https://yefranchisees.b-cdn.net/connect-new/why%20ye%20(5).png')`, backgroundRepeat: "no-repeat" }}
          />
        </div>

        {/* Desktop */}
        <div className="relative z-10 flex  items-center gap-4 md:gap-6 px-5 hidden md:flex max-w-[1360px] m-auto">
          <h2 className="text-[27px] lg:text-[40px] text-[#003B63]">A global STEM education program operating in <span className="text-[#0097DC] font-bold ">100+ countries.</span></h2>
          <div className="ml-4 min-w-[400px] lg:min-w-[580px] text-center">
            <h3 className="text-[27px] text-[#0069A7] uppercase mb-6">oficially recognized by</h3>
            <div className="flex items-center justify-center gap-10">
              <Image src="https://yefranchisees.b-cdn.net/connect-new/Frame%201984078163.png" alt="logo" unoptimized  width={200} height={130} className="object-contain w-[200px] h-[130px]" />
              <Image src="https://yefranchisees.b-cdn.net/connect-new/Frame%201984078167.png" alt="logo" unoptimized  width={200} height={130} className="object-contain w-[200px] h-[130px]" />
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="relative z-10 flex flex-col gap-4 md:gap-6 px-5 block md:hidden">
          <h2 className="text-[28px] text-[#003B63] max-[365px]:text-[26px] max-[324px]:text-[24px]">A global STEM education program operating in <span className="text-[#0097DC] font-bold block">100+ countries.</span></h2>
        </div>
      </section>

      {/*====================Form============================*/}
      <Suspense fallback={<div className="min-h-[500px] flex items-center justify-center text-white">Loading form...</div>}>
        <FormSection />
      </Suspense>

      {/*====================programs============================*/}
      <section className="relative w-full flex flex-col items-center min-h-[560px] bg-white">
        <div className="absolute inset-0 z-10 top-[-90px] md:top-[-140px] xl:top-[-175px] min-[1800px]:!top-[-210px]">
          <div className="block md:hidden w-full h-full bg-cover bg-top" style={{ backgroundImage: `url('https://yefranchisees.b-cdn.net/connect-new/path-program.png')`, backgroundRepeat: "no-repeat" }} />
          <div className="hidden md:block w-full h-full bg-cover bg-top !h-[450px]" style={{ backgroundImage: `url('https://yefranchisees.b-cdn.net/connect-new/program-bg.png')`, backgroundRepeat: "no-repeat" }} />
        </div>
        <div className="relative z-10 flex flex-col md:gap-6 px-2 xl:px-5 py-10 pt-[50px] max-w-[1360px] m-auto  md:w-full overflow-hidden">
          <h2 className="text-[32px] text-[#0090D5] font-bold leading-tight max-[324px]:text-[28px] md:text-[50px] xl:text-[52px]  md:w-[70%] lg:w-[60%] xl:w-[700px] uppercase pl-2 xl:pl-0">Young Engineers Programs:</h2>
          <ProgramsSection />
        </div>
      </section>

      {/*====================Video Slider====================*/}
      <section
        id="videos-slider"
        className="relative w-full flex flex-col items-center xl:min-h-[460px] xl:pt-[160px] xl:pb-[70px] bg-white pt-4 pb-14"
      >
        <div className="absolute inset-0 z-10 top-[-10px] max-[767px]:bg-[#fff] xl:top-[-60px] ">
          <div className="hidden md:block w-full h-full bg-cover bg-top" style={{ backgroundImage: `url('https://yefranchisees.b-cdn.net/connect-new/path-bg.png')`, backgroundRepeat: "no-repeat" }} />
        </div>
        <VideoSliderWrapper />
      </section>

      {/*====================Footer=================== */}
      <Footer />
    </main>
  );
}