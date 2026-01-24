import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div >
            <div>
                <p className="text-lg text-blue-300 font-medium">Hello, I'm</p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">Subrina
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                        Khatri
                    </span>
                </h1>

                <h2 className="text-2xl sm:text-3xl text-gray-300 font-semibold">Full Stack Developer</h2>
            </div>
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">I create beautiful and functional web applications.</p>
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-3 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105">View My Work</button>
                <button className="px-8 py-3 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105">Download CV</button>
            </div>
            {/* Social Links */}
            <div className="flex space-x-6 pt-6">
                {["Github","LinkedIn","Instagram"].map((social,index)=>(
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300" key={social}>{social}</a>
                ))}
            </div>
        </div>
    {/* Image Content */}
    <div className="relative animate-float">
        <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 mx-auto bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-400/30">
            <div className="w-72 h-72 lg:w-88 lg:h-88 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border-4 border-cyan-400/50">
                <span><img src="@public/image.png" alt="" /></span>
            </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </div>
      </div>
    </section>
  );
};

export default Hero;
