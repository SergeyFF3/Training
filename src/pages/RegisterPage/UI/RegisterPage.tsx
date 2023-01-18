import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './RegisterPage.module.scss'
import {Registration} from "features/Registration";


interface RegisterPageProps {
    className?: string
}

const RegisterPage = (props: RegisterPageProps) => {

    const {
        className
    } = props

    return (
        <div className={classNames(cls.RegisterPage, {}, [className])}>
            <Registration/>
        </div>
    );
};

export default React.memo(RegisterPage);