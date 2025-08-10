import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337", // si tu Strapi corre en este puerto
        pathname: "/uploads/**", // o "*" para permitir todo
      },
    ],
  },
};

export default nextConfig;
