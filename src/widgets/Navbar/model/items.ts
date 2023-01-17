import {RoutesPath} from "app/provider/routing/routeConfig/routeConfig";

export interface NavbarItemType {
    path: string
    text: string
}

export const NavbarItemList: NavbarItemType[] = [
    {
        path: RoutesPath.profile,
        text: 'Профиль'
    },
    {
        path: RoutesPath.search,
        text: 'Пользователи'
    }
]