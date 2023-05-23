import { useState, useEffect } from "react";
import { ReactComponent as Moon } from "../images/moon.svg";
import { ReactComponent as MoonDark } from "../images/dark-mode-images/moon.svg";

import PropTypes from "prop-types";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState("");

  // set the local storage as well as the state to this mode
  const setTheme = (theme) => {
    window.localStorage.setItem("theme", theme);
    setDarkMode(theme);
  };

  // toggle between dark and light
  const toggleDark = () => {
    darkMode === "" ? setTheme("dark") : setTheme("");
  };

  // get the local stored theme
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setDarkMode(localTheme);
  }, []);
  return [darkMode, toggleDark];
};

export const Toggle = ({ darkMode, toggleDark }) => {
  return (
    <div className="m-8 absolute">
      {" "}
      <button onClick={toggleDark}>
        {darkMode === "dark" ? <MoonDark /> : <Moon />}
      </button>
    </div>
  );
};
Toggle.propTypes = {
  darkMode: PropTypes.string.isRequired,
  toggleDark: PropTypes.func.isRequired,
};
