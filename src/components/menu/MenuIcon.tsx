import type { FC, ReactElement } from 'react';

interface MenuIconProps {
	icon: ReactElement;
	title: string;
	href: string;
}

const MenuIcon: FC<MenuIconProps> = ({ icon, title, href }) => {
	return (
		<>
			<li>
				<a
					className="block p-4"
					href={href}
					target="_blank"
					rel="noreferrer"
					aria-label={`Link for ${title}`}
				>
					{icon}
				</a>
			</li>
		</>
	);
};

export default MenuIcon;
