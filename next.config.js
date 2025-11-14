/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",   // TMDB images
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com", // Your logo
      },
    ],
    unoptimized: true, // 🚀 Fix TimeoutError + _next/image 500 errors
  },
};

module.exports = nextConfig;
