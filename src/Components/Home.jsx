import { HiArrowNarrowRight } from 'react-icons/hi'

export function Home() {
  return (
    <div name="home" className="bg-black w-full h-screen">
      <div className="max-w-[62.5rem] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-300 text-2xl" >Hello ! My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-slate-300">Matheus João Barbosa</h1>
        <h2>I'm a Front-End Developer</h2>
        <p className='text-gray-300 text-3xl'>
          After years working in the food industry, today I seek new challenges.
          I am looking for an opportunity in Web-Development. I'm focused on building beautiful and 
          responsive websites with great accessibility and user experience.
        </p>
        <div>
            <button>Check out my work !<HiArrowNarrowRight/> </button>
        </div>
      </div>
    </div>
  );
}
