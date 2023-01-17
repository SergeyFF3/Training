import {RoutePath} from "../../../app/provider/router/routeConfig/routeConfig";

export interface NavbarListProps {
    path: string
    text: string
}

export const NavbarList: NavbarListProps[] = [
    {
        path: RoutePath.profile,
        text: 'Профиль'
    },
    {
        path: RoutePath.users,
        text: 'Пользователи'
    }
]