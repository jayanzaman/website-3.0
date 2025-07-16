/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/images/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['next/image'],
  },
}

module.exports = nextConfig
