import React, {useCallback} from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './Navbar.module.scss'
import {NavbarItemList} from "../../model/items";
import NavbarItem from "../NavbarItem/NavbarItem";
import ThemeSwitcher from "../../../ThemeSwitcher/UI/ThemeSwitcher";
import {useSelector} from "react-redux";
import {getUserAuthData} from "../../../../entities/User/model/selectors/getUserAuthData";
import Button from "../../../../shared/UI/Button/Button";
import {useAppDispatch} from "../../../../app/provider/StoreProvider/store";
import { userActions } from 'entities/User/model/slices/userSlice';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
    className?: string
}

const Navbar = (props: NavbarProps) => {

    const {
        className
    } = props

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const authData = useSelector(getUserAuthData)

    const onLogin = useCallback(() => {
        navigate('/')
    }, [navigate])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
        navigate('/')
    }, [dispatch, navigate])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            {NavbarItemList.map(item => {
                return <NavbarItem
                    key={item.path}
                    item={item}
                />
            })}
            {authData ? <Button onClick={onLogout}>
                Выйти
            </Button>
            : <Button onClick={onLogin}>
                    Войти
                </Button>
            }
            <ThemeSwitcher/>
        </div>
    );
};

export default React.memo(Navbar);