import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  territoryName?: string;
  redirectUrl?: string;
}

export default function Footer({ territoryName, redirectUrl }: FooterProps) {
  return (

    <section className="relative w-full flex flex-col min-h:h-[200px] items-center justify-center py-10 bg-white mt-[-1px]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="block md:hidden w-full h-full bg-cover bg-[position:50%_-36%]"
          style={{
            backgroundImage: `url('https://yefranchisees.b-cdn.net/connect-new/footer-bg.png')`,
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="hidden md:block w-full h-full bg-cover bg-bottom"
          style={{
            backgroundImage: `url('https://yefranchisees.b-cdn.net/connect-new/footer-bg.png')`,
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      <div className="relative flex items-center justify-center w-[274px] xl:w-[730px]">
        <Image
          src="https://yefranchisees.b-cdn.net/connect-new/logo%2Beu.webp"
          alt="logo"
          width={274}
          height={56}
          unoptimized
          className="object-contain w-[274px] h-[56px] mb-10 xl:w-[430px] xl:h-[130px]"
        />
      </div>
      <div className="relative flex items-center gap-2 justify-center w-[274px] xl:w-[730px] xl:gap-3">
        <a
          href={redirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 justify-center hover:opacity-80 transition-opacity"
        >
          <Image
            src="https://yefranchisees.b-cdn.net/connect-new/Frame%201984078214%20%281%29.png"
            alt="logo"
            width={24}
            height={24}
            unoptimized
            className="object-contain w-[24px] h-[24px] block md:hidden"
          />
          <Image
            src="https://yefranchisees.b-cdn.net/connect-new/Frame%201984078214%20%281%29.png"
            alt="logo"
            width={60}
            height={60}
            unoptimized
            className="object-contain w-[60px] h-[60px] hidden md:block"
          />

          <p className="text-[14px] text-white xl:text-[28px]">Go To Young Engineers {territoryName || "[territory name]"}</p>
        </a>
      </div>
      <hr className="relative w-[274px] border-t border-[#fff] mt-3 mb-3 xl:w-[700px] xl:mt-8 xl:mb-8" />

      {/* Social Icons */}
      <div className="relative flex justify-center gap-6 mb-4">
        <div className="relative w-10 h-10 flex items-center justify-center">
          <a href="https://www.facebook.com/youngengineersfranchise" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://yefranchisees.b-cdn.net/connect-new/Social%20Icons.webp"
              alt="logo"
              width={24}
              height={24}
              unoptimized
              className="object-contain w-[24px] h-[24px]  xl:w-[60px] xl:h-[60px]"
            />
          </a>
        </div>

        <div className="w-10 h-10 rounded-full flex items-center justify-center">
          <a href="https://www.instagram.com/youngengineersofficial/" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://yefranchisees.b-cdn.net/connect-new/Social%20Icons%20(1).webp"
              alt="logo"
              width={24}
              height={24}
              unoptimized
              className="object-contain w-[24px] h-[24px] xl:w-[60px] xl:h-[60px]"
            />
          </a>
        </div>
      </div>

      {/* Links */}
      <div className="relative flex justify-center items-center gap-2 text-sm mb-4">
        <Link href="/privacy-policy" className="underline hover:opacity-80 text-[14px] text-white xl:text-[28px]">
          Privacy Policy
        </Link>
        <span className="text-white xl:text-[28px]">|</span>
        <Link href="/terms-of-service" className="underline hover:opacity-80 text-[14px] text-white xl:text-[28px] ">
          Terms of Service
        </Link>
      </div>
      <hr className="relative w-[274px] border-t border-[#fff] mt-3 mb-3 xl:w-[700px] xl:mt-8 xl:mb-8" />

      {/* Copyright */}
      <p className="relative text-[10px] opacity-80 text-white xl:text-[24px]">
        © Young Engineers {new Date().getFullYear()} - All Rights Reserved.
      </p>
    </section>

  );
}