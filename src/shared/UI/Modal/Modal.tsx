import React, {ReactNode, useCallback, useState} from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './Modal.module.scss'
import Button from "../Button/Button";

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen: boolean
    onClose: () => void
}

const Modal = (props: ModalProps) => {

    const {
        className,
        children,
        onClose,
        isOpen,
    } = props

    const [isClosing, setIsClosing] = useState(false)

    const closeHandler = useCallback(() => {
        onClose()
    }, [onClose])

    const Mods: Record<string, boolean> = {
        [cls.closing]: isOpen,
        [cls.opened]: isOpen
    }

    return (
        <div className={classNames(cls.Modal, Mods, [])}>
           <div className={cls.overlay}>
               <div className={cls.content}>
                   {children}
                   <Button onClick={closeHandler}>X</Button>
               </div>
           </div>
        </div>
    );
};

export default Modal;