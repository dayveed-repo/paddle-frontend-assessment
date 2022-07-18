import React from "react";
import Navbar from "../HomeComponents/Navbar";
import { AiOutlineLine } from "react-icons/ai";

const rectangle =
  "absolute top-[20%] md:left-[25%] left-[15%] z-0 md:w-56 md:h-80 w-36 h-56 rounded-md bg-gradient-to-b from-[#882e87] to-transparent";

const glassRectangle =
  "absolute w-7/12 rounded-lg shadow-lg top-[15%] md:h-[80vh] h-[55vh] background-blur z-10";

const circle =
  "absolute md:h-32 md:w-32 w-20 h-20 rounded-full bg-gradient-to-b from-[#21396d] to-transparent top-[35%] left-[80%]";

const textContainer = "z-30 relative h-screen p-5 md:p-0";

const secTitle =
  "absolute md:top-[30%] top-[20%] flex flex-row z-30 items-center md:left-[35%] left-[20%]";

const secSubTitle =
  "absolute z-30 md:text-6xl text-4xl max-w-xl text-white md:top-[40%] top-[30%] md:left-[40%] left-[30%]";

const secInfo =
  "z-30 absolute top-[75%] max-w-md text-md text-gray-300 md:left-[60%] left-[10%]";

function SectionOne() {
  return (
    <div className="relative w-screen h-screen">
      <div className={rectangle}></div>
      <div className={glassRectangle}></div>
      <div className={circle}></div>

      <div className={textContainer}>
        <Navbar />

        <div className={secTitle}>
          <AiOutlineLine className="text-white text-6xl" />
          <p className="text-white text-2xl">About</p>
        </div>

        <h3 className={secSubTitle}>Built for SaaS and Ecommerce</h3>

        <p className={secInfo}>
          Our tools are easy to setup and use with a user friendly dashboard
          that enables you to setup, launch, automate and manage multi-affilate
          campaigns in 5-minutes
        </p>
      </div>
    </div>
  );
}

export default SectionOne;
