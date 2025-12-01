import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-16 px-6 md:px-14 lg:px-20 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* LEFT SIDE */}
        <div className="space-y-10 text-center lg:text-left">
          {/* Logo */}
          <h1 className="text-5xl md:text-6xl font-bold font-mono flex justify-center lg:justify-start">
            <span style={{ color: "#D9D7D7" }}>&lt;</span>
            <span style={{ color: "#56A89A" }}>elv</span>
            <span style={{ color: "#A000A4" }}>1</span>
            <span style={{ color: "#9A92C7" }}>labs</span>
            <span style={{ color: "#D9D7D7" }}>&gt;</span>
          </h1>

          {/* Links */}
          <ul className="space-y-3 text-lg flex flex-col items-center lg:items-start">
            <li className="hover:text-[#56A89A] transition cursor-pointer">ABOUT</li>
            <li className="hover:text-[#56A89A] transition cursor-pointer">SOLUTIONS</li>
            <li className="hover:text-[#56A89A] transition cursor-pointer">INSIGHTS</li>
            <li className="hover:text-[#56A89A] transition cursor-pointer">CONTACT</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl justify-center lg:justify-start">
            <FaInstagram className="hover:text-[#56A89A] transition cursor-pointer" />
            <FaFacebookF className="hover:text-[#56A89A] transition cursor-pointer" />
            <FaXTwitter className="hover:text-[#56A89A] transition cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#56A89A] transition cursor-pointer" />
            <FaYoutube className="hover:text-[#56A89A] transition cursor-pointer" />
          </div>

          {/* Address */}
          <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
           Indore, Madhya Pradesh 452007, India <br />
         elv1labs@protonmail.com  &nbsp; | &nbsp; 9037330163

          </p>

          {/* Footer small links */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm text-gray-400 pt-4">
            <span className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Accessibility Statement
            </span>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="w-full">
          <h2 className="text-4xl md:text-5xl font-semibold mb-10 text-center lg:text-left">
            Stay Updated with the Latest
          </h2>

          <form className="space-y-7 w-full max-w-lg mx-auto lg:mx-0">
            <input
              type="text"
              placeholder="Full Name *"
              className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-3 text-lg"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-3 text-lg"
            />

            <input
              type="text"
              placeholder="Company Name"
              className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-3 text-lg"
            />

            <input
              type="email"
              placeholder="Email *"
              className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-3 text-lg"
              required
            />

            <label className="flex items-start gap-3 text-gray-300 text-sm pt-3">
              <input type="checkbox" className="w-4 h-4 mt-1" />
              Yes, subscribe me to your newsletter.
            </label>

            <button
              type="submit"
              className="w-full border border-white rounded-full py-4 text-center text-lg hover:bg-white hover:text-black transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* COPYRIGHT (BOTTOM CENTER FOR ALL DEVICES) */}
      <div className="absolute bottom-6 w-full text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} elv1labs. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
