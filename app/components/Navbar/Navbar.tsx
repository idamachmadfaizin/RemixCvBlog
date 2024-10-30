import { Link } from "@remix-run/react";
import { ThemeModeSwitch } from "../ThemeMode/ThemeModeSwitch";

export const Navbar = () => {
  return (
    <header>
      <nav className="px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              width="24"
              height="24"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Home
            </span>
          </Link>
          <div className="flex gap-x-1">
            <Link
              to={`about`}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:text-primary-500 lg:px-5 lg:py-2.5 dark:text-white"
            >
              About
            </Link>
            <ThemeModeSwitch />
          </div>
        </div>
      </nav>
    </header>
  );
};
