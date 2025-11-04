import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "firebasestorage.googleapis.com"],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
