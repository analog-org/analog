/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "media.discordapp.net",
      "cdn.discordapp.com",
      "discord.com",
      "avatars.githubusercontent.com",
    ],
  },
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  
};

module.exports = nextConfig;
