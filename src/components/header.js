import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { useDarkLightProvider } from "../utils/darkLight.provider";

import Logo from "../images/logo.svg";
import Sun from "../images/sun.svg";
import Moon from "../images/moon.svg";

const NavigationLink = ({ children, ...rest }) => (
  <Link
    className="px-3 text-gray-800 hover:border-b-2 border-gray-800 dark:border-blue-50 dark:text-blue-50"
    activeClassName="border-b hover:border-b"
    {...rest}
  >
    {children}
  </Link>
);

const Header = () => {
  const { isDark, changeTheme } = useDarkLightProvider();

  return (
    <header className="flex justify-between py-6 mx-4 mb-6 border-b border-gray-400">
      <nav className="flex space-x-3 items-end text-lg">
        <Link
          to="/"
          className="flex items-center font-bold font-heading text-gray-800 hover:text-gray-900 dark:text-blue-50 dark:hover:text-blue-100"
        >
          <Logo
            alt="A logo showing a 7 and a B"
            className="inline w-10 mr-4 align-text-bottom sm:align-middle"
          />
        </Link>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/posts">Posts</NavigationLink>
        <NavigationLink to="/activities">Activities</NavigationLink>
      </nav>
      <button onClick={() => changeTheme(!isDark)} aria-label="theme switch">
        {isDark ? (
          <Sun data-testid="sun-icon" className="h-6" />
        ) : (
          <Moon data-testid="moon-icon" className="h-6" />
        )}
      </button>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
