import { useEffect, useState } from 'react';
import { getThemePreference, toggleTheme as toggle } from '../toggleTheme';
import { useThemeDetector } from './UseThemeDetector';

type Theme = 'light' | 'dark';

const useThemeToggle = (): [Theme, () => void, boolean, boolean, () => void] => {
    const [theme, setTheme] = useState<Theme>('light' as Theme);
    
    const isDarkSystemTheme = useThemeDetector();
    const [usingSystemTheme, setUsingSystemTheme] = useState(true);

    // checks if the system theme has changed and updates the theme accordingly
    useEffect(() => {
        if (usingSystemTheme) {
            if (isDarkSystemTheme) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        }
    }, [isDarkSystemTheme, usingSystemTheme]);

    // checks if the theme has changed and runs the toggle function
    useEffect(() => {
        const currentPref = getThemePreference();
        if (currentPref !== theme) {
            toggle()
        }
    }, [theme])


    const toggleTheme = () => {
        setUsingSystemTheme(false);
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const useSystemTheme = () => {
        setUsingSystemTheme(true);
    }

    return [theme, toggleTheme, isDarkSystemTheme, usingSystemTheme, useSystemTheme];
};

export default useThemeToggle;