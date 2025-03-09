import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "caratsandcake.com",
        pathname: "/_images/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/d/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true, // Вимкнення помилок TypeScript під час білду
  },
  eslint: {
    ignoreDuringBuilds: true, // Вимкнення ESLint під час білду
  },
};

export default nextConfig;
