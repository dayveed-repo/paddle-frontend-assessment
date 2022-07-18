import React from "react";
import SectionOne from "../Components/aboutComponents/SectionOne";
import SectionThree from "../Components/aboutComponents/SectionThree";
import SectionTwo from "../Components/aboutComponents/SectionTwo";

function about() {
  return (
    <div className="flex flex-col max-h-screen overflow-y-scroll contactScroll bg-[#1a0039]">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default about;
