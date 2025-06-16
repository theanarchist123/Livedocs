
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript:{
    // Enable type checking during build
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'img.clerk.com' },
      { protocol: 'https', hostname: 'api.dicebear.com' },
    ]
  }
};

export default nextConfig;
