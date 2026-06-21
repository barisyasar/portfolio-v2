import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const config: NextConfig = {
  trailingSlash: true,

  devIndicators: {
    position: 'top-left',
  },
  cacheComponents: true,
};

export default withNextIntl(config);
