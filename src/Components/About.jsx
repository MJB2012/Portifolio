export function About() {
    return(
        <div name='about'className="w-full h-full bg-black text-white">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[62.5rem] w-full px-4 grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className=" text-4xl inline font-bold border-b-4 border-white text-white">About</p>
                    </div>
                 
                 </div>
                    <div className="max-w-[62.5rem] w-full px-4 sm:grid grid-cols-2 gap-8">
                        <div className="sm:text-right text-3xl font-medium">
                    
                            <p>
                                Hello again ! Nice to meet you. Please feel free to take a look around.
                            </p>
                            </div>
                            
                            <div>
                                <p>
                                    I've started out on this journey a year and a half ago to challenge myself and prove
                                    that I can be a valuable asset at any company that is willing to give me chance.
                                    I am very passionate about my work and always giving my best to become a better developer. 
                                    
                                </p>
                            </div>
                            <div className="h-[3rem]">

                            </div>
                    </div>
                </div>
            </div>
            
        
    );
}