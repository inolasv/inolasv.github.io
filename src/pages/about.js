import React from "react";

/**
 * Projects section
 * @return {div} the html code
 */
function AboutSection() {
  return (
    <>
      <div className="flex flex-wrap flex-col px-40">
        <div className="font-body text-4xl text-brown dark:text-light-pink pb-6">
          {" "}
          Hello! My name is
        </div>
        <div className="font-heading text-7xl text-brown dark:text-light-pink pb-4">
          {" "}
          Saloni Vaishnav{" "}
        </div>
        <div className="font-body text-md text-brown dark:text-light-pink">
          I am a current student at the University of Illinois Urbana-Champaign
          studying Computer Science. I&apos;ve always loved problem solving and
          figuring out how things work, and as a result felt a natural
          inclination towards coding and CS. <br />
          <br />
          I enjoy web development as well as backend/fullstack development. The
          topic that first amazed me in CS was the Internet of Things, and how
          devices can connect and communicate with eachother wirelessly, so
          systems programming is something I&apos;ve recently dabbled in through
          classes.
          <br />
          <br />
          In college I have been a part of Women in Computer Science as a Social
          Co-Chair for a year, was part of the Hackillinois 2023 staff, and am
          the current Co-Director of Reflections | Projections. Apart from that,
          I love to read books, crochet, puzzle, and go for a run outside all
          while listening to my favorite music!
        </div>
      </div>
      <div className="flex px-40"></div>
    </>
  );
}

export default AboutSection;
