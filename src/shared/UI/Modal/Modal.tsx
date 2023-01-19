import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {classNames, Mods} from "shared/helpers/classNames/classNames";
import cls from './Modal.module.scss'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

const delay = 300

const Modal = (props: ModalProps) => {

    const {
        className,
        isOpen,
        onClose,
        children
    } = props

    const [isClosing, setIsClosing] = useState(false)

    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const closeHandler = () => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, delay)
        }
    }

    const contentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    useEffect(() => {
        return () => clearTimeout(timerRef.current)
    }, [isOpen])

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing
    }

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
           <div onClick={closeHandler} className={cls.overlay}>
               <div onClick={contentClick} className={cls.content}>
                   {children}
               </div>
           </div>
        </div>
    );
};

export default React.memo(Modal);