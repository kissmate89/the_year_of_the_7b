import React, { createContext, useState, useContext, useEffect } from "react"

const DarkLightContext = createContext()

const DarkLightProvider = props => {
  const [isDark, setTheme] = useState(false)

  useEffect(() => {
    if (
      localStorage &&
      JSON.parse(localStorage.getItem("isDarkTheme")) !== null
    ) {
      setTheme(JSON.parse(localStorage.getItem("isDarkTheme")))
    } else if (typeof window !== undefined && window.matchMedia) {
      let isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
      setTheme(isDarkTheme)
      localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme))
    }
  }, [])

  const handleThemeChange = isDarkTheme => {
    setTheme(isDarkTheme)
    localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme))
  }

  return (
    <DarkLightContext.Provider
      value={{
        isDark,
        changeTheme: isDarkTheme => handleThemeChange(isDarkTheme),
      }}
    >
      {props.children}
    </DarkLightContext.Provider>
  )
}

const useDarkLightProvider = () => useContext(DarkLightContext)

export { DarkLightProvider, useDarkLightProvider, DarkLightContext }
