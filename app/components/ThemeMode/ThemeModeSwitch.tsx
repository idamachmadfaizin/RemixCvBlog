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
        <SunIcon className="size-5 stroke-primary-500 stroke-2" />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="mt-2 w-36 origin-top-right rounded-xl border border-gray-300 bg-white/5 p-1 text-sm/6 text-gray-800 shadow-lg transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 dark:border-gray-700 dark:border-white/5 dark:bg-gray-800 dark:text-white dark:shadow-none"
      >
        {(Object.keys(iconMap) as ThemeMode[]).map((key) => (
          <MenuItem key={key}>
            <button
              className={twMerge(
                "group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 font-medium data-[focus]:bg-primary-500/10 dark:data-[focus]:bg-primary-200/20",
                key === theme && "text-primary-500",
              )}
              onClick={() => onClick(key)}
            >
              {React.createElement(iconMap[key], {
                className: twMerge(
                  "size-5 stroke-gray-400 stroke-2 dark:stroke-gray-500",
                  key === theme && "stroke-primary-500 dark:stroke-primary-500",
                ),
              })}
              {startCase(key)}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
