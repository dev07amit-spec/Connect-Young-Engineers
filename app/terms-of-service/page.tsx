import Image from "next/image";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="w-full min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Header Section - Mobile Optimized */}
      <div className="relative w-full h-[180px] md:h-[250px] xl:h-[300px] flex flex-col items-center justify-center text-white text-center overflow-hidden">
        {/* Mobile Banner */}
        <div
          className="absolute inset-0 z-0 block md:hidden bg-cover bg-center w-full h-full"
          style={{ backgroundImage: `url('https://yefranchisees.b-cdn.net/connect-new/invalidpagemobile.png')` }}
        />
        {/* Desktop Banner */}
        <div
          className="absolute inset-0 z-0 hidden md:block bg-cover bg-center w-full h-full"
          style={{ backgroundImage: `url('https://yefranchisees.b-cdn.net/connect-new/invalidpage.png')` }}
        />

        {/* Logo at Top Left - Responsive Size */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
          <Link href="/">
            <Image
              src="https://yefranchisees.b-cdn.net/connect-new/logo_horizontal.png"
              alt="logo"
              width={160}
              height={52}
              unoptimized
              className="object-contain brightness-0 invert w-[100px] md:w-[160px]"
            />
          </Link>
        </div>
        
        {/* Text and Dates inside the BG - Responsive Typography */}
        <div className="relative z-10 mt-6 md:mt-4 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">Terms of Service</h1>
          <div className="text-[11px] md:text-base space-y-0.5 md:space-y-1 opacity-90 font-medium">
            <p><strong>Effective Date:</strong> March 21 2025</p>
            <p><strong>Last Updated:</strong> March 21 2025</p>
          </div>
        </div>
      </div>

      {/* Content Section - Improved Mobile Padding */}
      <div className="max-w-6xl mx-auto py-10 md:py-16 px-5 md:px-12 text-[#003B63] leading-relaxed text-base md:text-lg font-normal">
        <p className="mb-6 md:mb-8">
          Welcome to <strong className="font-bold text-[#003B63]">connect.youngengineers.org</strong>, operated by <strong className="font-bold text-[#003B63]">YE WISE Learning Solutions Ltd</strong> (“we,” “our,” or “us”). These Terms of Use (“Terms”) govern your use of our website and services. By using our website, submitting forms, or engaging with our messaging platforms (such as WhatsApp or Telegram), you agree to these Terms.
        </p>
        <p className="mb-10 md:mb-12 font-semibold">
          If you do not agree with these Terms, please do not use this website.
        </p>

        <section className="space-y-10 md:space-y-12">
          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#003B63] mb-4 md:mb-6">1. Purpose of This Website</h2>
            <ul className="space-y-3 md:space-y-4 list-none">
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base"><strong className="font-bold">Lead Generation Only:</strong> This website is designed to collect parent inquiries and connect them with relevant Young Engineers franchisees.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base"><strong className="font-bold">Informational Use Only:</strong> The content on this website is for general information about Young Engineers programs and does not constitute a contract, service guarantee, or obligation.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base"><strong className="font-bold">No Guaranteed Enrollment:</strong> Submitting a form on this website does not guarantee enrollment in any program. Franchisees handle enrollment separately.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#003B63] mb-4 md:mb-6">2. Franchisee Responsibility</h2>
            <ul className="space-y-3 md:space-y-4 list-none">
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base"><strong className="font-bold">Independent Franchisees:</strong> While we connect parents with local franchisees, all programs and services are provided by independent franchisees.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base"><strong className="font-bold">No Liability:</strong> We are not responsible for the quality, availability, or delivery of any services provided by franchisees.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base"><strong className="font-bold">Direct Communication:</strong> Any issues or disputes regarding program enrollment, pricing, refunds, or class scheduling must be addressed directly with the franchisee.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#003B63] mb-4 md:mb-6">3. Third-Party Tools & Communication</h2>
            <ul className="space-y-3 md:space-y-4 list-none">
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base"><strong className="font-bold">Messaging Services:</strong> After submitting a form, you may be redirected to WhatsApp or Telegram for further interaction.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base"><strong className="font-bold">No Responsibility for Third-Party Platforms:</strong> We are not responsible for the privacy, security, or availability of these platforms.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base"><strong className="font-bold">Automated Messages:</strong> You may receive automated messages related to the program inquiry, including videos and franchisee contact details.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#003B63] mb-4 md:mb-6">4. Data Handling & Account Deletion</h2>
            <ul className="space-y-3 md:space-y-4 list-none">
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base"><strong className="font-bold">Data Processing:</strong> By submitting a form, you agree to our data processing practices outlined in our Privacy Policy.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base"><strong className="font-bold">Account & Data Requests:</strong> Parents may request deletion of their submitted data by contacting <a href="mailto:privacy@youngengineers.org" className="text-[#0097DC] hover:underline font-bold">privacy@youngengineers.org</a>.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base"><strong className="font-bold">Retention of Data:</strong> We may retain form submission data as necessary for franchisee coordination and compliance purposes.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#003B63] mb-4 md:mb-6">5. Legal Jurisdiction & Governing Law</h2>
            <ul className="space-y-3 md:space-y-4 list-none">
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base"><strong className="font-bold">Jurisdiction:</strong> These Terms are governed by the laws of Cyprus.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base"><strong className="font-bold">Dispute Resolution:</strong> Any legal disputes must be resolved under Cyprus law in the relevant courts.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#003B63] mb-4 md:mb-6">6. Changes to These Terms</h2>
            <p className="mb-4 text-sm md:text-base">We may update these Terms periodically. The most recent version will always be available on this website.</p>
            <p className="font-medium text-sm md:text-base">Continued use of the website after changes means you accept the updated Terms.</p>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#003B63] mb-4 md:mb-6">7. Contact Us</h2>
            <p className="mb-4 text-[#003B63] font-medium text-sm md:text-base">For questions or concerns about these Terms, contact:</p>
            <p className="text-lg md:text-xl text-[#003B63] font-bold">📧 <a href="mailto:support@youngengineers.org" className="text-[#0097DC] hover:underline font-bold">support@youngengineers.org</a></p>
          </div>
        </section>
      </div>

      {/* Simple Footer */}
      <div className="bg-[#f9f9f9] border-t border-gray-200 py-8 px-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Young Engineers - All Rights Reserved.</p>
      </div>
    </main>
  );
}
