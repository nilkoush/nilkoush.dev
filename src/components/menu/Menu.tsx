import MenuIcon from '@components/menu/MenuIcon';
import MenuItem from '@components/menu/MenuItem';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';

interface MenuProps {
    closeMenu: () => void;
}

const Menu: FC<MenuProps> = ({ closeMenu }) => {
    const { t } = useTranslation('common');

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1, ease: 'easeInOut' }}
                className="fixed z-10 block h-screen w-full overflow-hidden bg-black/10 backdrop-blur-md lg:hidden"
                onClick={closeMenu}
            ></motion.div>
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1, ease: 'easeInOut' }}
                className="z-20 flex flex-col gap-4 bg-gradient-to-bl from-white to-[#E5E6E4] pb-4 dark:from-black dark:to-[#0d131f] lg:hidden"
            >
                <ul className="flex flex-col items-center justify-center">
                    <MenuItem href="/" closeMenu={closeMenu}>
                        {t('pages.about_me')}
                    </MenuItem>
                    <MenuItem href="/portfolio" closeMenu={closeMenu}>
                        {t('pages.portfolio')}
                    </MenuItem>
                    <MenuItem href="/contact" closeMenu={closeMenu}>
                        {t('pages.contact')}
                    </MenuItem>
                </ul>
                <ul className="flex justify-center">
                    <MenuIcon
                        icon={<SiGithub className="h-6 w-6" />}
                        title="GitHub"
                        href="https://www.github.com/nilkoush"
                    />
                    <MenuIcon
                        icon={<SiTwitter className="h-6 w-6" />}
                        title="Twitter"
                        href="https://www.twitter.com/nilkoush"
                    />
                    <MenuIcon
                        icon={<SiLinkedin className="h-6 w-6" />}
                        title="LinkedIn"
                        href="https://www.linkedin.com/in/nikolasstanga/"
                    />
                </ul>
            </motion.nav>
        </>
    );
};

export default Menu;
