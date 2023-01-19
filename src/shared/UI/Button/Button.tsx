import React, {ButtonHTMLAttributes, PropsWithChildren, ReactNode} from 'react';
import cls from './Button.module.scss'
import {classNames} from "../../helpers/classNames/classNames";

export enum Theme {
    OUTLINE = 'outline',
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: Theme
    children: ReactNode
    // className?: string
}

const Button = (props: ButtonProps) => {

    const {
        className,
        children,
        theme = Theme.CLEAR,
        ...otherProps
    } = props

    const Mods: Record<string, boolean> = {
        [cls[theme]]: true
    }

    return (
        <button
            className={classNames('', {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default React.memo(Button);