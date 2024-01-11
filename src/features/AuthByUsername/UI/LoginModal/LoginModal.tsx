import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/UI/Modal/Modal';
import LoginForm from 'features/AuthByUsername/UI/LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

export interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}
const LoginModal = (props: LoginModalProps) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;
    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
        >
            <LoginForm />
        </Modal>
    );
};

export default LoginModal;
