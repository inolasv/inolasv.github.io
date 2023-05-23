import React from "react";
import { Link } from "react-scroll";

// social icons
import { ReactComponent as GithubIcon } from "../images/socials_icons/github.svg";
import { ReactComponent as MailIcon } from "../images/socials_icons/mail.svg";
import { ReactComponent as LinkedinIcon } from "../images/socials_icons/linkedin.svg";

/**
 * Projects section
 * @return {div} the html code
 */
function NavBarDown() {
  return (
    <>
      <nav
        className="flex-no-wrap flex w-full items-center justify-end bg-light-pink py-2 shadow-sm shadow-black/5 dark:shadow-black/10 lg:py-4"
        data-te-navbar-ref
      >
        <div className="font-heading text-3xl justify-start flex flex-grow text-brown py-4 pl-10">
          {" "}
          Saloni Vaishnav{" "}
        </div>
        <div
          className="!visible hidden flex items-center justify-between lg:!flex"
          data-te-collapse-item
        >
          <ul className="text-brown font-heading text-2xl list-style-none mr-auto flex flex-col pl-2 lg:flex-row">
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
              <MailIcon className="fill-brown" />
            </a>
          </div>

          {/* LinkedIn Link */}
          <div className="flex px-4">
            <a
              href="https://www.linkedin.com/in/saloni-vaishnav/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon className="fill-brown" />
            </a>
          </div>

          {/* Github Link */}
          <div className="flex px-4">
            <a
              href="https://github.com/inolasv"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon className="fill-brown" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBarDown;
