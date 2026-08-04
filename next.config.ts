import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add the static .local hostname so you never have to update dynamic IPs again
  allowedDevOrigins: ['10.10.7.75', '10.10.7.97', 'happyui-MacBookPro.local', 'localhost'],
};

export default nextConfig;
