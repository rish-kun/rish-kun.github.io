import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  transpilePackages: ["three"],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        chunkIds: "deterministic",
      };
    }
    return config;
  },
};

export default nextConfig;
