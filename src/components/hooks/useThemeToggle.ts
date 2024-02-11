import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import { getThemePreference, setTheme as toggle, type Theme } from '../toggleTheme';
import { useThemeDetector } from './UseThemeDetector';


const useThemeToggle = (): [Theme, Dispatch<SetStateAction<Theme>>, boolean]  => {
    const [theme, setTheme] = useState<Theme>(getThemePreference());
    
    const isDarkSystemTheme = useThemeDetector();

    // use effect in case system theme changes
    useEffect(() => {
        if (theme === 'system') {
            toggle(theme);
        }
    }, [isDarkSystemTheme]);

    // checks if the theme has changed and runs the toggle function
    useEffect(() => {
        const currentPref = getThemePreference();
        if (currentPref !== theme) {
            toggle(theme);
        }
    }, [theme])


    return [theme, setTheme, isDarkSystemTheme];
};

export default useThemeToggle;