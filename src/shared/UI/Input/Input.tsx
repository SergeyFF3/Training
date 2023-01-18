import React, {InputHTMLAttributes} from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './Input.module.scss'

type InputType = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends InputType {
    className?: string
    value?: string
    onChange?: (value: string) => void
}

const Input = (props: InputProps) => {

    const {
        className,
        value,
        onChange,
        ...otherProps
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }


    return (
       <input
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
       />
    );
};

export default Input;