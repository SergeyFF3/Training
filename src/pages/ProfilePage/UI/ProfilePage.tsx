import React, { useState } from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './ProfilePage.module.scss'
import Button from "../../../shared/UI/Button/Button";
import Modal from "../../../shared/UI/Modal/Modal";

interface ProfilePageProps {
    className?: string
}

const ProfilePage = (props: ProfilePageProps) => {

    const {
        className
    } = props

const [isOpen, setIsOpen] = useState(false)

    const openHandler = () => {
        setIsOpen(true)
    }

    const closeHandler = () => {
        setIsOpen(false)
    }

    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
        <Button onClick={openHandler}>open</Button>
            <Modal
                isOpen={isOpen}
                onClose={closeHandler}
            >sjvsdfvndfsbuspgbjdsfb</Modal>
        </div>
    );
};

export default React.memo(ProfilePage);