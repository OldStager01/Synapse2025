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
  /* config options here */
};

export default nextConfig;
