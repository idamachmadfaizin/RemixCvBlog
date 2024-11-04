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
import { AppThemeMode } from "./AppThemeMode.type";
import styles from "./AppThemeModeSwitch.module.scss";
import { AppThemeModeLocalStorageKey, appApplyRootThemeMode } from "./AppThemeModeUtils";

/**
 * Switch component for switching between theme modes (auto, light, dark).
 *
 * @author Idam Achmad Faizin
 */
export const AppThemeModeSwitch: React.FC<{}> = () => {
  const [theme, setTheme] = useState<AppThemeMode | null>(null);

  /**
   * Define a mapping between {@link AppThemeMode} and their corresponding icons.
   *
   * @author Idam Achmad Faizin
   */
  const iconMap: Record<AppThemeMode, HeroIconsComponent> = {
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
    const mode: AppThemeMode =
      (window.localStorage.getItem(
        AppThemeModeLocalStorageKey,
      ) as AppThemeMode | null) ?? "system";
    setTheme(mode);
  }, []);

  /**
   * Handle click ThemeModeSwitch button.
   *
   * @author Idam Achmad Faizin
   */
  const onClick = (selectedTheme: AppThemeMode) => {
    setTheme(selectedTheme);
    localStorage.setItem(AppThemeModeLocalStorageKey, selectedTheme);
    appApplyRootThemeMode(selectedTheme);
  };

  return (
    <Menu>
      <MenuButton className="rounded-lg p-2" aria-label="Theme Switch">
        <AppIcon
          icon={iconMap[theme ?? "system"]}
          active
          className="stroke-2"
        />
      </MenuButton>

      <MenuItems transition anchor="bottom end" className={styles.menuItems}>
        {(Object.keys(iconMap) as AppThemeMode[]).map((key) => (
          <MenuItem key={key}>
            <button
              className={twMerge(
                styles.menuItemsButton,
                key === theme && "text-primary-500",
              )}
              onClick={() => onClick(key)}
            >
              <AppIcon
                icon={iconMap[key]}
                active={key === theme}
                disabled={key !== theme}
                className="stroke-2"
              />
              {startCase(key)}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
