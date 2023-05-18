import "../styles/App.css";
// import main_image from '../images/short_term_receiptify.png'; // Tell webpack this JS file uses this image
import { ReactComponent as Diamonds } from "../images/diamonds-divider.svg";
import { ReactComponent as Diamonds3 } from "../images/diamonds-3.svg";
import { ReactComponent as Diamonds2 } from "../images/diamonds-2.svg";
import ProjectCard from "../components/project-card";
import ExperienceCards from "../components/experience-card";
/**
 * Main function for webapp
 * @return {div} the html code
 */
function App() {
  return (
    <div className="">
      <div className="flex space-evenly justify-center items-center pt-56">
        <div className="flex flex-wrap flex-col px-40">
          <div className="font-body text-4xl text-brown pb-6">
            {" "}
            Hello! My name is
          </div>
          <div className="font-heading text-7xl text-brown pb-4">
            {" "}
            Saloni Vaishnav{" "}
          </div>
          <div className="font-body text-xl text-brown">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="flex px-40">
          {/* <img src={main_image} alt="main_image" /> */}3
        </div>
      </div>

      <div className="flex pt-40 justify-center">
        <Diamonds className="flex" />
      </div>

      <div>
        <div className="flex items-center space-x-6 pl-40 pt-40">
          <Diamonds2 className="" />
          <div className="font-body text-5xl text-brown"> Projects </div>
          <Diamonds3 className="" />
        </div>

        <div className="">
          <ProjectCard />
        </div>
      </div>

      <div className="flex pt-20 justify-center">
        <Diamonds className="flex" />
      </div>

      <div>
        <div className="flex items-center space-x-6 pl-40 pt-40">
          <Diamonds2 className="" />
          <div className="font-body text-5xl text-brown"> Experience </div>
          <Diamonds3 className="" />
        </div>

        <div className="">
          <ExperienceCards />
        </div>
      </div>
    </div>
  );
}

export default App;
