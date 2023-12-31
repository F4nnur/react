import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/UI/Button/Button';
import cls from './LanguageSwitcher.module.scss';

export interface LanguageSwitcherProps {
    className?: string;
    short?: boolean;
}

const LanguageSwitcher = ({ className, short }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.LanguageSwitcher, {}, [className])}
            onClick={changeLanguage}
        >
            {t(short ? 'Короткая версия' : 'Язык')}
        </Button>

    );
};

export default LanguageSwitcher;
