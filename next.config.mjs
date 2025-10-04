/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Environment variables (agar zarurat ho)
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },

  // ESLint ko build ke dauran skip karne ke liye (optional)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // TypeScript build errors ignore karne ke liye (optional, sirf learning ke liye)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Next.js experimental options
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
