import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
