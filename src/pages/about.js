import React from "react";
import MyPic from "../images/mypic.png";
import Resume from "../components/Saloni-Vaishnav-Resume-7-2-23.pdf";

/**
 * Projects section
 * @return {div} the html code
 */
function AboutSection() {
  return (
    <div className="flex bg-light-pink dark:bg-brown lg:flex-row flex-col">
      <div className="flex flex-wrap flex-col pl-3 lg:pl-32 lg:pr-20">
        <div className="font-body lg:text-4xl text-3xl text-brown dark:text-light-pink lg:px-0 px-5 pb-6">
          {" "}
          Hello! My name is
        </div>
        <div className="font-heading lg:text-7xl text-5xl text-brown dark:text-light-pink lg:px-0 px-5 pb-4">
          {" "}
          Saloni Vaishnav{" "}
        </div>
        <div className="font-body lg:px-0 px-5 lg:text-lg text-md text-brown dark:text-light-pink">
          I&apos;m a current student at the University of Illinois
          Urbana-Champaign studying Computer Science. I&apos;ve always loved
          problem solving and figuring out how things work, and as a result felt
          a natural inclination towards CS. <br />
          <br />
          I enjoy web development as well as backend/fullstack development. The
          topic that first amazed me in CS was the Internet of Things, and how
          devices can connect and communicate with eachother wirelessly, so
          systems programming is something I&apos;ve recently dabbled in through
          classes.
          <br />
          <br />
          In college I&apos;ve been a part of Women in Computer Science as a
          Social Co-Chair for a year, was part of the Hackillinois 2023 staff,
          and am the current Co-Director of Reflections | Projections. Apart
          from that, I love to crochet, puzzle, read books, and go for a run
          outside all while listening to my favorite music! &ensp;
          <a
            className="font-body font-bold lg:text-lg text-md underline"
            href={Resume}
            target="_blank"
            rel="noreferrer"
          >
            See My Resume →
          </a>
        </div>
        <div className="text-brown font-body lg:text-lg text-md hover:underline"></div>
      </div>
      <div className="flex pt-10 pl-32 lg:px-10 place-item-center items-center">
        <img className="w-6/12 lg:w-9/12" src={MyPic}></img>
      </div>
    </div>
  );
}

export default AboutSection;
