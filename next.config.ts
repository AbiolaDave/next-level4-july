import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: [
      "images.pexels.com",
      "cdn.dummyjson.com",
      "cdn.dummyjson.com",
      "dummyjson.com",
    ],
  },

  reactCompiler: true,
};

export default nextConfig;
