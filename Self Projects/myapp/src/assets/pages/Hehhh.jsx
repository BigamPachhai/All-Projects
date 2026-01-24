import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Hehhh = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-10 py-20">
      {/* Left Side */}
      <div className="flex-1">
        <h2 className="text-xl text-gray-600">Hy! I Am</h2>
        <h1 className="text-5xl font-bold text-yellow-600 mt-2">John Deo.</h1>
        <p className="mt-6 text-gray-700 text-lg max-w-lg">
          I design beautifully simple things, and I love what I do.
        </p>

        {/* Experience */}
        <div className="mt-10">
          <h3 className="text-4xl font-bold text-teal-600">08</h3>
          <p className="text-gray-600">Years Experience</p>
        </div>

        {/* Socials */}
        <div className="flex space-x-5 mt-6 text-yellow-600 text-2xl">
          <FaInstagram className="cursor-pointer hover:text-pink-500" />
          <FaFacebook className="cursor-pointer hover:text-blue-500" />
          <FaTwitter className="cursor-pointer hover:text-sky-400" />
          <FaLinkedin className="cursor-pointer hover:text-blue-600" />
        </div>
      </div>

      {/* Right Side (Image & Reviews) */}
      <div className="flex-1 flex flex-col items-center mt-12 lg:mt-0">
        <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-yellow-400">
          <img
            src="https://i.ibb.co/F3NxC7M/men.png"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Reviews */}
        <div className="mt-6 bg-white shadow-lg rounded-xl p-4 flex items-center space-x-4">
          <div>
            <p className="text-gray-700 font-medium">12k Reviews On</p>
            <p className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐ 4.9</p>
          </div>
        </div>

        {/* Tagline */}
        <h3 className="mt-6 text-2xl font-bold text-gray-800">
          Creative <span className="text-teal-600">Designer.</span>
        </h3>
      </div>
    </section>
  );
};

export default Hehhh;
