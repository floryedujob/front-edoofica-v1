/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'edufica.edujob.com.br',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
