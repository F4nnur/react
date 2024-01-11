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
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda dicta doloremque expedita fugit ipsa ipsam laudantium optio. Corporis cumque deleniti enim esse laborum molestiae nesciunt nisi, quod saepe tempore, velit, voluptas voluptatum. Animi, aperiam aspernatur, aut beatae cum delectus deleniti et officiis, reiciendis reprehenderit soluta tempore vero vitae. Hic?
            </Modal>
        </div>
    );
};

export default Navbar;
