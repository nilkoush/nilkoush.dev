/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	trailingSlash: true,
	i18n,
	async redirects() {
		return [
			{
				source: '/instagram',
				destination: 'https://www.instagram.com/nilkoush',
				permanent: true,
			},
			{
				source: '/dribbble',
				destination: 'https://www.dribbble.com/nilkoush',
				permanent: true,
			},
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
				source: '/discord',
				destination: 'https://discord.gg/Xwjymdu2vW',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
