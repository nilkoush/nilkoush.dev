/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	trailingSlash: true,
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
		];
	},
};

module.exports = nextConfig;
