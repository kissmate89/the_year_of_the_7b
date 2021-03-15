import React, { createContext, useState, useContext, useEffect } from "react"

const DarkLightContext = createContext()

const DarkLightProvider = (props) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const handleThemeChange = (isDarkTheme) => {
    if (isDarkTheme) {
      setIsDark(true)
      localStorage.theme = "dark"
    } else {
      setIsDark(false)
      localStorage.theme = "light"
    }
  }

  return (
    <DarkLightContext.Provider
      value={{
        isDark,
        changeTheme: (isDarkTheme) => handleThemeChange(isDarkTheme),
      }}
    >
      {props.children}
    </DarkLightContext.Provider>
  )
}

const useDarkLightProvider = () => useContext(DarkLightContext)

export { DarkLightProvider, useDarkLightProvider, DarkLightContext }
