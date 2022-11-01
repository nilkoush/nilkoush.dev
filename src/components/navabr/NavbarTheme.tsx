import { FC, useEffect, useState } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { Tooltip } from 'react-tippy';

interface NavbarThemeProps {}

const NavbarTheme: FC<NavbarThemeProps> = () => {
	const [theme, setTheme] = useState<string>('dark');

	useEffect(() => {
		let storedTheme = localStorage.getItem('theme') as string;

		if (!storedTheme) {
			localStorage.setItem('theme', theme);
		} else {
			setTheme(storedTheme);
			storedTheme === 'light'
				? document.querySelector('html')?.classList.remove('dark')
				: null;
			storedTheme === 'dark'
				? document.querySelector('html')?.classList.add('dark')
				: null;
		}
	}, []);

	const changeTheme = (theme: string) => {
		let newTheme = theme === 'light' ? 'dark' : 'light';

		localStorage.setItem('theme', newTheme);
		setTheme(newTheme);
		newTheme === 'light'
			? document.querySelector('html')?.classList.remove('dark')
			: document.querySelector('html')?.classList.add('dark');
	};

	return (
		<>
			<Tooltip title="Change theme" position={'top'} duration={250}>
				<button
					className="cursor-pointer rounded-md bg-transparent p-2 hover:bg-black/5 dark:hover:bg-white/5"
					onClick={() => changeTheme(theme)}
				>
					{theme === 'light' && <IoSunny className="h-6 w-6" />}
					{theme === 'dark' && <IoMoon className="h-6 w-6" />}
				</button>
			</Tooltip>
		</>
	);
};

export default NavbarTheme;
