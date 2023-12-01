import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import AppLink, {AppLinkTheme} from "shared/UI/AppLink/AppLink";

export interface NavbarProps {
    toggleTheme: () => void;
    className?: string;
}
const Navbar = ({toggleTheme, className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.navbarLinks)}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={'/'}
                >
                    Главная
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={'/about'}
                >
                    О сайте
                </AppLink>
            </div>
            <div className={classNames(cls.themeSwitchButtonContainer)}>
                <button onClick={toggleTheme}>Change Theme</button>
            </div>
        </div>
    );
};

export default Navbar;
