import type { FC } from 'react';
import { SiDribbble, SiGithub, SiInstagram, SiTwitter } from 'react-icons/si';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
	return (
		<>
			<footer className="flex w-full flex-col items-center justify-center py-4">
				<h2 className="text-2xl font-semibold text-black/50 dark:text-white/50">
					Nikolas Štanga
				</h2>
				<p className="text-base text-black/60 dark:text-white/30">
					web / app designer & developer
				</p>
				<ul className="flex">
					<li>
						<a
							className="block p-2"
							href="https://www.instagram.com/nilkoush"
							target="_blank"
							rel="noreferrer"
						>
							<SiInstagram className="h-5 w-5 fill-black/50 dark:fill-white/50" />
						</a>
					</li>
					<li>
						<a
							className="block p-2"
							href="https://www.dribbble.com/nilkoush"
							target="_blank"
							rel="noreferrer"
						>
							<SiDribbble className="h-5 w-5 fill-black/50 dark:fill-white/50" />
						</a>
					</li>
					<li>
						<a
							className="block p-2"
							href="https://www.github.com/nilkoush"
							target="_blank"
							rel="noreferrer"
						>
							<SiGithub className="h-5 w-5 fill-black/50 dark:fill-white/50" />
						</a>
					</li>
					<li>
						<a
							className="block p-2"
							href="https://www.twitter.com/nilkoush"
							target="_blank"
							rel="noreferrer"
						>
							<SiTwitter className="h-5 w-5 fill-black/50 dark:fill-white/50" />
						</a>
					</li>
				</ul>
			</footer>
		</>
	);
};

export default Footer;
