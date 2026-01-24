import React, { useState } from "react";

const Navbar = () => {

  const [isopen, setisopen] = useState(false);
  const toggleMenu=()=>{setisopen(!isopen)}
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 py-8 flex items-center justify-between">
        <a href="/">Bigam.dev</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>

          <button onClick={toggleMenu}>Open</button>
        </div>
        {/* Mobile Menu */}
        {isopen && (
          <div>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
