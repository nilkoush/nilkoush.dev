import MenuIcon from '@components/menu/MenuIcon';
import MenuItem from '@components/menu/MenuItem';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { SiDribbble, SiGithub, SiInstagram, SiTwitter } from 'react-icons/si';

interface MenuProps {
	closeMenu: () => void;
}

const Menu: FC<MenuProps> = ({ closeMenu }) => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.1, ease: 'easeInOut' }}
				className="fixed z-20 block h-screen w-full overflow-hidden bg-black/10 backdrop-blur-md lg:hidden"
			></motion.div>
			<motion.nav
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.1, ease: 'easeInOut' }}
				className="z-30 flex flex-col gap-4 bg-gradient-to-bl from-white to-[#E5E6E4] pb-4 dark:from-black dark:to-[#0d131f] lg:hidden"
			>
				<ul className="flex flex-col items-center justify-center">
					<MenuItem href="/" closeMenu={closeMenu}>
						About me
					</MenuItem>
					<MenuItem href="/portfolio" closeMenu={closeMenu}>
						Portfolio
					</MenuItem>
					<MenuItem href="/contact" closeMenu={closeMenu}>
						Contact
					</MenuItem>
				</ul>
				<ul className="flex justify-center">
					<MenuIcon
						icon={<SiInstagram className="h-6 w-6" />}
						title="Instagram"
						href="https://www.instagram.com/nilkoush"
					/>
					<MenuIcon
						icon={<SiDribbble className="h-6 w-6" />}
						title="Dribbble"
						href="https://www.dribbble.com/nilkoush"
					/>
					<MenuIcon
						icon={<SiGithub className="h-6 w-6" />}
						title="GitHub"
						href="https://www.github.com/nilkoush"
					/>
					<MenuIcon
						icon={<SiTwitter className="h-6 w-6" />}
						title="Twitter"
						href="https://www.twitter.com/nilkoush"
					/>
				</ul>
			</motion.nav>
		</>
	);
};

export default Menu;
