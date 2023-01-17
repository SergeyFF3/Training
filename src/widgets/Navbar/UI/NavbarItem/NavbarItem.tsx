import React from 'react';
import {NavbarListProps} from "../../model/NavbarList";
import AppLink from "../../../../shared/UI/AppLink/AppLink";

interface NavbarItemProps {
    className?: string
    item: NavbarListProps
}

const NavbarItem = (props: NavbarItemProps) => {

    const {
        className,
        item
    } = props

    return (
        <div >
            <AppLink
                to={item.path}
            >{item.text}</AppLink>
        </div>
    );
};

export default React.memo(NavbarItem);