import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "t3.ftcdn.net",
      "media.gettyimages.com",
      "encrypted-tbn0.gstatic.com",
      "images.unsplash.com",
      "assets.aceternity.com",
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" }, // Allow all origins
          { key: "Access-Control-Allow-Methods", value: "GET, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "*" },
          // {
          //   key: "Cache-Control",
          //   value: "public, max-age=31536000, immutable",
          // },
        ],
      },
    ];
  },
};

export default nextConfig;
