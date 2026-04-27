import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yefranchisees.b-cdn.net",
      },
    ],
  },
};

export default nextConfig;
