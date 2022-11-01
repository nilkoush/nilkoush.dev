import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';

interface MenuItemProps {
	children?: ReactNode;
	href: string;
	closeMenu: () => void;
}

const MenuItem: FC<MenuItemProps> = ({ children, href, closeMenu }) => {
	const router = useRouter();

	return (
		<>
			<li className="w-full">
				<Link href={href}>
					<a
						className={`${
							router.pathname === href
								? 'bg-black/10 dark:bg-[#c8c8dc]/10 '
								: 'bg-transparent hover:bg-gray-700/5 dark:text-white dark:hover:bg-[#c8c8dc]/5 '
						}cursor-pointer block w-full py-4 text-center text-black/80 transition-all duration-75 hover:text-black dark:text-white/80 dark:hover:text-white`}
						onClick={closeMenu}
					>
						{children}
					</a>
				</Link>
			</li>
		</>
	);
};

export default MenuItem;
