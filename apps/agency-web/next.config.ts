import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui", "@repo/booking-core", "@repo/types"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "marcopolocorfu.com",
      },
      {
        protocol: "https",
        hostname: "ion-boats.com",
      },
      {
        protocol: "https",
        hostname: "aeolinavillas.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
