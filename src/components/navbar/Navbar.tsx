import Menu from '@components/menu';
import NavbarIcon from '@components/navbar/NavbarIcon';
import NavbarLanguage from '@components/navbar/NavbarLanguage';
import NavbarLink from '@components/navbar/NavbarLink';
import NavbarMenu from '@components/navbar/NavbarMenu';
import NavbarTheme from '@components/navbar/NavbarTheme';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { FC, useState } from 'react';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    const { t } = useTranslation('common');
    const [menu, setMenu] = useState(false);

    const closeMenu = () => {
        setMenu(false);
    };

    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <>
            <div className="fixed top-0 left-0 z-10 flex w-full flex-col">
                <header className="z-30 flex items-center justify-center border-b border-gray-800/50 bg-[#F0F0F0]/60 px-4 py-2 backdrop-blur-lg dark:bg-[#12181d]/60">
                    <nav className="container flex items-center justify-between">
                        <h1 className="text-2xl font-bold">
                            <Link href="/">
                                <a>nilkoush.dev</a>
                            </Link>
                        </h1>
                        <ul className="hidden items-center justify-center gap-2 lg:flex">
                            <NavbarLink href="/">
                                {t('pages.about_me')}
                            </NavbarLink>
                            <NavbarLink href="/portfolio">
                                {t('pages.portfolio')}
                            </NavbarLink>
                            <NavbarLink href="/contact">
                                {t('pages.contact')}
                            </NavbarLink>
                        </ul>
                        <div className="flex items-center justify-center gap-4">
                            <ul className="hidden items-center justify-center lg:flex">
                                <NavbarIcon
                                    icon={<SiGithub className="h-6 w-6" />}
                                    title="GitHub"
                                    href="https://www.github.com/nilkoush"
                                />
                                <NavbarIcon
                                    icon={<SiTwitter className="h-6 w-6" />}
                                    title="Twitter"
                                    href="https://www.twitter.com/nilkoush"
                                />
                                <NavbarIcon
                                    icon={<SiLinkedin className="h-6 w-6" />}
                                    title="LinkedIn"
                                    href="https://www.linkedin.com/in/nikolasstanga/"
                                />
                            </ul>
                            <hr className="hidden h-8 w-[2px] border-none bg-slate-900/50 dark:bg-white/50 lg:block" />
                            <div className="flex items-center justify-center">
                                <NavbarTheme />
                                <NavbarLanguage />
                                <NavbarMenu
                                    isOpened={menu}
                                    toggleMenu={toggleMenu}
                                />
                            </div>
                        </div>
                    </nav>
                </header>
                <AnimatePresence mode="wait">
                    {menu && <Menu closeMenu={closeMenu} />}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Navbar;
