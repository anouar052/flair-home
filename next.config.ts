import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    devIndicators: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'cdn.prod.website-files.com' },
            { protocol: 'https', hostname: 'plus.unsplash.com' },
            {protocol:'https', hostname:'i.pinimg.com'}
        ],
    },
};

export default nextConfig;
