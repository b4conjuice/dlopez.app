const redirects = require('./src/lib/redirects')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return Object.entries(redirects).map(([key, value]) => ({
      source: `/${key}`,
      destination: value,
      permanent: false,
    }))
  },
}
