import { Link } from "@remix-run/react";
import React from "react";
import { twMerge } from "tailwind-merge";
import { AppThemeModeSwitch } from "../AppThemeMode/AppThemeModeSwitch";
import { HomeIcon } from "@heroicons/react/24/outline";
import { AppIcon } from "../AppIcon/AppIcon";

type Props = React.ComponentPropsWithoutRef<"nav">;

export const AppNavbar: React.FC<Props> = ({ className, ...props }) => {
  return (
    <nav className={twMerge("py-2.5 lg:px-6", className)} {...props}>
      <div className="mx-auto flex flex-wrap items-center justify-between">
        <Link
          to="/"
          className="flex items-center"
          aria-label="Go to home route"
        >
          <AppIcon icon={HomeIcon} className="size-6 stroke-2" />
        </Link>
        <div className="flex gap-x-1">
          <Link
            to={`about`}
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:text-primary-500 lg:px-5 lg:py-2.5 dark:text-white"
          >
            About
          </Link>
          <AppThemeModeSwitch />
        </div>
      </div>
    </nav>
  );
};
