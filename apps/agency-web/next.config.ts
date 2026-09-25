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
  async redirects() {
    return [
      {
        source: "/services/:slug*",
        destination: "/el/services/:slug*",
        permanent: true,
      },
      {
        source: "/case-studies",
        destination: "/el/case-studies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
