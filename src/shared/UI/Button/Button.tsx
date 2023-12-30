import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        square,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
    };

    return (
        <button
            type="button"
            {...otherProps}
            className={classNames(cls.Button, mods, [className, cls[theme]])}
        >
            {children}
        </button>
    );
};

export default Button;
