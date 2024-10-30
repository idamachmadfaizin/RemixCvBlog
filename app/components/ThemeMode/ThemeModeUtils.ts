import { ThemeMode } from "./ThemeMode.type";

/**
 * Key used to store the theme mode in local storage.
 * 
 * @author Idam Achmad Faizin
 */
export const ThemeModeLocalStorageKey = "theme";

/**
 * Applies the given theme mode to the root element of the document.
 * 
 * If the theme is "auto", it will be determined based on the user's 
 * preferred color scheme (dark or light). Otherwise, the given theme 
 * will be applied directly.
 * 
 * @author Idam Achmad Faizin
 * @param theme The theme mode to apply.
 */
export function applyRootThemeMode(theme: ThemeMode) {
  const computedMode: Exclude<ThemeMode, "auto"> =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;

  if (computedMode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
