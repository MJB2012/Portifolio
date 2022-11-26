import Logo from "../assets/mjb1.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export function Header() {
  const [header, setHeader] = useState(false);
  const handleOnClick = () => setHeader(!header);
  return (
    <div className="fixed w-full h-[5rem] flex justify-between items-center px-4 bg-black text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "5rem" }} />
      </div>

      {/* menu */}

      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburguer */}
      <div className="md:hidden z-10 " onClick={handleOnClick}>
        {!header ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul className={!header ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center opacity-90" }>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Experience</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social icons */}
    </div>
  );
}
