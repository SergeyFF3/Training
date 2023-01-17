import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './RegisterPage.module.scss'

interface RegisterPageProps {
    className?: string
}

const RegisterPage = (props: RegisterPageProps) => {

    const {
        className
    } = props

    return (
        <div className={classNames(cls.RegisterPage, {}, [className])}>
           REGISTER
        </div>
    );
};

export default React.memo(RegisterPage);