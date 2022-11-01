import { FC, ReactNode } from 'react';

interface SectionProps {
	children?: ReactNode;
	title: string;
	subtitle: string;
}

const Section: FC<SectionProps> = ({ children, title, subtitle }) => {
	return (
		<>
			<section
				className="flex flex-col items-center justify-center gap-8 py-36"
				id={subtitle.toLowerCase().replace(' ', '_')}
			>
				<header className="flex flex-col items-center justify-center gap-4 text-center font-bold">
					<p className="text-sm uppercase text-primary-500 dark:text-primary-400">
						{subtitle}
					</p>
					<h2 className="text-4xl">{title}</h2>
				</header>
				{children}
			</section>
		</>
	);
};

export default Section;
