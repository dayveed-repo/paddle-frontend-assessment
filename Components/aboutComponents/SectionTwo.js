import React from "react";
import SectionTwoInfo from "./SectionTwoInfo";

function SectionTwo() {
  const Section2Container =
    "relative w-screen max-w-screen md:h-[120vh] h-[150vh]";

  const Section2Cirlce =
    "absolute md:bottom-[15%] bottom-[50%] md:right-[20%] right-[10%] z-0 md:w-52 md:h-72 w-32 h-52 rounded-md bg-gradient-to-b from-[#21396d] to-transparent";

  const Section2GlassRectangle =
    "absolute md:w-5/12 w-8/12 rounded-lg shadow-lg md:bottom-[10%] bottom-2 right-[0%] md:h-[60vh] h-[40vh] background-blur z-10";

  const Section2Svg = "absolute bottom-[15%] left-[15%] h-20 object-contain";
  const SectionMiddle = "z-30 relative md:h-screen h-[150vh] pt-20 px-5";

  const Section2Title =
    "md:text-4xl text-2xl font-medium max-w-3xl absolute md:left-[15%] text-white";

  return (
    <div className={Section2Container}>
      <div className={Section2Cirlce}></div>
      <div className={Section2GlassRectangle}></div>
      <img src={"/circles.png"} className={Section2Svg} />

      <div className={SectionMiddle}>
        <h3 className={Section2Title}>
          Metricks was developed because just like you, we need a product that
          could give us good value
        </h3>

        <SectionTwoInfo
          num={1}
          desc="We pride ourselves in our ability to innovate amd create world class
                tools that provide reliable and efficient touchpoints betwen advertisers
                and affilates"
          title={"Why Us?"}
        />

        <SectionTwoInfo
          num={2}
          desc="We pride ourselves in our ability to innovate amd create world class
                tools that provide reliable and efficient touchpoints betwen advertisers
                and affilates"
          title={"Growing With You"}
        />
      </div>
    </div>
  );
}

export default SectionTwo;
