import React, {useEffect} from 'react';
import './styles/index.scss'
import {classNames} from "../shared/helpers/classNames/classNames";
import AppRoutes from "./provider/routing/AppRoutes/AppRoutes";
import Navbar from "../widgets/Navbar/UI/Navbar/Navbar";
import {useTheme} from "../widgets/ThemeSwitcher/model/useTheme";
import {useAppDispatch} from "./provider/StoreProvider/store";
import {userActions} from 'entities/User/model/slices/userSlice';

const App = () => {

    const {theme} = useTheme()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])


    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRoutes/>
        </div>
    );
}

export default React.memo(App);
