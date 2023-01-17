import React, {PropsWithChildren, ReactNode} from 'react';
import {Link, LinkProps} from 'react-router-dom';


const AppLink: React.FC<PropsWithChildren<LinkProps>> = (props) => {

    const {
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