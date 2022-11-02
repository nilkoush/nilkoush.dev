import { ProjectType } from '@types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { FC } from 'react';
import { IoCode, IoOpen } from 'react-icons/io5';

interface ProjectBoxProps {
	project: ProjectType;
}

const ProjectBox: FC<ProjectBoxProps> = ({ project }) => {
	return (
		<>
			<motion.article
				whileHover={{ scale: 1.01 }}
				className="flex flex-col rounded-md border border-gray-800/50 bg-white/50 shadow-none shadow-white transition-colors duration-150 hover:shadow-lg dark:bg-white/5"
			>
				<header className="border-b border-zinc-800/50">
					<Image
						className="rounded-t-md border-b border-black"
						src={project.image}
						alt={`${project.title}`}
						width="1920"
						height="1080"
					/>
				</header>
				<main className="p-4">
					<h3 className="font-semibold">{project.title}</h3>
					<p className="text-sm text-gray-800/70 dark:text-gray-100/70">
						{project.description}
					</p>
				</main>
				<footer className="flex flex-col justify-between gap-4 p-4 text-sm text-gray-700 dark:text-gray-300 lg:flex-row">
					<a
						className="flex items-center gap-2"
						href={`https://${project.link}`}
						target="_BLANK"
						rel="noreferrer"
					>
						<IoOpen className="h-4 w-4" />
						{project.link}
					</a>
					<p className="flex items-center gap-2">
						<IoCode className="h-4 w-4" />
						{project.build_with}
					</p>
				</footer>
			</motion.article>
		</>
	);
};

export default ProjectBox;
