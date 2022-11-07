import Footer from '@components/footer';
import Layout from '@components/layout';
import Navbar from '@components/navbar/Navbar';
import Section from '@components/section/Section';
import TechItem from '@components/tech-item';
import { NextPageWithLayout } from '@pages/page';
import { motion } from 'framer-motion';
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

const HomePage: NextPageWithLayout = () => {
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
					title="Hello there, I'm Nikolas 👋"
					subtitle="About me"
				>
					<p className="prose dark:prose-invert">
						I&apos;m a <strong>self-taught</strong> young{' '}
						<strong>freelance</strong> web / app{' '}
						<strong>designer</strong> and also{' '}
						<strong>developer</strong> from Czech republic.
						I&apos;ve been doing stuff around web for nearly{' '}
						<strong>3 years</strong> now.
					</p>
					<h3 className="text-2xl font-bold">What I do? 💭</h3>
					<p className="prose dark:prose-invert">
						From web designing in{' '}
						<a
							href="https://www.figma.com"
							target="_blank"
							rel="noreferrer"
						>
							Figma
						</a>
						, because I have passion in UI & UX design, through
						reworking the design into custom{' '}
						<a
							href="https://www.wordpress.org"
							target="_blank"
							rel="noreferrer"
						>
							Wordpress
						</a>{' '}
						design to working around with{' '}
						<a
							href="https://www.shopify.com"
							target="_blank"
							rel="noreferrer"
						>
							Shopify
						</a>{' '}
						and it&apos;s themes. I also really love{' '}
						<a
							href="https://www.reactjs.org"
							target="_blank"
							rel="noreferrer"
						>
							React
						</a>
						, which this entire website is written in, and it&apos;s
						whole ecosystem (
						<a
							href="https://www.nextjs.org"
							target="_blank"
							rel="noreferrer"
						>
							NextJS
						</a>
						, etc.). You can see below, what I&apos;ve tried and
						liked or what I&apos;m working with.
					</p>
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

export default HomePage;

HomePage.getLayout = (page) => {
	return (
		<Layout
			title="Nikolas Štanga"
			description="I'm a self-taught young freelance website / webapp designer and also developer from Czech Republic. I've been doing stuff around web for nearly 3 years now."
			url="https://www.nilkoush.dev/"
		>
			<Navbar />
			{page}
			<Footer />
		</Layout>
	);
};
