import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './Navbar.module.scss'
import {NavbarList} from "../../model/NavbarList";
import NavbarItem from "../NavbarItem/NavbarItem";

interface NavbarProps {
    className?: string
}

const Navbar = (props: NavbarProps) => {

    const {
        className
    } = props

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            {NavbarList.map(item => {
                return (
                    <NavbarItem
                        key={item.path}
                        item={item}
                    />
                )
            })}
        </div>
    );
};

export default React.memo(Navbar);