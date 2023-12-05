import React from 'react';
import './Loader.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export interface LoaderProps {
    className?: string;
}

const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-spinner', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);

export default Loader;
