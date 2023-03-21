import LinkedIn from "../assets/linkedIn.png";
import Mail from "../assets/mail.svg";
import WhatsApp from "../assets/WhatsApp.svg.webp";
import Github from "../assets/github.png";

export function Contact() {
  return (
    <div name="skills" className="w-full h-screen bg-black pt-[10rem]">
      <div className="max-w-[62.5rem] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-white text-white">
            Contact
          </p>
          <p className="py-4 text-white">Let's get in touch !</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols4 gap 4 text-center py-8">
          <a href="https://www.linkedin.com/in/mjb2012/" target="_blank">
            <div className="shadow-md  hover:scale-110 duration-500">
              <img
                className="w-[7rem] mx-auto"
                src={LinkedIn}
                alt="HTML icon"
              />
              <p className="text-white my-4">LinkedIn</p>
            </div>
          </a>
          <a href="mailto: matheusjbarbosa23@gmail.com" target="_blank">
            <div className="shadow-md shadow-[gray-300] hover:scale-110 duration-500">
              <img className="w-[7rem] mx-auto" src={Mail} alt="email icon" />
              <p className="text-white my-4">Email</p>
            </div>
          </a>
          <a
            href="https://web.whatsapp.com/send?phone=5511976361137"
            target="_blank"
          >
            <div className="shadow-md shadow-[gray-300] hover:scale-110 duration-500">
              <img
                className="w-[7rem] mx-auto"
                src={WhatsApp}
                alt="whatsapp icon"
              />
              <p className="text-white my-4">WhatsApp</p>
            </div>
          </a>
          <a href="https://github.com/MJB2012">
            <div
              className="shadow-md shadow-[gray-300] hover:scale-110 duration-500"
              target="_blank"
            >
              <img
                className="w-[7rem] mx-auto"
                src={Github}
                alt="github icon"
              />
              <p className="text-white my-4"> Github</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
