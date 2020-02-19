import React, { createContext, useState, useContext } from "react"

const DarkLightContext = createContext()

const DarkLightProvider = props => {
  const [isDark, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  )

  return (
    <DarkLightContext.Provider
      value={{
        isDark,
        changeTheme: () => setTheme(!isDark),
      }}
    >
      {props.children}
    </DarkLightContext.Provider>
  )
}

const useDarkLightProvider = () => useContext(DarkLightContext)

export { DarkLightProvider, useDarkLightProvider, DarkLightContext }
