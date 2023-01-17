import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './ProfilePage.module.scss'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = (props: ProfilePageProps) => {

    const {
        className
    } = props

    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
           PROFILE
        </div>
    );
};

export default React.memo(ProfilePage);