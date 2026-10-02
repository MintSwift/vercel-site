import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/ott-chart", destination: "/ott-chart/index.html" },
      { source: "/mintshelf", destination: "/mintshelf/index.html" },
      { source: "/mintshelf/privacy", destination: "/mintshelf/privacy/index.html" },
      { source: "/mintshelf/terms", destination: "/mintshelf/terms/index.html" },
      { source: "/mintshelf/support", destination: "/mintshelf/support/index.html" },
      { source: "/ott-chart/privacy", destination: "/ott-chart/privacy/index.html" },
      { source: "/ott-chart/support", destination: "/ott-chart/support/index.html" },
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
