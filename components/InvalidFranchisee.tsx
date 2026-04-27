import Image from "next/image";

export default function InvalidFranchisee() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
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

      <h1 className="text-4xl font-bold bg-clip-text text-[#162A5A] mb-4">
        Website Cannot Be Loaded
      </h1>
      
      <p className="text-xl text-gray-600 mb-8 max-w-md">
        This website cannot be loaded because it's not associated with any Franchisee.
      </p>

      <div className="space-y-4 text-gray-500">
        <p>
          If you believe you should have access to this content, please contact{" "}
          <a 
            href="mailto:support@youngengineers.org" 
            className="text-blue-600 hover:underline"
          >
            support@youngengineers.org
          </a>
        </p>
        <p>Thank you for your interest in Young Engineers!</p>
      </div>
    </div>
  );
}
