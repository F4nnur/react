import React from 'react';
import Modal from 'shared/UI/Modal/Modal';
import LoginForm from 'features/AuthByUsername/UI/LoginForm/LoginForm';

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
            isOpen={isOpen}
            onClose={onClose}
        >
            <LoginForm />
        </Modal>
    );
};

export default LoginModal;
