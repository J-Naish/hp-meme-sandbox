/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
