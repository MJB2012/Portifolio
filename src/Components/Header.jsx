import Logo from "../assets/mjb1.jpeg";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { useState } from "react";
import { Link } from "react-scroll"

export function Header() {
  const [header, setHeader] = useState(false);
  const handleOnClick = () => setHeader(!header);
  return (
    <div className="fixed w-full h-[3.5rem] flex justify-between items-center px-4 bg-black text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "4.5rem" }} />
      </div>

      {/* menu */}

      <div className="hidden md:flex">
        <ul className="hidden md:flex  font-semibold">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburguer */}
      <div className=" z-10 " onClick={handleOnClick}>
        {!header ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !header
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleOnClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleOnClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleOnClick}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleOnClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleOnClick}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[10rem] h[3.75rem] flex justify-between items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-blue-600 ">
            <a
              className="flex justify-between items-center w-full text-gray-300 my-2 font-robotoC"
              href="https://www.linkedin.com/in/mjb2012/"
            >
              Linkedin <FaLinkedin size={32} />
            </a>
          </li>
          <li className="w-[10rem] h[3.75rem] flex justify-between items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-gray-700 ">
            <a
              className="flex justify-between items-center w-full text-gray-300 my-2 font-robotoC"
              href="https://github.com/MJB2012"
            >
              Github <FaGithub size={32} />
            </a>
          </li>
          <li className="w-[10rem] h[3.75rem] flex justify-between items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-slate-400 ">
            <a
              className="flex justify-between items-center w-full text-gray-300 my-2 font-robotoC"
              href="mailto: matheusjbarbosa23@gmail.com"
            >
              Email <HiOutlineMail size={32} />
            </a>
          </li>
          <li className="w-[10rem] h[3.75rem] flex justify-between items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-slate-500 ">
            <a
              className="flex justify-between items-center w-full text-gray-300 my-2 font-robotoC"
              href="https://www.linkedin.com/posts/mjb2012_resume-activity-7038560178153086976-gxwi?utm_source=share&utm_medium=member_desktop"
            >
              Resume <BsFillPersonLinesFill size={32} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
