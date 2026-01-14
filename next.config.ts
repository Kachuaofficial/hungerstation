import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org', // For brand logos
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com', // For brand logos
        
      },
    ],
  },
};

export default nextConfig;