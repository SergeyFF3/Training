import React from "react";
import {RouteProps} from "react-router-dom"
import {AuthPage} from "pages/AuthPage";
import {RegisterPage} from "pages/RegisterPage";
import {ProfilePage} from "pages/ProfilePage";
import {SearchPage} from "pages/SearchPage";
import {NotFoundPage} from "pages/NotFoundPage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    AUTH = 'auth',
    REGISTER = 'register',
    PROFILE = 'profile',
    SEARCH = 'search',
    NOT_FOUND = 'not_found'
}

export const RoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.AUTH]: '/',
    [AppRoutes.REGISTER]: '/register',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.SEARCH]: '/search',
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.AUTH]: {
        path: RoutesPath.auth,
        element: <AuthPage/>
    },
    [AppRoutes.REGISTER]: {
        path: RoutesPath.register,
        element: <RegisterPage/>
    },
    [AppRoutes.PROFILE]: {
        path: RoutesPath.profile,
        element: <ProfilePage/>
    },
    [AppRoutes.SEARCH]: {
        path: RoutesPath.search,
        element: <SearchPage/>,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutesPath.not_found,
        element: <NotFoundPage/>
    }
}