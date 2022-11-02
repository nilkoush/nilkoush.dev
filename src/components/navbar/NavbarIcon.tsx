import type { FC, ReactElement } from 'react';
import { Tooltip } from 'react-tippy';

interface NavbarIconProps {
	icon: ReactElement;
	title: string;
	href: string;
}

const NavbarIcon: FC<NavbarIconProps> = ({ icon, title, href }) => {
	return (
		<>
			<li>
				<Tooltip title={title} position={'top'} duration={250}>
					<a
						className="block p-2"
						href={href}
						target="_blank"
						rel="noreferrer"
						aria-label={`Link for ${title}`}
					>
						{icon}
					</a>
				</Tooltip>
			</li>
		</>
	);
};

export default NavbarIcon;
