/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: "https",
        hostname: "camo.githubusercontent.com"
      },
      {
        protocol: "https",
        hostname: "media.discordapp.net"
      }
    ],
  },

}

module.exports = nextConfig
