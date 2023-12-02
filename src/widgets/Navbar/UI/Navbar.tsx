import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import AppLink from "shared/UI/AppLink/AppLink";
import {useTranslation} from "react-i18next";

export interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation()
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.navbarLinks)}>
                <AppLink
                    to={'/'}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink
                    to={'/about'}
                >
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};

export default Navbar;
