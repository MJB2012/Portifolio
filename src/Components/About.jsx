import Resume from "../assets/icons8-cv-96.png";
export function About() {
  return (
    <div name="about" className="w-full h-full bg-black text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[62.5rem] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className=" text-4xl inline font-bold border-b-4 border-white text-white">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[62.5rem] w-full px-4 sm:grid grid-cols-2 gap-3">
          <div className="sm:text-right text-3xl font-medium">
            <p>
              Hello again ! Nice to meet you. Please feel free to take a look
              around.
            </p>
          </div>

          <div>
            <p>
              I've started out on this journey a year and a half ago to
              challenge myself and prove that I can be a valuable asset to any
              company that is willing to give me a chance. I am very passionate
              about my work and I'm always giving my best to become a better
              developer. You can check out my resume right here: <a
                href="https://www.linkedin.com/posts/mjb2012_resume-activity-7038560178153086976-gxwi?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                className="pt-6"
              >
             
                <img src={Resume} alt="resume" className="w-[2rem] bg-white hover:w-[3rem] hover:scale-110 duration-500" />

              </a>
            </p>
          </div>
          <div className="h-[3rem]"></div>
        </div>
      </div>
    </div>
  );
}
