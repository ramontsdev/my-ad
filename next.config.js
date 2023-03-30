/** @type {import('next').NextConfig} */

/* async function redirects() {
  return [
    {
      source: '/',
      destination: '/home',
      permanent: false,
    },
  ]
} */

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx']
}

module.exports = nextConfig
