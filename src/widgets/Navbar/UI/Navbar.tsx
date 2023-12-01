import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import AppLink from "shared/UI/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

export interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.navbarLinks)}>
                <AppLink
                    to={'/'}
                >
                    Главная
                </AppLink>
                <AppLink
                    to={'/about'}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};

export default Navbar;
