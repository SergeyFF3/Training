import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './Navbar.module.scss'
import {NavbarItemList} from "../../model/items";
import NavbarItem from "../NavbarItem/NavbarItem";
import ThemeSwitcher from "../../../ThemeSwitcher/UI/ThemeSwitcher";

interface NavbarProps {
    className?: string
}

const Navbar = (props: NavbarProps) => {

    const {
        className
    } = props

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            {NavbarItemList.map(item => {
                return <NavbarItem
                    key={item.path}
                    item={item}
                />
            })}
            <ThemeSwitcher/>
        </div>
    );
};

export default React.memo(Navbar);