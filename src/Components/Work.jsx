import DTmoney from "../assets/dtmoney1.png";
import Feed from "../assets/feed1.png";
import TaskTimer from "../assets/pomodoroTimer.png";
import IgniteToDo from "../assets/igniteToDo.png";

const images = [DTmoney, Feed, TaskTimer, IgniteToDo];

export function Work() {
  return (
    <>
    <div name="work" className="w-full md:h-screen bg-black text-white">
      <div className="max-w-[62.5rem] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white border-white">
            Work
          </p>
          <p className="py-6">Check some of my work on <a className="font-bold text-xl hover:transition ease-in-out delay-150"href="/">Github</a></p>
        </div>

        {/* Container */}
     
        <div className=" grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6" >
         
         {/* Grid */}
          <div
            style={{ backgroundImage: `url(${DTmoney})` }}
            className="shadow-lg group container rounded-2xl flex justify-center items-center mx-auto content-div">
           
            {/* hover */}
            
            <div
              className="transition duration-200 hover:duration-150 opacity-0 group-hover:opacity-100">
              <span className=" sm:text-2xl text-3xl font-bold text-white justify-center items-center font-sans">
            React Js Finance App
              </span>
              <div className="pt-14 text-center">
                <a href="">
                  <button className=" sm:px-4 sm:py-4 font-sans text-xl font-bold items-center text-center rounded-lg px-3 py-3 m-3 transition ease-in-out delay-150 bg-slate-700 hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 duration-300 text-white ">
                    Github 
                  </button>
                </a>

              </div>
            </div>
            
          </div>
      </div>

      <div
            style={{ backgroundImage: `url(${Feed})` }}
            className="shadow-lg group container rounded-2xl flex justify-center items-center mx-auto content-div">
           
            {/* hover */}
            
            <div
              className="transition duration-200 hover:duration-150 opacity-0 group-hover:opacity-100">
              <span className=" sm:text-2xl text-3xl font-bold text-white justify-center items-center font-sans">
            React Js Twitter like feed
              </span>
              <div className="pt-14 text-center">
                <a href="">
                  <button className=" sm:px-4, sm:py-4 font-sans text-xl font-bold items-center text-center rounded-lg px-3 py-3 m-3 transition ease-in-out delay-150 bg-slate-700 hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 duration-300 text-white ">
                    Github 
                  </button>
                </a>

              </div>
            </div>

            
          </div>
      </div>
      
    </div>
    </>
    
    

    

  );
}
