import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [countryMenu, setCountryMenu] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("India");

  const countries = [
    { name: "India", flag: "https://flagcdn.com/w20/in.png" },
    { name: "UAE", flag: "https://flagcdn.com/w20/ae.png" },
    { name: "Qatar", flag: "https://flagcdn.com/w20/qa.png" },
    { name: "Oman", flag: "https://flagcdn.com/w20/om.png" }
  ];

  return (
    <>
      {/* NAVBAR */}
      <div className="w-full h-20 fixed z-40 flex items-center justify-between px-6 md:px-14 backdrop-blur-md transition text-white">
        
        {/* Left Logo */}
        <div className="cursor-pointer">
          <div className="font-extrabold text-3xl md:text-4xl font-mono flex items-center drop-shadow-[0_0_12px_rgba(160,0,164,0.4)]">
            <span style={{ color: "#D9D7D7" }}>&lt;</span>
            <span style={{ color: "#56A89A" }}>elv</span>
            <span style={{ color: "#A000A4" }}>1</span>
            <span style={{ color: "#9A92C7" }}>labs</span>
            <span style={{ color: "#D9D7D7" }}>&gt;</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-[15px] text-white">
          {["Home", "Services", "Works", "About us", "Blog", "Career", "Contact"].map((item) => (
            <p key={item} className="hover:text-[#56A89A] cursor-pointer transition">{item}</p>
          ))}

          <button className="px-4 py-1 rounded-xl text-xs border border-white text-white hover:text-[#56A89A] hover:border-[#56A89A] transition">
            We are Hiring
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Request Proposal */}
          <button className="hidden md:block font-semibold rounded-full px-6 py-2 bg-white text-black hover:opacity-90 transition">
            Request a Proposal
          </button>

          {/* Country Dropdown */}
          <div className="relative">
            <div
              onClick={() => setCountryMenu(!countryMenu)}
              className="hidden md:flex items-center gap-2 cursor-pointer"
            >
              <img
                src={countries.find((c) => c.name === selectedCountry)?.flag}
                className="h-4"
              />
              <p className="text-white">{selectedCountry}</p>
              <span className="text-xs">▼</span>
            </div>

            {countryMenu && (
              <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-md p-2 w-32 z-50">
                {countries.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setSelectedCountry(c.name);
                      setCountryMenu(false);
                    }}
                  >
                    <img src={c.flag} className="h-4" />
                    <p>{c.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger */}
          <div
            onClick={() => setSideMenu(true)}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer md:hidden"
          >
            <FaBars className="text-black" />
          </div>

          {/* Desktop Hamburger */}
          <div
            onClick={() => setSideMenu(true)}
            className="hidden md:flex w-10 h-10 bg-white rounded-full items-center justify-center cursor-pointer"
          >
            <FaBars className="text-black" />
          </div>
        </div>
      </div>

      {/* SIDE POPUP MENU */}
      {sideMenu && (
        <div className="fixed top-0 right-0 w-[80%] md:w-[35%] h-full bg-white shadow-xl z-50 p-8 text-black transition-all">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold">Menu</h2>
            <FaTimes className="text-2xl cursor-pointer" onClick={() => setSideMenu(false)} />
          </div>

          <div className="font-mono text-3xl font-bold mb-6">
            &lt;<span className="text-[#56A89A]">elv</span>
            <span className="text-[#A000A4]">1</span>
            <span className="text-[#9A92C7]">labs</span>&gt;
          </div>

          <p className="text-sm text-gray-600 mb-6 leading-6">
            We are a next-generation IT firm delivering modern web, app & branding solutions that fuel business growth globally.
          </p>

          <div className="flex flex-col gap-4 text-lg">
            {["Home", "Services", "Works", "About us", "Blog", "Career", "Contact"].map((item) => (
              <p key={item} className="hover:text-[#56A89A] transition cursor-pointer">{item}</p>
            ))}
          </div>

          <button className="mt-10 bg-black text-white w-full py-3 rounded-full font-semibold">
            Request a Proposal
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
