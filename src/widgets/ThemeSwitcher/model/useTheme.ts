import {Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";
import {THEME_LOCALSTORAGE_KEY} from "../../../shared/const/localstorage/items";

interface UseThemeProps {
    theme?: Theme
    toggleTheme?: () => void
}

export function useTheme(): UseThemeProps {

    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        let newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

        setTheme?.(newTheme)
        localStorage.setItem(THEME_LOCALSTORAGE_KEY, newTheme)
    }

    return { theme, toggleTheme}
}