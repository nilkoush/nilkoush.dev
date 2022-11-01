import type { FC, ReactElement } from 'react';

interface MenuIconProps {
	icon: ReactElement;
	href: string;
}

const MenuIcon: FC<MenuIconProps> = ({ icon, href }) => {
	return (
		<>
			<li>
				<a
					className="block p-4"
					href={href}
					target="_blank"
					rel="noreferrer"
				>
					{icon}
				</a>
			</li>
		</>
	);
};

export default MenuIcon;
