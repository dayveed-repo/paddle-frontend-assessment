import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "../Footer";

function SectionThree() {
  const SectionThreeCotainer = "relative w-screen h-screen";

  const SectionThreeGlassRectangle =
    "absolute w-full shadow-lg md:bottom-[30%] bottom-[40%] h-[30vh] md:h-[45vh] background-blur z-10";

  const SectionThreeRectangle =
    "absolute md:bottom-[35%] bottom-[46%] right-[10%] z-0 w-48 h-32 md:w-72 md:h-48 rounded-md bg-gradient-to-b from-amber-600 to-transparent";

  const SectionThreeMiddle = "z-30 relative h-screen p-5 md:p-0";

  const SectionThreeTitle = "md:text-2xl text-lg text-white mb-3";

  const ContactLink =
    "flex flex-row items-center text-[#882e87] cursor-pointer";

  const FooterContainer = "w-full flex flex-col items-center";

  return (
    <div className={SectionThreeCotainer}>
      <div className={SectionThreeGlassRectangle}></div>
      <div className={SectionThreeRectangle}></div>

      <div className={SectionThreeMiddle}>
        <div className="absolute md:top-[40%] top-[35%] left-[10%] max-w-xl">
          <h3 className={SectionThreeTitle}>Got a question ?</h3>

          <p className="text-gray-400">
            See how Metricks can help grow your business with the best affiliate
            marketing software
          </p>

          <div className={ContactLink}>
            <p>Contact Us</p>
            <AiOutlineArrowRight />
          </div>
        </div>

        <div className={FooterContainer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
