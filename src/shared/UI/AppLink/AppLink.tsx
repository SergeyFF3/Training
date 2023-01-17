import React, {PropsWithChildren} from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import {Link, LinkProps} from "react-router-dom";

interface AppLinkProps extends PropsWithChildren<LinkProps> {
    className?: string
}

const AppLink = (props: AppLinkProps) => {

    const {
        className,
        children,
        to,
        ...otherProps
    } = props

    return (
        <Link
              to={to}
              {...otherProps}
        >
            {children}
        </Link>
    );
};

export default React.memo(AppLink);