import { useEffect, useState } from "react";

export const useThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());  

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        darkThemeMq.addEventListener("change", (e) => setIsDarkTheme(e.matches));
        return () => darkThemeMq.removeEventListener("change", (e) => setIsDarkTheme(e.matches));
    }, []);

    return isDarkTheme;
}