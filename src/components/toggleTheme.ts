export function toggleTheme() {
    const currentTheme = getThemePreference();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Update the class on the document element
    document.documentElement.classList.remove(currentTheme);
    document.documentElement.classList.add(newTheme);

    // Save the new theme preference to localStorage
    if (typeof localStorage !== "undefined") {
        localStorage.setItem("theme", newTheme);
    }
}

export function getThemePreference() {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
        return localStorage.getItem("theme");
    } else {
        const userPref = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        localStorage.setItem("theme", userPref);
        return userPref;
    }
};