import React from "react";
import MyPic from "../images/mypic.png";
import Resume from "../components/Saloni-Vaishnav-Resume_4-10-24.pdf";
/**
 * Projects section
 * @return {div} the html code
 */
function AboutSection() {
  return (
    <div className="flex flex-col lg:pl-32">
      <div className="font-body lg:text-4xl text-3xl text-brown dark:text-light-pink lg:px-0 px-5 pb-6">
        {" "}
        Hello! My name is
      </div>
      <div className="font-heading lg:text-7xl text-5xl text-brown dark:text-light-pink lg:px-0 px-5 pb-4">
        {" "}
        Saloni Vaishnav{" "}
      </div>
      <div className="flex bg-light-pink dark:bg-brown lg:flex-row flex-col">
        <div className="flex flex-wrap flex-col lg:pr-20">
          <div className="font-body lg:px-0 px-5 lg:text-lg text-md text-brown dark:text-light-pink">
            I&apos;m a current masters student at University of Illinois
            Urbana-Champaign studying Computer Science. I&apos;ve always loved
            figuring out how things work on a deeper level, as well as
            understanding about how people can interact with different things
            without even knowing it. <br />
            <br />
            I have the most experience in fullstack development, including
            backend APIs and frontend web applications. I also enjoy learning
            about systems programming and networking at the lower level.
            <br />
            <br />
            In college I&apos;ve been a part of Women in Computer Science, the
            Hackillinois 2023 staff, and was the Co-Director of Reflections |
            Projections. Apart from that, I love to crochet, puzzle, read books,
            and go for a run outside all while listening to my favorite music!
            &ensp;
            <a
              className="font-body font-bold lg:text-lg text-md underline"
              href={Resume}
              target="_blank"
              rel="noreferrer"
            >
              See My Resume →
            </a>
          </div>
          {/* <div className="text-brown font-body lg:text-lg text-md hover:underline"></div> */}
        </div>
        <div className="flex py-3 pl-32 lg:px-10 place-item-center items-center lg:order-last order-first">
          <img className="w-6/12 lg:w-9/12" src={MyPic}></img>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
