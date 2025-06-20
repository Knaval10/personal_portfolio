import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yilab.org.np",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
