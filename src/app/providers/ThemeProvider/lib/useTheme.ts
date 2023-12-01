import {LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Themes;
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const currentTheme = theme === Themes.DARK ? Themes.NORMAL : Themes.DARK
        setTheme(currentTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme)
    }
    return {theme, toggleTheme}
}
