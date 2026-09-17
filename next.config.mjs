import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./lib/i18n/config.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Let Next.js optimize images (WebP/AVIF, responsive sizes).
    // The project runs as a server (it has API routes), so static-export
    // compatibility is not required.
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
};

export default withNextIntl(nextConfig);
