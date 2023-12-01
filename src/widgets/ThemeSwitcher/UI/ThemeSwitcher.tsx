import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {Themes, useTheme} from "app/providers/ThemeProvider";
import DarkIcon from 'shared/assets/icons/darkThemeIcon.svg'
import LightIcon from 'shared/assets/icons/lightThemeIcon.svg'
import Button, {ThemeButton} from "shared/UI/Button/Button";

export interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme,toggleTheme} = useTheme()

    return (
        <Button
            theme={ThemeButton.CONFIGURED}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Themes.DARK ? <LightIcon/> : <DarkIcon/>}
        </Button>
    );
};

export default ThemeSwitcher;
