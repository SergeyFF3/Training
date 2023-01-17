import React, {ButtonHTMLAttributes, PropsWithChildren} from 'react';

const Button: React.FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = (props) => {

    const {
        className,
        children,
        ...otherProps
    } = props

    return (
        <button
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default React.memo(Button);