import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/events/deploy-spring',
        destination: '/events/deploy-sprint',
        permanent: true,
      },
    ]
  },
  images: {
    localPatterns: [
      {
        pathname: '/team/**',
      },
      {
        pathname: '/**',
        search: '',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'www.github.com'
      }
    ],
  },
  turbopack: {
    root: __dirname,
  },
}

export default nextConfig
