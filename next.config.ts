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
    loader: "custom",
    loaderFile: "./src/lib/appwrite-image-loader.ts",
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
      },
      {
        protocol: 'https',
        hostname: 'sgp.cloud.appwrite.io',
        pathname: '/v1/storage/buckets/**',
      },
      {
        protocol: 'https',
        hostname: 'cloud.appwrite.io',
        pathname: '/v1/storage/buckets/**',
      },
    ],
  },
  turbopack: {
    root: __dirname,
  },
}

export default nextConfig
