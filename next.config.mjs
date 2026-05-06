/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- Bas ye ek line add karni hai
  images: {
    unoptimized: true, // <-- Static export ke liye Next.js images ko unoptimized karna zaroori hota hai
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;