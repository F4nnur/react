import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './LanguageSwitcher.module.scss'
import {useTranslation} from "react-i18next";
import Button, {ThemeButton} from "shared/UI/Button/Button";

export interface LanguageSwitcherProps {
    className?: string;
}

const LanguageSwitcher = ({className}: LanguageSwitcherProps) => {

    const {t, i18n} = useTranslation()
    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames(cls.LanguageSwitcher, {}, [className])}
            onClick={changeLanguage}
        >
            {t('Язык')}
        </Button>

    );
};

export default LanguageSwitcher;
