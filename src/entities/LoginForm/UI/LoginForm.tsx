import React from 'react';
import Input from 'shared/UI/Input/Input';
import Button from "../../../shared/UI/Button/Button";

interface LoginFormProps {
    email: string
    password: string
    isLoading: boolean | undefined
    error: string | undefined
    onChangeEmail: (value: string) => void
    onChangePassword: (value: string) => void
    onLogin: () => void
    onRegistration: () => void
}

const LoginForm = (props: LoginFormProps) => {

const {
    email,
    password,
    isLoading,
    error,
    onChangeEmail,
    onChangePassword,
    onLogin,
    onRegistration
} = props

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            LOGIN FORM
            {error && <p>{error}</p>}
            <div>
                <Input
                    type='text'
                    placeholder='Введите почту'
                    value={email}
                    onChange={onChangeEmail}
                />
            </div>
            <div>
                <Input
                    type='password'
                    placeholder='Введите пароль'
                    value={password}
                    onChange={onChangePassword}
                />
            </div>
            <div>
                <Button onClick={onLogin}>Войти</Button>
                <Button onClick={onRegistration}>Зарегистрироваться</Button>
            </div>
        </div>
    );
};

export default React.memo(LoginForm);