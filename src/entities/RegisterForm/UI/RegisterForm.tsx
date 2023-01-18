import React from 'react';
import Input from "../../../shared/UI/Input/Input";
import Button from "../../../shared/UI/Button/Button";

interface RegisterFormProps {
    email: string
    password: string
    isLoading: boolean | undefined
    error: string | undefined
    onChangeEmail: (value: string) => void
    onChangePassword: (value: string) => void
    onRegistration: () => void
}

const RegisterForm = (props: RegisterFormProps) => {

    const {
        email,
        password,
        error,
        isLoading,
        onChangeEmail,
        onChangePassword,
        onRegistration
    } = props

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            REGISTER
            <div>
                {error && <p>{error}</p>}
            </div>
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
                    type='number'
                    placeholder='Введите пароль'
                    value={password}
                    onChange={onChangePassword}
                />
            </div>
            <div>
                <Button onClick={onRegistration}>Зарегистрироваться</Button>
            </div>
        </div>
    );
};

export default React.memo(RegisterForm);