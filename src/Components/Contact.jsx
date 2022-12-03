export function Contact() {
    return(
        <div name="contact" 
        className="bg-black w-full h-full flex justify-center items-center p-4 pt-32">
            <form className="flex flex-col max-w-[62.5rem] w-full" method="POST"
            action="https://getform.io/f/26c0a506-cd24-4bb8-847d-fa0f638e935d">
                <div className="pb-8">
                    <p className="text-4xl text-white font-bold inline border-b-4 border-white">Contact</p>
                    <p className="text-white py-4">You can contact me through the form bellow or shoot me an email at matheusjbarbosa@gmail.com</p>
                </div>
                <input className="bg-white " type="text" placeholder="name" name="name" />
                <input className="my-4 p-2 bg-white" type="email" placeholder="email" name="email" />
                <textarea className="bg-white p-8" name="message" ></textarea>
                <button className="text-gray-900 group bg-white border-2 rounded-sm px-4 py-3 my-8 mx-auto flex items-center hover:bg-gray-600 hover:text-white duration-300">Let's get in touch</button>
            </form>
        </div>
    );
}