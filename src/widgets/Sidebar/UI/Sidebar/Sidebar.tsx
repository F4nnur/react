import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import Button from 'shared/UI/Button/Button';
import cls from './Sidebar.module.scss';

export interface SidebarProps {
    className?: string;
}
function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(true);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            {/* <Button className={classNames(cls.toggleButton)} onClick={onToggle}>toggle</Button> */}
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
}

export default Sidebar;
