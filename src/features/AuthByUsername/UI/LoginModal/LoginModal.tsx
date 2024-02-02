import React, { Suspense } from 'react';
import Modal from 'shared/UI/Modal/Modal';
import Loader from 'shared/UI/Loader/Loader';
import { LoginFormAsync } from 'features/AuthByUsername/UI/LoginForm/LoginForm.async';

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
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};

export default LoginModal;
