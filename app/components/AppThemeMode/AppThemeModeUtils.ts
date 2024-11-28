import { AppLightDarkThemeMode, AppThemeMode } from "./AppThemeMode.type";

/**
 * Key used to store the theme mode in local storage.
 *
 * @author Idam Achmad Faizin
 */
export const AppThemeModeLocalStorageKey = "theme";

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
export function appApplyRootThemeMode(theme: AppThemeMode) {
  const themeModeAttributeKey = "data-theme";

  const computedMode: AppLightDarkThemeMode =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;

  if (computedMode === "dark") {
    document.documentElement.setAttribute(themeModeAttributeKey, "dark");
  } else {
    document.documentElement.removeAttribute(themeModeAttributeKey);
  }
}
