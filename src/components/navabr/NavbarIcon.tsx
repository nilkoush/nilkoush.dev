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
			<Tooltip title={title} position={'top'} duration={250}>
				<li>
					<a
						className="block p-2"
						href={href}
						target="_blank"
						rel="noreferrer"
					>
						{icon}
					</a>
				</li>
			</Tooltip>
		</>
	);
};

export default NavbarIcon;
