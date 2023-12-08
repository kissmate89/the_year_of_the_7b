import React, { createContext, useState, useContext, useEffect } from "react";

const DarkLightContext = createContext();

const DarkLightProvider = (props) => {
  const [isDark, setIsDark] = useState(null);

  useEffect(() => {
    let isDarkTheme = false;

    if (localStorage && localStorage.getItem("isDarkTheme") !== null) {
      isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));
    } else if (window.matchMedia) {
      isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
      localStorage.setItem("isDarkTheme", isDarkTheme);
    }

    isDarkTheme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");

    setIsDark(isDarkTheme);
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
