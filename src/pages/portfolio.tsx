import Footer from '@components/footer';
import Layout from '@components/layout';
import Navbar from '@components/navbar/Navbar';
import ProjectBox from '@components/project-box';
import Section from '@components/section';
import projects from '@data/projects.json';
import { NextPageWithLayout } from '@pages/page';
import { motion } from 'framer-motion';

const PortfolioPage: NextPageWithLayout = () => {
	return (
		<>
			<motion.main
				className="container"
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.95 }}
				transition={{ ease: 'easeOut', duration: 0.15 }}
			>
				<Section title="Look what I've made ✨" subtitle="Projects">
					<p className="prose dark:prose-invert">
						You can also see my designs and concepts on my{' '}
						<a
							href="https://www.dribbble.com/nilkoush"
							target="_blank"
							rel="noreferrer"
						>
							Dribble
						</a>
						.
					</p>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						{projects.map((project) => (
							<ProjectBox key={project.id} project={project} />
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
