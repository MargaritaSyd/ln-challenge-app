import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'resizer.glanacion.com',
      port: '',
      pathname: '/resizer/**',
    },
  ],
};

export default nextConfig;
