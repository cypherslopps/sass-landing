import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js", // Ensures SVGs are treated as JavaScript modules
      },
    },
  },
};

export default nextConfig;
