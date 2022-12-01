import DTmoney from "../assets/dtmoney2.png";
import Feed from "../assets/feed.png";
import TaskTimer from "../assets/pomodoroTimer.png";
import IgniteToDo from "../assets/igniteToDo.png";

const images = [DTmoney, Feed, TaskTimer, IgniteToDo];

export function Work() {
  return (
    <div name="work" className="w-full md:h-screen bg-black text-white">
      <div className="max-w-[62.5rem] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white border-white">
            Work
          </p>
          <p className="py-6">Check some of my work</p>
        </div>

        {/* Container */}
     
        <div className="grid-cols-2 group sm:grid-cols-2 md:grid-cols-3 gap-4">
         
         {/* Grid */}
          <div
            style={{ backgroundImage: `url(${DTmoney})` }}
            className="shadow-lg group container rounded-2xl flex justify-center items-center mx-auto content-div">
           
            {/* hover */}
            
            <div
              className=" transition duration-300 opacity-0 group-hover:opacity-100">
              <span className=" sm:text-2xl text-3xl font-bold text-white tracking-wider justify-center items-center font-sans">
            React Js
              </span>
              <div className="pt-14 text-center">
                <a href="">
                  <button className="sm:px-4 sm:py-1 font-sans font-bold items-center text-center rounded-lg px-6 py-3 m-2 text-white bg-black text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
