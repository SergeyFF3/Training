import React, {useCallback, useState} from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import Modal from 'shared/UI/Modal/Modal';
import cls from './ProfilePage.module.scss'
import Button from "../../../shared/UI/Button/Button";

interface ProfilePageProps {
    className?: string
}

const ProfilePage = (props: ProfilePageProps) => {

    const {
        className
    } = props

    const [open, setOpen] = useState(false)

    // const openHandler = () => {
    //     setOpen(true)
    //
    // }
    //
    // const closeHandler = useCallback(() => {
    //     setOpen(false)
    // }, [])

    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            <Button onClick={() => setOpen(true)}>modal</Button>
            {/*<Button onClick={closeHandler}>modal FLSE</Button>*/}
           <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
           >
               12345
           </Modal>
        </div>
    );
};

export default React.memo(ProfilePage);