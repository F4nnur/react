import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/UI/Button/Button';
import Input from 'shared/UI/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import Text, { TextTheme } from 'shared/UI/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}
const LoginForm = memo((props: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const handleUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const handlePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    const {
        className,
    } = props;
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                type="text"
                className={cls.input}
                onChange={handleUsername}
                placeholder={t('Имя')}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                onChange={handlePassword}
                placeholder={t('Пароль')}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

export default LoginForm;
