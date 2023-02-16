const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    i18n,
    async redirects() {
        return [
            {
                source: '/github',
                destination: 'https://www.github.com/nilkoush',
                permanent: true,
            },
            {
                source: '/twitter',
                destination: 'https://www.twitter.com/nilkoush',
                permanent: true,
            },
            {
                source: '/linkedin',
                destination: 'https://www.linkedin.com/in/nikolasstanga',
                permanent: true,
            },
            {
                source: '/discord',
                destination: 'https://discord.gg/Xwjymdu2vW',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
