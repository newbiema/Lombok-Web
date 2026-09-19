import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/jasa-pembuatan-website-lombok.html",
        destination: "/jasa-pembuatan-website-lombok",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
