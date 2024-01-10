import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { createPortal } from 'react-dom';
import cls from './Portal.module.scss';

export interface PortalProps {
    children: React.ReactNode;
    element?: HTMLElement
}
const Portal = (props : PortalProps) => {
    const {
        children,
        element = document.body,
    } = props;
    return createPortal(children, element);
};

export default Portal;
