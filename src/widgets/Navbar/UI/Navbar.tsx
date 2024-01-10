import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Modal from 'shared/UI/Modal/Modal';
import Button from 'shared/UI/Button/Button';
import cls from './Navbar.module.scss';

export interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button className={cls.navbarLinks} onClick={onToggleModal}>{t('Войти')}</Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal} />
        </div>
    );
};

export default Navbar;
