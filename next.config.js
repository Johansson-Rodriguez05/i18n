/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['es-ES', 'en-EN'],
    defaultLocale: 'es-ES'
  }
}

module.exports = nextConfig
