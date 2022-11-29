import Logo from "../assets/mjb1.jpeg";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { useState } from "react";

export function Header() {
  const [header, setHeader] = useState(false);
  const handleOnClick = () => setHeader(!header);
  return (
    <div className="fixed w-full h-[5rem] flex justify-between items-center px-4 bg-black text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "6.5rem" }} />
      </div>

      {/* menu */}

      <div className="hidden md:flex font-semibold font-robotoC">
        <ul className="hidden md:flex font-robotoC ">
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburguer */}
      <div className=" z-10 " onClick={handleOnClick}>
        {!header ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul className={!header ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center" }>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Experience</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[10rem] h[3.75rem] flex justify-between items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-blue-600 ">
            <a className="flex justify-between items-center w-full text-gray-300 my-2 font-robotoC" 
            href="/">
              Linkedin <FaLinkedin size={32}/>
            </a>
          </li>
          <li className="w-[10rem] h[3.75rem] flex justify-between items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-gray-700 ">
            <a className="flex justify-between items-center w-full text-gray-300 my-2 font-robotoC" 
            href="/">
              Github <FaGithub size={32}/>
            </a>
          </li>
          <li className="w-[10rem] h[3.75rem] flex justify-between items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-slate-400 ">
            <a className="flex justify-between items-center w-full text-gray-300 my-2 font-robotoC" 
            href="/">
              Email <HiOutlineMail size={32}/>
            </a>
          </li>
          <li className="w-[10rem] h[3.75rem] flex justify-between items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-slate-500 ">
            <a className="flex justify-between items-center w-full text-gray-300 my-2 font-robotoC" 
            href="/">
              Resume <BsFillPersonLinesFill size={32}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
