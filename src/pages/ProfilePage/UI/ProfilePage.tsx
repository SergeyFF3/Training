import React, {useEffect, useState} from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './ProfilePage.module.scss'
import Button from "../../../shared/UI/Button/Button";
import Modal from "../../../shared/UI/Modal/Modal";
import { useNavigate } from 'react-router-dom';
import {useAppDispatch} from "../../../app/provider/StoreProvider/store";
import {fetchProfileData} from "../model/services/fetchProfileData";
import {useSelector} from "react-redux";
import {getProfileData, getProfileError, getProfileIsLoading} from "../model/selectors/getProfileData";

interface ProfilePageProps {
    className?: string
}

const ProfilePage = (props: ProfilePageProps) => {

    const {
        className
    } = props

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const data = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)

const [isOpen, setIsOpen] = useState(false)

    const openHandler = () => {
        setIsOpen(true)
    }

    const closeHandler = () => {
        setIsOpen(false)
    }

    const onEditPage = () => {
        navigate('/edit')
    }

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            {error && <h1>{error}</h1>}
            <h1>{data?.email}</h1>
        <Button onClick={openHandler}>open</Button>
            <Modal
                isOpen={isOpen}
                onClose={closeHandler}
            >sjvsdfvndfsbuspgbjdsfb</Modal>
            <div>
               <Button onClick={onEditPage}>
                   Редактировать профиль
               </Button>
            </div>
        </div>
    );
};

export default React.memo(ProfilePage);