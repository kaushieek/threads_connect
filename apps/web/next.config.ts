import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: [
    '@threads-connect/ui',
    '@threads-connect/types',
    '@threads-connect/api-client',
  ],
};

export default nextConfig;
