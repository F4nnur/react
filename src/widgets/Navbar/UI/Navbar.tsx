import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Modal from 'shared/UI/Modal/Modal';
import Button from 'shared/UI/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthData, userActions } from 'entities/User';
import Text from 'shared/UI/Text/Text';
import cls from './Navbar.module.scss';

export interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModel = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button className={cls.navbarLinks} onClick={onLogOut}>{t('Выйти')}</Button>
            </div>
        );
    }
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button className={cls.navbarLinks} onClick={onOpenModel}>{t('Войти')}</Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};

export default Navbar;
