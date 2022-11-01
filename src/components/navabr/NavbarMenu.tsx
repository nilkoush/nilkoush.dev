import { FC } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';

interface NavbarMenuProps {
	isOpened: boolean;
	toggleMenu: () => void;
}

const NavbarMenu: FC<NavbarMenuProps> = ({ isOpened, toggleMenu }) => {
	return (
		<>
			<button
				className="block cursor-pointer rounded-md bg-transparent p-2 hover:bg-black/5 dark:hover:bg-white/5 lg:hidden"
				onClick={toggleMenu}
			>
				{isOpened ? (
					<IoClose className="h-6 w-6" />
				) : (
					<IoMenu className="h-6 w-6" />
				)}
			</button>
		</>
	);
};

export default NavbarMenu;
