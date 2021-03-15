import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { useDarkLightProvider } from "../utils/darkLight.provider"

import Logo from "../images/logo.svg"
import Sun from "../images/sun.svg"
import Moon from "../images/moon.svg"

const Header = ({ siteTitle }) => {
  const { isDark, changeTheme } = useDarkLightProvider()

  return (
    <header className="flex justify-between py-6 mx-4 mb-6 border-b border-gray-400">
      <Link
        to="/"
        className="flex items-center font-bold font-heading text-gray-800 hover:text-gray-900 dark:text-blue-50 dark:hover:text-blue-100"
      >
        <Logo
          alt="A logo showing a 7 and a B"
          className="inline w-10 mr-4 align-text-bottom sm:align-middle"
        />
        <span className="hidden sm:inline text-4xl">{siteTitle}</span>
      </Link>
      <button onClick={() => changeTheme(!isDark)}>
        {isDark ? <Sun className="h-6" /> : <Moon className="h-6" />}
      </button>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
