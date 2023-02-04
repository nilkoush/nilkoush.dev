import Footer from '@components/footer';
import Layout from '@components/layout';
import Navbar from '@components/navbar';
import Section from '@components/section/Section';
import TechItem from '@components/tech-item';
import { NextPageWithLayout } from '@pages/page';
import { motion } from 'framer-motion';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
	SiGit,
	SiGithub,
	SiJavascript,
	SiMysql,
	SiNextdotjs,
	SiNodedotjs,
	SiNpm,
	SiPrisma,
	SiReact,
	SiShopify,
	SiTailwindcss,
	SiTypescript,
	SiVisualstudiocode,
	SiWordpress,
} from 'react-icons/si';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale as string, [
				'common',
				'home',
			])),
		},
	};
};

const HomePage: NextPageWithLayout = () => {
	const { t } = useTranslation(['common', 'home']);

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
					title={t('home:about_me.title')}
					subtitle={t('common:pages.about_me')}
				>
					<p
						className="prose dark:prose-invert"
						dangerouslySetInnerHTML={{
							__html: t('home:about_me.body', {
								interpolation: { escapeValue: false },
							}),
						}}
					/>
					<h3 className="text-2xl font-bold">
						{t('home:what_i_do.title')}
					</h3>
					<p
						className="prose dark:prose-invert"
						dangerouslySetInnerHTML={{
							__html: t('home:what_i_do.body', {
								interpolation: { escapeValue: false },
							}),
						}}
					/>
					<ul className="mb-12 flex flex-wrap items-center justify-center rounded-md border border-gray-800 bg-white/10 p-1 dark:bg-black/10">
						<TechItem icon={SiTypescript} name="TypeScript" />
						<TechItem icon={SiVisualstudiocode} name="VSCode" />
						<TechItem icon={SiJavascript} name="Javascript" />
						<TechItem icon={SiGithub} name="GitHub" />
						<TechItem icon={SiGit} name="Git" />
						<TechItem icon={SiReact} name="ReactJS" />
						<TechItem icon={SiNextdotjs} name="NextJS" />
						<TechItem icon={SiTailwindcss} name="TailwindCSS" />
						<TechItem icon={SiWordpress} name="Wordpress" />
						<TechItem icon={SiPrisma} name="Prisma" />
						<TechItem icon={SiMysql} name="MySQL" />
						<TechItem icon={SiNodedotjs} name="NodeJS" />
						<TechItem icon={SiShopify} name="Shopify" />
						<TechItem icon={SiNpm} name="NPM" />
					</ul>
				</Section>
			</motion.main>
		</>
	);
};

HomePage.getLayout = (page) => {
	return (
		<Layout
			title="Nikolas Štanga"
			description="I'm a self-taught young freelance web / app designer and also developer from Czech Republic. I've been doing stuff around web for nearly 3 years now."
			url="https://www.nilkoush.dev/"
		>
			<Navbar />
			{page}
			<Footer />
		</Layout>
	);
};

export default HomePage;
