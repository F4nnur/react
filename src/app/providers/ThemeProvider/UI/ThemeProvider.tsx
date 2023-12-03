import React, { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from '../lib/ThemeContext';

const defaultValue = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.NORMAL;

const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Themes>(defaultValue);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
