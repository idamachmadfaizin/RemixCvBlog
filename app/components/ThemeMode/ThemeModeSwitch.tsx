import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import startCase from "lodash.startcase";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { HeroIconsComponent } from "~/types/heroicons.type";
import { AppIcon } from "../AppIcon/AppIcon";
import { ThemeMode } from "./ThemeMode.type";
import styles from "./ThemeModeSwitch.module.scss";
import { ThemeModeLocalStorageKey, applyRootThemeMode } from "./ThemeModeUtils";

/**
 * Switch component for switching between theme modes (auto, light, dark).
 *
 * @author Idam Achmad Faizin
 */
export const ThemeModeSwitch: React.FC<{}> = () => {
  const [theme, setTheme] = useState<ThemeMode | null>(null);

  /**
   * Define a mapping between {@link ThemeMode} and their corresponding icons.
   *
   * @author Idam Achmad Faizin
   */
  const iconMap: Record<ThemeMode, HeroIconsComponent> = {
    light: SunIcon,
    dark: MoonIcon,
    system: ComputerDesktopIcon,
  };

  /**
   * UseEffect hook to run once when the component mounts.
   * Get the theme mode from local storage, or default to "auto"
   *
   * @author Idam Achmad Faizin
   */
  useEffect(() => {
    const mode: ThemeMode =
      (window.localStorage.getItem(
        ThemeModeLocalStorageKey,
      ) as ThemeMode | null) ?? "system";
    setTheme(mode);
  }, []);

  /**
   * Handle click ThemeModeSwitch button.
   *
   * @author Idam Achmad Faizin
   */
  const onClick = (selectedTheme: ThemeMode) => {
    setTheme(selectedTheme);
    localStorage.setItem(ThemeModeLocalStorageKey, selectedTheme);
    applyRootThemeMode(selectedTheme);
  };

  return (
    <Menu>
      <MenuButton className="rounded-lg p-2" aria-label="Theme Switch">
        <AppIcon icon={iconMap[theme ?? "system"]} />
      </MenuButton>

      <MenuItems transition anchor="bottom end" className={styles.menuItems}>
        {(Object.keys(iconMap) as ThemeMode[]).map((key) => (
          <MenuItem key={key}>
            <button
              className={twMerge(
                styles.menuItemsButton,
                key === theme && "text-primary-500",
              )}
              onClick={() => onClick(key)}
            >
              <AppIcon icon={iconMap[key]} active={key === theme} />
              {startCase(key)}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
