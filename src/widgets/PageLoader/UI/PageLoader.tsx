import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Loader from 'shared/UI/Loader/Loader';
import cls from './PageLoader.module.scss';

export interface PageLoaderProps {
    className?: string;
}
const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);

export default PageLoader;
