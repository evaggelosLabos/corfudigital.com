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
      { source: "/el/kataskevi-istoselidon-kerkyra", destination: "/el/κατασκευή-ιστοσελίδων-κέρκυρα", permanent: true },
      { source: "/en/kataskevi-istoselidon-kerkyra", destination: "/en/website-development-corfu", permanent: true },
      { source: "/el/website-development-corfu", destination: "/el/κατασκευή-ιστοσελίδων-κέρκυρα", permanent: true },
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
