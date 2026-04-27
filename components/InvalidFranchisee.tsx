import Image from "next/image";

export default function InvalidFranchisee() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-center">
      {/* Banner with Logo */}
      <div className="relative w-full h-[150px] md:h-[200px] xl:h-[250px] flex items-center justify-center overflow-hidden">
        {/* Mobile Banner */}
        <div 
          className="absolute inset-0 z-0 block md:hidden bg-cover bg-center"
          style={{ backgroundImage: `url('https://yefranchisees.b-cdn.net/connect-new/invalidpagemobile.png')` }}
        />
        {/* Desktop Banner */}
        <div 
          className="absolute inset-0 z-0 hidden md:block bg-cover bg-center"
          style={{ backgroundImage: `url('https://yefranchisees.b-cdn.net/connect-new/invalidpage.png')` }}
        />
        
        {/* Logo overlay on banner */}
        <div className="relative z-10">
          <Image
            src="https://yefranchisees.b-cdn.net/media/super_admin/1765876542596_h5zysjyuz2_1763553376085_6ko0s4sekh8_qualiti_logo.png"
            alt="Young Engineers Logo"
            width={300}
            height={100}
            className="object-contain w-[180px] md:w-[250px] xl:w-[300px]"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-12 px-4">
        <div className="p-4 bg-red-50 rounded-full mb-8">
          <svg
            className="w-12 h-12 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#162A5A] mb-4">
          Website Cannot Be Loaded
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md">
          This website cannot be loaded because it's not associated with any Franchisee.
        </p>

        <div className="space-y-4 text-sm md:text-base text-gray-500">
          <p>
            If you believe you should have access to this content, please contact{" "}
            <a 
              href="mailto:support@youngengineers.org" 
              className="text-blue-600 hover:underline font-semibold"
            >
              support@youngengineers.org
            </a>
          </p>
          <p>Thank you for your interest in Young Engineers!</p>
        </div>
      </div>
    </div>
  );
}
