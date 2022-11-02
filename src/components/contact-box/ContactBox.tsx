import { motion } from 'framer-motion';
import Link from 'next/link';
import type { FC, ReactElement } from 'react';
import { FiExternalLink } from 'react-icons/fi';

interface ContactBoxProps {
	name: string;
	icon: ReactElement;
	link: string;
	borderColor: string;
}

const ContactBox: FC<ContactBoxProps> = ({ name, icon, link, borderColor }) => {
	return (
		<Link href={link} passHref>
			<motion.a
				className={`mb-4 flex cursor-pointer items-center justify-center rounded-md border border-gray-800/50 bg-white/50 p-4 shadow-none shadow-white transition-colors duration-150 ${borderColor} hover:shadow-lg dark:bg-white/5`}
				whileHover={{ scale: 1.05 }}
				target="_blank"
				rel="noreferrer"
			>
				{icon}
				<h1 className="mx-3 text-sm font-medium text-black/80 dark:text-slate-400">
					{name}
				</h1>
				<FiExternalLink className="h-5 w-5 text-gray-600" />
			</motion.a>
		</Link>
	);
};

export default ContactBox;
