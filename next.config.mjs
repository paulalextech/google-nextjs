/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'blog.hubspot.com',
				pathname: '**',
			},
		],
	},
};

export default nextConfig;
// module.exports = nextConfig;
