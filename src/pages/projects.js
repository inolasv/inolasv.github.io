import React from "react";
import PropTypes from "prop-types";
import ProjectCard from "../components/project-card";

import { ReactComponent as Diamonds2 } from "../images/diamonds-2.svg";
import { ReactComponent as Diamonds3 } from "../images/diamonds-3.svg";
import { ReactComponent as Diamonds2Dark } from "../images/dark-mode-images/diamonds-2.svg";
import { ReactComponent as Diamonds3Dark } from "../images/dark-mode-images/diamonds-3.svg";

/**
 * Projects section
 * @param {string} props darkmode prop
 * @return {div} the html code
 */
function ProjectSection(props) {
  const { darkMode } = props;

  return (
    <>
      <div className="flex items-center space-x-2 lg:space-x-6 pl-5 lg:pl-40 pt-40">
        {darkMode === "dark" ? <Diamonds2Dark /> : <Diamonds2 />}
        <div className="font-body text-3xl lg:text-5xl text-brown dark:text-light-pink">
          {" "}
          Projects{" "}
        </div>
        {darkMode === "dark" ? <Diamonds3Dark /> : <Diamonds3 />}
        <div className="font-body lg:text-sm text-xs text-brown dark:text-light-pink italic">
          {" "}
          click on a card to find out more!{" "}
        </div>
      </div>

      <div className="">
        <ProjectCard />
      </div>
    </>
  );
}
ProjectSection.propTypes = {
  darkMode: PropTypes.string.isRequired,
};
export default ProjectSection;
