
export type Theme = 'light' | 'dark' | 'system';

export function setTheme(theme: Theme) {
    if (theme === "system") {
        const isDarkSystemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (isDarkSystemTheme) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    } else {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }

    // Save the new theme preference to localStorage
    if (typeof localStorage !== "undefined") {
        localStorage.setItem("theme", theme);
    }
}

export function getThemePreference(): Theme {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
        return localStorage.getItem("theme") as Theme;
    } else {
        localStorage.setItem("theme", "system");
        return "system";
    }
};