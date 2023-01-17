import React from 'react';
import './styles/index.scss'
import {classNames} from "../shared/helpers/classNames/classNames";
import AppRoutes from "./provider/routing/AppRoutes/AppRoutes";
import Navbar from "../widgets/Navbar/UI/Navbar/Navbar";
import {useTheme} from "../widgets/ThemeSwitcher/model/useTheme";

const App = () => {

    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRoutes/>
        </div>
    );
}

export default React.memo(App);
