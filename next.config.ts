import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/mintshelf", destination: "/mintshelf/index.html" },
      { source: "/mintshelf/privacy", destination: "/mintshelf/privacy/index.html" },
      { source: "/mintshelf/terms", destination: "/mintshelf/terms/index.html" },
      { source: "/mintshelf/support", destination: "/mintshelf/support/index.html" },
    ];
  },
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
