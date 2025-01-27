/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}

module.exports = nextConfig
