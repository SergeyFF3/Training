import React from 'react';
import './styles/index.scss'
import {classNames} from "../shared/helpers/classNames/classNames";
import Navbar from "../widgets/Navbar/UI/Navbar/Navbar";
import AppRoutes from "./provider/AppRoutes/AppRoutes";

const App = () => {



    return (
        <div className={classNames('app', {}, [])}>
            <Navbar/>
            <AppRoutes/>
        </div>
    );
}

export default React.memo(App);
