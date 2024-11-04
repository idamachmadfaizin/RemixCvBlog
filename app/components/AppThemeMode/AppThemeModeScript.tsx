import React from "react";
import { AppThemeMode } from "./AppThemeMode.type";
import { AppThemeModeLocalStorageKey, appApplyRootThemeMode } from "./AppThemeModeUtils";

/**
 * The ThemeModeScript props type.
 *
 * @author Idam Achmad Faizin
 */
type Props = React.ComponentPropsWithoutRef<"script">;

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
export const AppThemeModeScript: React.FC<Props> = (props) => {
  // Default theme mode if none is found in local storage.
  const defaultMode: AppThemeMode = "system";

  return (
    <script
      {...props}
      dangerouslySetInnerHTML={{
        __html: `
          try {
            const mode = window.localStorage.getItem("${AppThemeModeLocalStorageKey}") ?? "${defaultMode}";
            const appApplyRootThemeMode = ${appApplyRootThemeMode};
            appApplyRootThemeMode(mode);
          } catch (e) {
            console.error("ThemeModeScript", e);
          }
        `,
      }}
    />
  );
};
