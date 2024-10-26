import React from "react";
import { ThemeMode } from "./ThemeMode.type";
import { ThemeModeLocalStorageKey, applyRootThemeMode } from "./ThemeModeUtils";

/**
 * Script component for applying the theme mode to the root element.
 * This script is injected into the head of the document.
 * 
 * It attempts to retrieve the theme mode from local storage. 
 * If not found, it defaults to "auto".
 * It then calls the applyRootThemeMode function to set the theme on the root element.
 * 
 * @author Idam Achmad Faizin
 */
export const ThemeModeScript = (
  props: React.ComponentPropsWithoutRef<"script">
) => {
  // Default theme mode if none is found in local storage.
  const defaultMode: ThemeMode = "auto";

  return (
    <script
      {...props}
      dangerouslySetInnerHTML={{
        __html: `
          try {
            const mode = window.localStorage.getItem("${ThemeModeLocalStorageKey}") ?? "${defaultMode}";
            const applyRootThemeMode = ${applyRootThemeMode};
            applyRootThemeMode(mode);
          } catch (e) {
            console.error("ThemeModeScript", e);
          }
        `,
      }}
    />
  );
};
