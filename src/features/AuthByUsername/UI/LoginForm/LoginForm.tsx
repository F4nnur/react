import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/UI/Button/Button';
import Input from 'shared/UI/Input/Input';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}
const LoginForm = (props: LoginFormProps) => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const handleValue = (value: string) => {
        setValue(value);
    };
    const {
        className,
    } = props;
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input type="text" className={cls.input} onChange={handleValue} placeholder={t('Имя')} />
            <Input type="text" className={cls.input} onChange={handleValue} placeholder={t('Пароль')} />
            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};

export default LoginForm;
