import React from 'react';
import {NavbarItemType} from "../../model/items";
import AppLink from "shared/UI/AppLink/AppLink";

interface NavbarItemProps {
    item: NavbarItemType
}

const NavbarItem = (props: NavbarItemProps) => {

    const {
        item
    } = props

    return (
        <AppLink
            to={item.path}
        >
            {item.text}
        </AppLink>
    );
};

export default React.memo(NavbarItem);