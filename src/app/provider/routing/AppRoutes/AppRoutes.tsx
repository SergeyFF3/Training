import React, { Suspense } from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './AppRoutes.module.scss'
import {routeConfig} from "../routeConfig/routeConfig";
import AppLink from 'shared/UI/AppLink/AppLink';
import {Route, Routes } from 'react-router-dom';
import {useSelector} from "react-redux";
import {getUserAuthData} from "../../../../entities/User/model/selectors/getUserAuthData";

interface AppRoutesProps {
    className?: string
}

const AppRoutes = (props: AppRoutesProps) => {

    const {
        className
    } = props

    const isAuth = useSelector(getUserAuthData)

    const routes = React.useMemo(() => {
        return Object.values(routeConfig).filter(route => {
            if(route.authOnly && !isAuth) {
                return false
            }
            return true
        })
    }, [isAuth])

    return (
        <Routes>
            {routes.map( route => {
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={
                            <Suspense fallback='Loading...'>
                                {route.element}
                            </Suspense>
                        }
                    />
                )
            })}
        </Routes>
    );
};

export default React.memo(AppRoutes);