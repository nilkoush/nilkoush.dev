import Footer from '@components/footer';
import Layout from '@components/layout';
import Navbar from '@components/navbar/Navbar';
import RepoBox from '@components/repo-box';
import Section from '@components/section';
import { NextPageWithLayout } from '@pages/page';
import { RepoType } from '@types';
import { motion } from 'framer-motion';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
	const repos = await fetch(
		`https://api.github.com/users/nilkoush/repos?type=owner&per_page=100`
	).then((res) => res.json());

	const topRepos = repos
		.sort(
			(a: Record<string, any>, b: Record<string, any>) =>
				b.stargazers_count - a.stargazers_count
		)
		.slice(0, 6);

	return {
		props: {
			repos: topRepos,
			...(await serverSideTranslations(locale as string, [
				'common',
				'portfolio',
			])),
		},
	};
};

interface PortfolioPageProps {
	repos: RepoType[];
}

const PortfolioPage: NextPageWithLayout<PortfolioPageProps> = ({ repos }) => {
	const { t } = useTranslation(['common', 'portfolio']);

	return (
		<>
			<motion.main
				className="container"
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.95 }}
				transition={{ ease: 'easeOut', duration: 0.15 }}
			>
				<Section
					title={t('portfolio:github_projects.title')}
					subtitle={t('common:pages.portfolio')}
				>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{repos.map((repo) => (
							<RepoBox key={repo.id} repo={repo} />
						))}
					</div>
				</Section>
			</motion.main>
		</>
	);
};

export default PortfolioPage;

PortfolioPage.getLayout = (page) => {
	return (
		<Layout
			title="Portfolio | Nikolas Štanga"
			description="Look at my projects what I've done in my career or my designs / concepts on dribbble."
			url="https://www.nilkoush.dev/portfolio/"
		>
			<Navbar />
			{page}
			<Footer />
		</Layout>
	);
};
