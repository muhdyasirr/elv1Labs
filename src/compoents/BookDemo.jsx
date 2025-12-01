import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-[#0A093F] to-[#0C0B38] text-white flex flex-col items-center justify-center overflow-hidden">

      {/* Top Tagline */}
      <p className="text-[15px] md:text-lg tracking-wide mb-4">
        We Build Brands That{" "}
        <span className="text-[#8A7DFF] font-semibold">Inspire</span>
      </p>

      {/* Main Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-center leading-tight">
        Grow Your Brand With Us
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-lg md:text-2xl text-gray-300">
        Customized Software Solutions
      </p>

      {/* CTA Button */}
      <button className="mt-10 flex items-center gap-3 border border-[#6E6CDB] px-9 py-3 rounded-full text-lg font-semibold hover:bg-[#6E6CDB] hover:text-white transition-all shadow-[0_0_18px_rgba(110,108,219,0.35)]">
        Get In Touch <FaArrowRight />
      </button>

      {/* Bottom curve glow */}
      <div className="absolute bottom-[-14%] md:bottom-[-18%] w-[900px] h-[450px] md:w-[1100px] md:h-[550px] rounded-full bg-gradient-to-t from-[#4f53df4b] to-transparent blur-3xl"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-9 flex flex-col items-center animate-pulse">
        <div className="w-6 h-10 rounded-full border border-white flex items-center justify-center">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
