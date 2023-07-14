import React from "react";
// import { useEffect, useState, useRef } from "react";

import "../styles/App.css";

// diamonds
// import main_image from '../images/short_term_receiptify.png'; // Tell webpack this JS file uses this image
import { ReactComponent as Diamonds } from "../images/diamonds-divider.svg";
import { ReactComponent as DiamondsDark } from "../images/dark-mode-images/diamonds-divider.svg";

import { useDarkMode, Toggle } from "../components/toggle-dark";
// sections
import AboutSection from "./about";
import ProjectSection from "./projects";
import ExperienceSection from "./experiences";
import NavBar from "./nav";
// import NavBarDown from "./nav-down";

// const useScrollPosition = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const updatePosition = () => {
//       setScrollPosition(window.pageYOffset);
//     };

//     window.addEventListener("scroll", updatePosition);

//     updatePosition();

//     return () => window.removeEventListener("scroll", updatePosition);
//   }, []);

//   return scrollPosition;
// };

/**
 * Main function for webapp
 * @return {div} the html code
 */
function App() {
  const [darkMode, toggleDark] = useDarkMode();
  console.log("min-h-screen " + darkMode);
  return (
    <div className={darkMode}>
      <div className="relative min-h-screen bg-light-pink dark:bg-brown">
        <div className="fixed top-0 left-0 right-0">
          <Toggle darkMode={darkMode} toggleDark={toggleDark}></Toggle>
          <div>
            <NavBar darkMode={darkMode} />
          </div>
        </div>

        <div className="snap-y snap-mandatory snap-always h-screen">
          <div
            id="Me"
            className="flex space-evenly justify-center items-center pt-40 snap-start"
          >
            <AboutSection />
          </div>

          <div className="flex pt-40 justify-center bg-light-pink dark:bg-brown">
            {darkMode === "dark" ? <DiamondsDark /> : <Diamonds />}
          </div>

          <div
            className="snap-start bg-light-pink dark:bg-brown"
            id="Experience"
          >
            <ExperienceSection darkMode={darkMode} />
          </div>

          <div className="flex pt-10 justify-center bg-light-pink dark:bg-brown">
            {darkMode === "dark" ? <DiamondsDark /> : <Diamonds />}
          </div>

          <div
            className="snap-start bg-light-pink dark:bg-brown pb-24"
            id="Projects"
          >
            <ProjectSection darkMode={darkMode} />
          </div>

          <div className="flex overflow-clip flex-nowrap justify-center bg-light-pink dark:bg-brown">
            {darkMode === "dark" ? (
              <DiamondsDark className="flex px-5" />
            ) : (
              <Diamonds className="flex px-5" />
            )}
            {darkMode === "dark" ? (
              <DiamondsDark className="flex px-5" />
            ) : (
              <Diamonds className="flex px-5" />
            )}
            {darkMode === "dark" ? (
              <DiamondsDark className="flex px-5" />
            ) : (
              <Diamonds className="flex px-5" />
            )}
            {darkMode === "dark" ? (
              <DiamondsDark className="flex px-5" />
            ) : (
              <Diamonds className="flex px-5" />
            )}
            {darkMode === "dark" ? (
              <DiamondsDark className="flex px-5" />
            ) : (
              <Diamonds className="flex px-5" />
            )}
            {darkMode === "dark" ? (
              <DiamondsDark className="flex px-5" />
            ) : (
              <Diamonds className="flex px-5" />
            )}
            {darkMode === "dark" ? (
              <DiamondsDark className="flex px-5" />
            ) : (
              <Diamonds className="flex px-5" />
            )}
            {darkMode === "dark" ? (
              <DiamondsDark className="flex px-5" />
            ) : (
              <Diamonds className="flex px-5" />
            )}
            {darkMode === "dark" ? (
              <DiamondsDark className="flex px-5" />
            ) : (
              <Diamonds className="flex px-5" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
