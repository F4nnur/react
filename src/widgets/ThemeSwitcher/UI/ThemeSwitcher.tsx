import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Themes, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/darkThemeIcon.svg';
import LightIcon from 'shared/assets/icons/lightThemeIcon.svg';
import Button, { ThemeButton } from 'shared/UI/Button/Button';

export interface ThemeSwitcherProps {
    className?: string;
}

function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Themes.DARK ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
}

export default ThemeSwitcher;
