import { useEffect, useState } from "react";
import { ThemeMode } from "./ThemeMode.type";
import { ThemeModeLocalStorageKey, applyRootThemeMode } from "./ThemeModeUtils";

/**
 * Switch component for switching between theme modes (auto, light, dark).
 * 
 * @author Idam Achmad Faizin
 */
export const ThemeModeSwitch = () => {
  const [theme, setTheme] = useState<ThemeMode | null>(null);

  /**
   * UseEffect hook to run once when the component mounts.
   * Get the theme mode from local storage, or default to "auto"
   * 
   * @author Idam Achmad Faizin
   */
  useEffect(() => {
    const mode: ThemeMode =
      (window.localStorage.getItem(
        ThemeModeLocalStorageKey
      ) as ThemeMode | null) ?? "auto";
    setTheme(mode);
  }, []);

  /**
   * Handle click ThemeModeSwitch button.
   * 
   * @author Idam Achmad Faizin
   */
  const onClick = () => {
    // Mapping of current theme to the next theme in the cycle
    const nextThemeMap: Record<ThemeMode, ThemeMode> = {
      auto: "light",
      light: "dark",
      dark: "auto",
    };
    // Get the next theme based on the current theme
    const nextTheme = nextThemeMap[theme!];

    setTheme(nextTheme);
    localStorage.setItem(ThemeModeLocalStorageKey, nextTheme);
    applyRootThemeMode(nextTheme);
  };

  return (
    <button
      type="button"
      className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      onClick={onClick}
    >
      {theme ? theme.toUpperCase() : "..."}
    </button>
  );
};
