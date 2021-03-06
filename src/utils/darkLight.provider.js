import React, { createContext, useState, useContext, useEffect } from "react";

const DarkLightContext = createContext();

const DarkLightProvider = (props) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (localStorage && localStorage.getItem("isDarkTheme") !== null) {
      setIsDark(!!localStorage.getItem("isDarkTheme"));
    } else if (typeof window !== undefined && window.matchMedia) {
      const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches;

      setIsDark(isDarkTheme);
      localStorage.setItem("isDarkTheme", isDarkTheme);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleThemeChange = (isDarkTheme) => {
    setIsDark(isDarkTheme);
    localStorage.setItem("isDarkTheme", isDarkTheme);
  };

  return (
    <DarkLightContext.Provider
      value={{
        isDark,
        changeTheme: (isDarkTheme) => handleThemeChange(isDarkTheme),
      }}
    >
      {props.children}
    </DarkLightContext.Provider>
  );
};

const useDarkLightProvider = () => useContext(DarkLightContext);

export { DarkLightProvider, useDarkLightProvider };
