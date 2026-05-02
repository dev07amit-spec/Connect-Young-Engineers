import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">Privacy Policy</h1>
          <div className="text-[11px] md:text-base space-y-0.5 md:space-y-1 opacity-90 font-medium">
            <p><strong>Effective Date:</strong> March 21 2025</p>
            <p><strong>Last Updated:</strong> March 21 2025</p>
          </div>
        </div>
      </div>

      {/* Content Section - Improved Mobile Padding */}
      <div className="max-w-6xl mx-auto py-10 md:py-16 px-5 md:px-12 text-[#003B63] leading-relaxed text-base md:text-lg font-normal">
        <p className="mb-6 md:mb-8">
          Welcome to <strong className="font-bold text-[#003B63]">connect.youngengineers.org</strong>, operated by <strong className="font-bold text-[#003B63]">YE WISE Learning Solutions Ltd</strong> (“we”, “our”, or “us”). This Privacy Policy explains how we collect, use, and protect your personal information when you use our website, submit forms, and interact with our messaging platforms (such as WhatsApp or Telegram).
        </p>
        <p className="mb-10 md:mb-12 font-semibold">
          By using this website, you agree to the practices described in this Privacy Policy.
        </p>

        <section className="space-y-10 md:space-y-12">
          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#003B63] mb-4 md:mb-6">1. What Information We Collect</h2>
            <p className="mb-4 md:mb-6 font-medium">When you use our website and complete our contact form, we collect and store the following information:</p>
            <ul className="space-y-3 md:space-y-4 list-none">
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">Your name, email address, and phone number</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">Your child’s name and age</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">Any other information you provide in the form</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">UTM campaign data (used for marketing attribution)</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">Chat data from WhatsApp, Telegram, or other messaging platforms</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">Screenshot of the initial automated chat for franchisee reference</span>
              </li>
            </ul>
            <p className="mt-6 md:mt-8 font-medium">We also collect technical data via cookies and analytics tools such as:</p>
            <ul className="space-y-3 md:space-y-4 list-none mt-4">
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">Browser type, IP address, device type</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">Page visits, referral source, and UTM parameters</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">Behavior on site (form submission, button clicks, etc.)</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#003B63] mb-4 md:mb-6">2. How We Use Your Information</h2>
            <p className="mb-4 md:mb-6">We use the information we collect to:</p>
            <ul className="space-y-3 md:space-y-4 list-none">
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">Connect you with the appropriate franchisee who offers Young Engineers programs in your region</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">Provide you with information about relevant educational programs</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">Personalize your experience (e.g., language, content, videos)</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">Enable follow-up via WhatsApp/Telegram or by a local franchisee</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">Improve our website and marketing efforts</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">Fulfill legal obligations and data protection requirements</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#003B63] mb-4 md:mb-6">3. Who Has Access to Your Data</h2>
            <p className="mb-4 md:mb-6">Only the following parties may access your data:</p>
            <ul className="space-y-3 md:space-y-4 list-none">
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base"><strong className="font-bold text-[#003B63]">YE WISE Learning Solutions Ltd</strong> – For central coordination.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base"><strong className="font-bold text-[#003B63]">E-Square Young Engineers Franchising Ltd</strong> – For service delivery and franchise coordination.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base"><strong className="font-bold text-[#003B63]">Your Local Franchisee (via CRM)</strong> – To contact you and provide local services.</span>
              </li>
            </ul>
            <p className="mt-6 md:mt-8 italic text-[#003B63]/80 text-sm md:text-base">We do not sell, rent, or share your data with any third parties for advertising or commercial use.</p>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#003B63] mb-4 md:mb-6">4. Data Storage</h2>
            <p className="mb-4 md:mb-6">Your data is securely stored in the following locations:</p>
            <ul className="space-y-3 md:space-y-4 list-none">
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">CRM platform (e.g., Zoho CRM or similar)</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">AWS Cloud Services (for student records after conversion)</span>
              </li>
            </ul>
            <p className="mt-6 md:mt-8 italic text-[#003B63]/80 text-sm md:text-base">We do not store data on local servers.</p>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#003B63] mb-4 md:mb-6">5. Use of Cookies and Tracking Technologies</h2>
            <p className="mb-4 md:mb-6">We use cookies and tracking tools like Meta Pixel and Google Analytics to:</p>
            <ul className="space-y-3 md:space-y-4 list-none">
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">Measure site performance and engagement</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">Understand how users find and use our landing pages</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">Attribute form submissions to specific marketing campaigns</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#003B63] mb-4 md:mb-6">6. Children’s Privacy (COPPA & GDPR-K)</h2>
            <p className="mb-4 md:mb-6 text-sm md:text-base font-medium">We understand the importance of protecting children’s privacy.</p>
            <ul className="space-y-3 md:space-y-4 list-none">
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">Child data is optional and may only be submitted by a parent or legal guardian.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">A parental consent notice is displayed during the form submission.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">We do not knowingly collect personal data directly from children under 16 without verified consent.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#003B63] mb-4 md:mb-6">7. Your Rights (GDPR, CCPA & Global)</h2>
            <p className="mb-4 md:mb-6">Depending on your location, you may have the following rights:</p>
            <ul className="space-y-3 md:space-y-4 list-none">
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">To access the data we have about you</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">To request correction or deletion of your personal data</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">To object to processing or request data portability</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">To withdraw your consent at any time</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">To file a complaint with a data protection authority</span>
              </li>
            </ul>
            <p className="mt-6 md:mt-8 text-[#003B63] text-sm md:text-base">To make a request, contact us at <a href="mailto:privacy@youngengineers.org" className="text-[#0097DC] hover:underline font-bold">privacy@youngengineers.org</a></p>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#003B63] mb-4 md:mb-6">8. International Data Transfers</h2>
            <p className="font-medium text-sm md:text-base">Your data may be stored or processed outside your home country (e.g., in the EU or US) using trusted cloud providers. We ensure appropriate safeguards and data protection agreements are in place.</p>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#003B63] mb-4 md:mb-6">9. Legal Entity and Data Controller</h2>
            <p className="mb-4 md:mb-6 font-medium text-sm md:text-base">The website is owned and operated by:</p>
            <p className="font-bold text-lg md:text-xl text-[#003B63]">YE WISE Learning Solutions Ltd</p>
            <p className="mt-6 md:mt-8 font-medium text-sm md:text-base">For service delivery and franchise coordination, your information may also be accessed by:</p>
            <p className="font-bold text-lg md:text-xl text-[#003B63]">E Square Young Engineers Franchising Ltd</p>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#003B63] mb-4 md:mb-6">10. Data Retention</h2>
            <ul className="space-y-3 md:space-y-4 list-none">
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">Form submission and campaign data is retained as long as needed for service and compliance.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">Chat screenshots and CRM records are stored securely for franchisee follow-up and may be deleted upon request.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#0097DC] mt-[10px] shrink-0"></div>
                <span className="font-medium text-sm md:text-base">Student data is stored indefinitely in AWS for academic history unless a deletion request is made.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#003B63] mb-4 md:mb-6">11. Security Measures</h2>
            <p className="font-medium text-sm md:text-base">We implement appropriate technical and organizational safeguards to protect your data against unauthorized access, misuse, or disclosure. However, no system is 100% secure, and we encourage users to avoid sharing sensitive information via messaging apps.</p>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#003B63] mb-4 md:mb-6">12. Changes to This Privacy Policy</h2>
            <p className="font-medium text-sm md:text-base">We may update this policy periodically. When we do, we will revise the “Last Updated” date at the top. We recommend reviewing it regularly to stay informed.</p>
          </div>

          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#003B63] mb-4 md:mb-6">13. Contact Us</h2>
            <p className="mb-4 text-[#003B63] font-medium text-sm md:text-base">For questions, concerns, or to exercise your data rights, contact:</p>
            <p className="text-lg md:text-xl text-[#003B63] font-bold">📧 <a href="mailto:privacy@youngengineers.org" className="text-[#0097DC] hover:underline font-bold">privacy@youngengineers.org</a></p>
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
