import React from "react";
import PropTypes from "prop-types";
import ExperienceCards from "../components/experience-card";
import { ReactComponent as Diamonds2 } from "../images/diamonds-2.svg";
import { ReactComponent as Diamonds3 } from "../images/diamonds-3.svg";

import { ReactComponent as Diamonds2Dark } from "../images/dark-mode-images/diamonds-2.svg";
import { ReactComponent as Diamonds3Dark } from "../images/dark-mode-images/diamonds-3.svg";

/**
 * Experiences section
 * @param {string} props darkmode prop
 * @return {div} the html code
 */
function ExperienceSection(props) {
  const { darkMode } = props;

  return (
    <>
      <div className="flex items-center space-x-6 pl-40 pt-40">
        {darkMode === "dark" ? <Diamonds2Dark /> : <Diamonds2 />}
        <div className="font-body text-5xl text-brown dark:text-light-pink">
          {" "}
          Experience{" "}
        </div>
        {darkMode === "dark" ? <Diamonds3Dark /> : <Diamonds3 />}
      </div>

      <div className="pb-40">
        <ExperienceCards />
      </div>
    </>
  );
}
ExperienceSection.propTypes = {
  darkMode: PropTypes.string.isRequired,
};

export default ExperienceSection;
