import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // Useful for static exports or simple deployments
  },
};

export default nextConfig;
