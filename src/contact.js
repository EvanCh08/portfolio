export default function Contact() {
    return (
        <div className="flex flex-col bg-black h-screen">
      <div className="flex flex-row items-center w-full h-20 bg-black fixed">
        <div className="flex flex-row justify-between items-center w-full h-16 m-32">
          <div className="mt-10">
            <span className="text-white font-bold text-xl font-lato">
              Evan's Portfolio
            </span>
          </div>
          <div className="space-x-24 font-bold flex flex-row mt-10">
            
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
            
          </div>
        </div>
      </div>
      
    </div>
    )
}