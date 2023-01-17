import React from "react";
import {RouteProps} from "react-router-dom"
import {ProfilePage} from "pages/ProfilePage";
import {SearchPage} from "pages/SearchPage";
import {NotFoundPage} from "pages/NotFoundPage";

export type AppRouteType = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    PROFILE = 'profile',
    USERS = 'users',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.USERS]: '/users',
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRouteType> = {
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage/>,
    },
    [AppRoutes.USERS]: {
        path: RoutePath.users,
        element: <SearchPage/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
}