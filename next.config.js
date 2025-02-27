/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // 在生產構建過程中忽略 ESLint 錯誤
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 