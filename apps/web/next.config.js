/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'i.imgur.com',
    //   },
    ],
  },
  env: {
    GITHUB_ID: 'b9a50693d8346031029d',
    GITHUB_SECRET: '27e1fe29235d3e5d429399f2e82df9ac581360d4',
    NEXTAUTH_SECRET: 'ySrcg6UhdGWaDJoOgicCdKzvaCygrNLycTWUon2xgdE=',
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
