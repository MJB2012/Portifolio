import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll"

export function Home() {
  return (
    <div name="home" className="bg-black w-full h-screen">
      <div className="max-w-[62.5rem] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white text-2xl mt-5">Hello ! My name is</p>
        <h1 className="text-4xl sm:text-5xl text-white font-semibold mt-8">
          Matheus João Barbosa
        </h1>
        <h2 className="text-white text-6xl font-bold">
          I'm a Front-End Developer
        </h2>
        <p className="text-white text-2xl font-light my-1 py-4 max-w-[700px]">
          After years working in the food industry, today I seek new challenges.
          I am looking for an opportunity in Web-Development. I'm focused on
          building beautiful and responsive websites with great accessibility
          and user experience.
        </p>
        <div>
        <Link to = "work" smooth={true} duration={500} >
             <button className="text-gray-900 group bg-white border-2 rounded-sm px-6 py-3 my-2 flex items-center hover:bg-gray-600 hover:text-white duration-300">
            View work
            <span className="group-hover:rotate-90 duration-200">
              <HiArrowNarrowRight className="ml-2 " />
            </span>
          </button>
          </Link>
         
        </div>
      </div>
    </div>
  );
}
