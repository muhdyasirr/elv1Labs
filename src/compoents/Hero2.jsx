import React from "react";
import What from "../assets/What.mp4";
import { FaArrowRight } from "react-icons/fa6";
import Hero2img from "../assets/Hero2img.png";

function Hero2() {
  return (
    <section className="w-full bg-[#0E0E12] text-white flex justify-center items-center py-24 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* Left: Video */}
        <div className="w-full">
          <div className="relative w-full h-[420px] overflow-hidden rounded-2xl shadow-[0_0_40px_#00000080]">
            <video
              src={What}
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#56A89A] via-[#A000A4] to-[#9A92C7]">
              What is elv1labs?
            </span>
          </h2>

          <p className="text-white/70 leading-relaxed mb-10 text-[16px]">
            elv1labs is a Business Informatics Lab — a dedicated space, both physical
            and virtual, where students, researchers, and professionals collaborate to
            experiment, analyze, and apply information technology to solve real-world
            business problems.
            <br /><br />
            It connects management strategy, business processes, information systems,
            ERP, economics, databases, AI, programming, and data analytics — acting as a
            sandbox for business technology where innovation meets implementation.
          </p>

          <button className="rounded-full py-3 px-8 flex items-center gap-4 font-semibold border border-white hover:bg-gradient-to-r hover:from-[#56A89A] hover:via-[#A000A4] hover:to-[#9A92C7] hover:border-transparent transition-all duration-300">
            Meet The Team <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
