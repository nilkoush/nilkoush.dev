import { Listbox } from '@headlessui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Tooltip } from 'react-tippy';

interface NavbarLanguageProps {}

const NavbarLanguage: FC<NavbarLanguageProps> = () => {
	const router = useRouter();

	const changeLanguage = (language: string) => {
		const { pathname, asPath, query } = router;
		router.push({ pathname, query }, asPath, { locale: language });
	};

	return (
		<>
			<Listbox
				as="div"
				className="relative"
				value={router.locale}
				onChange={changeLanguage}
			>
				<Tooltip
					title="Change language"
					position={'top'}
					duration={250}
				>
					<Listbox.Button className="flex cursor-pointer items-center justify-center rounded-md bg-transparent p-2 hover:bg-black/5 dark:hover:bg-white/5">
						<Image
							src={`/${router.locale}.svg`}
							alt={`${router.locale}`}
							width={32}
							height={24}
						/>
					</Listbox.Button>
				</Tooltip>
				<Listbox.Options className="absolute z-[200] flex flex-col rounded-md border border-gray-800/50 bg-white/50 shadow-white transition-colors duration-150 dark:bg-white/5">
					{router.locales?.map((locale: string, index) => (
						<Listbox.Option
							className="flex cursor-pointer items-center justify-center bg-transparent p-2 hover:bg-black/5 dark:hover:bg-white/5"
							key={index}
							value={locale}
						>
							<Image
								src={`/${locale}.svg`}
								alt={`${locale}`}
								width={32}
								height={24}
							/>
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Listbox>
		</>
	);
};

export default NavbarLanguage;
