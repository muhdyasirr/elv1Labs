import React from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  BsCodeSquare,
  BsBagCheck,
  BsLaptop,
  BsPhone,
  BsGraphUp,
  BsBrush
} from "react-icons/bs";

const services = [
  {
    icon: <BsCodeSquare className="text-5xl text-[#56A89A]" />,
    title: "Web Design & Development",
    desc:
      "Looking to build or enhance your website? Our web development services deliver next-gen solutions tailored to your business goals."
  },
  {
    icon: <BsBagCheck className="text-5xl text-[#A000A4]" />,
    title: "E-commerce Solutions",
    desc:
      "As a leading IT services and consulting firm, we build powerful platforms for seamless user browsing, experiences, and shopping."
  },
  {
    icon: <BsLaptop className="text-5xl text-[#9A92C7]" />,
    title: "Enterprise Software",
    desc:
      "We deliver enterprise solutions that cater to your challenges, offering value and skyrocketing revenue."
  },
  {
    icon: <BsPhone className="text-5xl text-[#56A89A]" />,
    title: "Mobile App Development",
    desc:
      "No matter your niche or domain, we build futuristic custom mobile apps to elevate your market position."
  },
  {
    icon: <BsGraphUp className="text-5xl text-[#A000A4]" />,
    title: "Digital Marketing",
    desc:
      "We analyze your niche and competitors to deliver the ideal digital marketing strategy that helps you grow faster."
  },
  {
    icon: <BsBrush className="text-5xl text-[#9A92C7]" />,
    title: "Graphic Design",
    desc:
      "Need a standout logo or eye-catching flyers? Our expert designers will bring your creative vision to life!"
  }
];

const ServicesSection = () => {
  return (
    <div className="w-full bg-[#0E0E12] text-white px-6 md:px-20 py-24">
      
      {/* Section Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-14">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#56A89A] via-[#A000A4] to-[#9A92C7]">
          Our Services
        </span>
      </h1>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1C1C21]/50 backdrop-blur-lg rounded-2xl p-8 shadow-[0_0_35px_#00000060] transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-[0_0_55px_#00000090]"
          >
            <div className="mb-6">{service.icon}</div>
            <h2 className="text-2xl font-bold">{service.title}</h2>
            <p className="text-[15px] text-white/70 leading-7 mt-3">{service.desc}</p>

            {/* Learn More Button */}
            <div className="flex items-center gap-2 mt-8 font-semibold text-white/90 hover:text-[#56A89A] transition">
              <span>Learn More</span>
              <FaArrowRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
