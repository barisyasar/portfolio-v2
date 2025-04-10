const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  expermental: {
    staleTimes: {
      dynamic: 300,
      static: 240,
    },
  },
};

module.exports = withNextIntl(nextConfig);
