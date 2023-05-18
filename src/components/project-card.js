import data from "../data/projects.json";
import React from "react";
// import { ReactComponent as Arrow } from "../images/arrow.svg";

/**
 * Function to create and show the project cards and popup
 * @return {div} the html code
 */
function ProjectCard() {
  const [showPopup, setShowPopup] = React.useState(false);
  const [popupData, setPopupData] = React.useState(null);

  const onShowPopup = (data) => {
    setShowPopup(true);
    setPopupData(data);
  };

  const onHidePopup = () => {
    setShowPopup(false);
    setPopupData(null);
  };

  const Popup = () => (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 w-full h-full">
        <div className="absolute w-screen h-screen" onClick={onHidePopup}></div>
        <div className="bg-dark-pink flex flex-col outline outline-brown outline-8 rounded-lg border-brown border-8 hover: relative w-2/3 h-96 my-6 mx-auto max-w-3xl">
          <div className="font-heading text-brown text-3xl flex pt-10 pl-9 pb-3">
            {popupData.title}
          </div>

          {/* tags */}
          <div className="flex-basis">
            <div className="flex flex-row flex-wrap justify-left pl-9 space-x-3">
              {popupData.tags.map((tag) => {
                return (
                  <div
                    key={tag + popupData.id}
                    className="bg-brown w-auto h-auto px-2 py-1 rounded-xl"
                  >
                    <div className="font-body text-light-pink text-sm ">
                      {tag}{" "}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* body */}
          <div className="flex pt-5 pl-9 grow">
            <div className="font-body text-brown text-lg">
              {popupData.description}
            </div>
          </div>

          {/* arrow and "see it" link */}
          <div className="flex grow-0">
            <div className="flex items-center m-6 ml-10">
              <div className="flex underline items-center font-body text-brown text-2xl hover:text-light-pink">
                <a href={popupData.link} target="_blank" rel="noreferrer">
                  See it →
                </a>
                {/* <Arrow className="pl-3 text-[#ffffff] stroke-current hover:text-brown hover:stroke-current" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex flex-row pt-18 flex-wrap justify-center">
        {data.map((data) => {
          return (
            <div
              key="{data.id}"
              onClick={() => onShowPopup(data)}
              className="bg-dark-pink hover:shadow-xl shadow-md w-80 h-96 flex m-24 items-start justify-center"
            >
              <div className="text-brown font-heading text-4xl flex text-center px-2 pt-10">
                {" "}
                {data.title}{" "}
              </div>
            </div>
          );
        })}
      </div>
      {/* Open card */}
      {showPopup ? <Popup /> : null}
    </div>
  );
}

export default ProjectCard;
