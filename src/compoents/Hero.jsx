import React from 'react';
import building from '../assets/building.png';
import Main from '../assets/Main.mp4';
import World from "../assets/World.mp4" 
import "../index.css";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Video */}
      <video
        src={World}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Bottom Blur + Dark Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 
        bg-gradient-to-t from-black/90 to-transparent 
        backdrop-blur-[4px] pointer-events-none">
      </div>

      {/* Text and Button */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Your Dedicated Partner <br />
          In Business Transformation
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Guiding You Towards Unprecedented Success with Proven Strategies
        </p>

        <button className="mt-8 border border-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-black transition-all">
          Contact Us →
        </button>
      </div>
    </div>
  );
};

export default Hero;
