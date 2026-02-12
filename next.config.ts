import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecfixnsgwkzsxkaczwkv.supabase.co",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
