import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Lunars from "../assets/Lunars.webp";
import Zerodegree from "../assets/Zerodegree.webp";
import accountants from "../assets/accountants.webp";
import mbs from "../assets/mbs.webp";

const caseStudies = [
  { image: Zerodegree, title: "Zero Degree" },
  { image: mbs, title: "MBS Group" },
  { image: Lunars, title: "Lunars" },
  { image: accountants, title: "Accountants Academy" },
];

const CaseStudies = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const visibleProjects = [];
  for (let i = 0; i < 4; i++) {
    visibleProjects.push(caseStudies[(startIndex + i) % caseStudies.length]);
  }

  return (
    <div className="w-full bg-[#0E0E12] py-24 px-6 md:px-20">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-semibold text-center leading-tight mb-16">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#56A89A] via-[#A000A4] to-[#9A92C7]">
          Explore Our Case Studies
        </span>
        <br />
        <span className="text-white">Elucidating Custom Solutions by Us</span>
      </h1>

      {/* Navigation Arrows */}
      <div className="flex justify-end gap-4 mb-6 pr-5">
        <button
          onClick={prevSlide}
          className="bg-gradient-to-r from-[#2E2E2E] to-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          <FaChevronLeft className="text-[#56A89A]" />
        </button>

        <button
          onClick={nextSlide}
          className="bg-gradient-to-r from-[#2E2E2E] to-[#1A1A1A] w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          <FaChevronRight className="text-[#A000A4]" />
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {visibleProjects.map((project, i) => (
          <div key={i} className="flex flex-col items-center cursor-pointer">
            <div className="w-full rounded-2xl overflow-hidden backdrop-blur-xl bg-[#1C1C21]/40 shadow-[0_0_30px_#00000045] hover:scale-[1.04] transition">
              <img src={project.image} alt={project.title} className="w-full h-[400px] object-cover" />
            </div>
            <p className="mt-4 text-lg font-semibold text-white/90 tracking-wide">
              {project.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
