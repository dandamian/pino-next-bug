/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["pino"],
  },
  transpilePackages: ["ui"],
};

module.exports = nextConfig;
