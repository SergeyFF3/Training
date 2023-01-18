import React from 'react';
import {classNames} from 'shared/helpers/classNames/classNames';
import cls from './AuthPage.module.scss'
import {AuthByEmail} from "../../../features/AuthByEmail";

interface AuthPageProps {
    className?: string
}

const AuthPage = (props: AuthPageProps) => {

    const {
        className
    } = props

    return (
        <div className={classNames(cls.AuthPage, {}, [className])}>
            <AuthByEmail/>
        </div>
    );
};

export default React.memo(AuthPage);