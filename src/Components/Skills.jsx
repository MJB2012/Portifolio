import HTML from "../assets/html.png";
import JS from "../assets/javascript.png";
import CSS from "../assets/css.png";
import ReactJS from "../assets/react.png";
import Github from "../assets/github.png";
import TypeScript from "../assets/typescript.png";
import Tailwind from "../assets/tailwind.png";
import Styled from "../assets/styled-components.svg/";
import Bootstrap from "../assets/bootstrap.png";

export function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-black">
      <div className="max-w-[62.5rem] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-white text-white">
            Skills
          </p>
          <p className="py-4 text-white">
            These are the technologies I've been working with
          </p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols4 gap 4 text-center py-8">
          <div className="shadow-md  hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="text-white my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[gray-300] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JS} alt="javascrip icon" />
            <p className="text-white my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[gray-300] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="text-white my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[gray-300] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactJS} alt="react icon" />
            <p className="text-white my-4">React Js</p>
          </div>
          <div className="shadow-md shadow-[gray-300] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="github icon" />
            <p className="text-white my-4"> Github</p>
          </div>
          <div className="shadow-md shadow-[gray-300] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={TypeScript}
              alt="typescript icon"
            />
            <p className="text-white my-4">TypeScript</p>
          </div>
          <div className="shadow-md shadow-[gray-300] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="tailwind icon" />
            <p className="text-white my-4">Tailwind CSS</p>
          </div>
          <div className="shadow-md shadow-[gray-300] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Styled}
              alt="styled components icon"
            />
            <p className="text-white my-4">Styled Components</p>
          </div>
          <div className="shadow-md shadow-[gray-300] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Bootstrap}
              alt="bootstrap icon"
            />
            <p className="text-white my-4">Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
}
