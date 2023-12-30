import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import Button, { ThemeButton } from 'shared/UI/Button/Button';
import AppLink from 'shared/UI/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/aboutIcon.svg';
import HomeIcon from 'shared/assets/icons/homeIcon.svg';
import cls from './Sidebar.module.scss';

export interface SidebarProps {
    className?: string;
}
function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(true);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                className={classNames(cls.toggleButton)}
                onClick={onToggle}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <HomeIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
}

export default Sidebar;
