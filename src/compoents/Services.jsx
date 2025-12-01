import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const WhyGLInfotech = () => {
  return (
    <div className="w-full bg-[#0E0E12] text-white px-6 md:px-24 py-24 relative text-center">

      {/* Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-20">

        {/* Right Text */}
        <div className="flex-1 text-center mx-auto">

          {/* Section Title */}
          <h2 className="font-extrabold text-4xl md:text-6xl leading-tight mb-6">
            <span className="text-white">WHY </span>
            <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#56A89A] via-[#A000A4] to-[#9A92C7]">
              &lt;elv1labs&gt;
            </span>
            <span className="text-white">?</span>
          </h2>

          {/* Paragraph */}
          <p className="mt-6 text-[17px] md:text-[18px] text-white/70 leading-8 max-w-3xl mx-auto">
            We are one of the leading names among integrated IT consulting firms and
            branding agencies, offering a client-centric approach with a seasoned team
            and results that speak for themselves. For over two decades, we’ve empowered
            brands with high-performance websites, software, and applications — built to
            deliver measurable business impact.
          </p>

          {/* CTA */}
          <button className="mt-10 flex items-center gap-3 mx-auto rounded-full py-3 px-8 text-lg font-semibold border border-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#56A89A] hover:via-[#A000A4] hover:to-[#9A92C7] hover:border-transparent">
            Learn More <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Bottom Stats Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-14 mt-24 border-t border-white/10 pt-12">

        <div className="text-center">
          <h1 className="text-5xl font-extrabold">1000+</h1>
          <p className="text-white/60 text-[15px] mt-2">Satisfied Clients</p>
        </div>

        <div className="text-center">
          <h1 className="text-5xl font-extrabold">Experts</h1>
          <p className="text-white/60 text-[15px] mt-2">
            Across Advanced Technologies
          </p>
        </div>

        <div className="text-center">
          <h1 className="text-5xl font-extrabold">1200+</h1>
          <p className="text-white/60 text-[15px] mt-2">
            Google Page 1 Rankings Delivered
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 justify-center">
          <div className="flex items-center gap-2">
            <FcGoogle className="text-4xl" />
            <span className="text-yellow-400 text-2xl">★★★★★</span>
          </div>
          <p className="text-sm text-white/60">Rated 4.2 / 5 on Google</p>
        </div>
      </div>
    </div>
  );
};

export default WhyGLInfotech;
