import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {

    const {
        className
    } = props

    return (
        <div className={classNames(cls.ThemeSwitcher, {}, [className])}>
           
        </div>
    );
};

export default React.memo(ThemeSwitcher);