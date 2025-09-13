/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
  },
  // Ensure static files are properly served
  trailingSlash: false,
  assetPrefix: '',
}

module.exports = nextConfig
