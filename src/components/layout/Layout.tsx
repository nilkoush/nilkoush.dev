import Head from 'next/head';
import type { FC, ReactNode } from 'react';

interface LayoutProps {
	children?: ReactNode;
	title: string;
	description: string;
	url: string;
}

const Layout: FC<LayoutProps> = ({ children, title, description, url }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="title" content={title} />
				<meta name="description" content={description} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={url} />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content="/banner.png" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content={url} />
				<meta property="twitter:title" content={title} />
				<meta property="twitter:description" content={description} />
				<meta property="twitter:image" content="/banner.png" />
			</Head>
			{children}
		</>
	);
};

export default Layout;
