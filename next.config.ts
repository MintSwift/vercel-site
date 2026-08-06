import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tools.applemediaservices.com",
        pathname: "/api/badges/**",
      },
    ],
  },
};

export default nextConfig;
