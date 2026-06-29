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
      {
        protocol: "https",
        hostname: "cwolspzfaaiedmynzssx.supabase.co",
        pathname: "/**",
      },
      // Dev placeholder images
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

