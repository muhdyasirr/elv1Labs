import React from "react";

function SlidingBrand() {
  return (
    <section className="w-full overflow-hidden bg-black py-10">
      <div className="animate-slide flex whitespace-nowrap">
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <span
              key={i}
              className="mx-10 text-[30px] font-bold tracking-wider font-mono flex items-center gap-6"
            >
              {/* Brand — no spacing between letters */}
              <span className="flex">
                <span style={{ color: "#D9D7D7" }}>&lt;</span>
                <span style={{ color: "#56A89A" }}>elv</span>
                <span style={{ color: "#A000A4" }}>1</span>
                <span style={{ color: "#9A92C7" }}>labs</span>
                <span style={{ color: "#D9D7D7" }}>&gt;</span>
              </span>

              {/* Tagline */}
              <span className="text-gray-400 text-[32px] font-normal">
                — Evolving Code, Enduring Value
              </span>
            </span>
          ))}
      </div>
    </section>
  );
}

export default SlidingBrand;
