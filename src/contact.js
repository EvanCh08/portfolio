export default function Contact() {
    return (
      <div className="flex flex-col bg-black xsm:h-full xl:h-screen">
      <div className="flex flex-row items-center w-full h-20 bg-black fixed">
        <div className="flex flex-row justify-between items-center w-full h-16 xl:m-32 m-6">
          <div className="">
            <span className="text-white font-bold text-xl font-lato">
              Evan Darren Christanto
            </span>
          </div>
          <div className="xl:space-x-20 flex flex-row font-bold space-x-5 items-center">
            
                <a href="/" className="text-white text-xl">
                    Home
                </a>

            <div className="flex flex-col">
                <a href="/contact" className="text-white text-xl">
                    Contact Me
                </a>
                <div className="bg-white rounded-xl h-1">
                    
                </div>
            </div>
            
            <a
              href="https://drive.google.com/file/d/1UXxWLY8_Hi5FnF-QUSU9jmvG1gpubJv3/view?usp=sharing"
              className="text-white flex justify-center text-xl border-2 border-white border-solid rounded-lg hover:bg-white hover:text-black hover:border-black h-10"
            >
              <text className=" px-3 py-1">My Resume</text>
            </a>
          </div>
        </div>
      </div>
      
    </div>
    )
}