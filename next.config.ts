import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    domains: ['seu-dominio.com'],
    formats: ['image/avif', 'image/webp'],
  },
};


export default nextConfig;
