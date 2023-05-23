import React from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

// social icons
import { ReactComponent as GithubIcon } from "../images/socials_icons/github.svg";
import { ReactComponent as MailIcon } from "../images/socials_icons/mail.svg";
import { ReactComponent as LinkedinIcon } from "../images/socials_icons/linkedin.svg";

// dark-social-icons
import { ReactComponent as GithubIconDark } from "../images/dark-mode-images/socials_icons/github.svg";

/**
 * Navbar
 * @param {string} props darkmode prop
 * @return {div} the html code
 */
function NavBar(props) {
  const { darkMode } = props;

  return (
    <>
      <nav
        className="flex-no-wrap flex w-full items-center justify-end bg-light-pink dark:bg-brown py-2 shadow-md shadow-black/5 g:py-4"
        data-te-navbar-ref
      >
        <div
          className="!visible hidden flex items-center justify-end lg:!flex"
          data-te-collapse-item
        >
          <ul className="text-brown dark:text-light-pink font-heading text-2xl list-style-none mr-auto flex flex-col pl-2 lg:flex-row">
            <li className="mb-4 mr-8 lg:mb-0 lg:pr-2">
              {/* <!-- Me link --> */}
              <Link
                activeClass="underline"
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                to="Me"
              >
                About Me
              </Link>
            </li>
            {/* <!-- Projects link --> */}
            <li className="mb-4 mr-8 lg:mb-0 lg:pr-2">
              <Link
                activeClass="underline"
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                to="Projects"
              >
                Projects
              </Link>
            </li>
            {/* <!-- Experiences link --> */}
            <li className="mb-4 mr-8 lg:mb-0 lg:pr-2">
              <Link
                activeClass="underline"
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                to="Experience"
              >
                Experience
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row m-3">
          {/* Mail Link */}
          <div className="flex px-4">
            <a
              href="mailto:saloni.vaishnav01@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MailIcon className="fill-brown dark:fill-light-pink" />
            </a>
          </div>

          {/* LinkedIn Link */}
          <div className="flex px-4">
            <a
              href="https://www.linkedin.com/in/saloni-vaishnav/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon className="fill-brown dark:fill-light-pink" />
            </a>
          </div>

          {/* Github Link */}
          <div className="flex px-4">
            <a
              href="https://github.com/inolasv"
              target="_blank"
              rel="noreferrer"
            >
              {darkMode === "dark" ? <GithubIconDark /> : <GithubIcon />}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
NavBar.propTypes = {
  darkMode: PropTypes.string.isRequired,
};

export default NavBar;
