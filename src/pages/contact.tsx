import ContactBox from '@components/contact-box';
import ContactForm from '@components/contact-form';
import Footer from '@components/footer';
import Layout from '@components/layout';
import Navbar from '@components/navbar/Navbar';
import Section from '@components/section';
import { NextPageWithLayout } from '@pages/page';
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';

const ContactPage: NextPageWithLayout = () => {
	return (
		<>
			<motion.main
				className="container"
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.95 }}
				transition={{ ease: 'easeOut', duration: 0.15 }}
			>
				<Section title="I'm here for you 💬" subtitle="Contact">
					<div className="flex w-full flex-col items-center justify-center md:w-auto">
						<div className="flex w-full flex-col md:w-auto md:flex-row md:gap-4">
							<ContactBox
								borderColor="hover:border-[#5865F2]/50"
								icon={
									<SiDiscord className="h-6 w-6 text-[#5865F2]" />
								}
								link="https://nilkoush.dev/discord"
								name="nilkoush.dev/discord"
							/>
							<ContactBox
								borderColor="hover:border-gray-400/50"
								icon={
									<FiMail className="h-6 w-6 text-gray-400" />
								}
								link="mailto:hello@nilkoush.dev"
								name="hello@nilkoush.dev"
							/>
						</div>
						<ContactForm />
					</div>
				</Section>
			</motion.main>
		</>
	);
};

export default ContactPage;

ContactPage.getLayout = (page) => {
	return (
		<Layout
			title="Contact | Nikolas Štanga"
			description="Contact me through contact form or other available methods."
			url="https://www.nilkoush.dev/contact/"
		>
			<Navbar />
			{page}
			<Footer />
		</Layout>
	);
};
