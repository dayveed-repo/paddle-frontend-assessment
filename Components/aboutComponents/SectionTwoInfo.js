import React from "react";
// import { AiOutlineLine } from "react-icons/ai";

function SectionTwoInfo({ title, desc, num }) {
  if (num === 2)
    return (
      <div
        className={`md:max-w-md max-w-sm absolute md:left-[60%] md:bottom-[40%]`}
      >
        <div className="flex flex-row items-start">
          <div className="flex flex-col">
            <p className="text-white text-sm">0{num}</p>
            <hr className="w-[3rem] max-w-[3rem] mr-2" />
          </div>

          <h2 className="text-sm text-gray-200 mt-2">{title}</h2>
        </div>

        <p className="mt-5 text-sm text-gray-400 leading-8">{desc}</p>
      </div>
    );

  return (
    <div className={`max-w-md absolute md:left-[15%] md:bottom-[40%]`}>
      <div className="flex flex-row items-start">
        <div className="flex flex-col">
          <p className="text-white text-sm">0{num}</p>
          <hr className="w-[3rem] max-w-[3rem] mr-2" />
        </div>

        <h2 className="text-sm text-gray-200 mt-2">{title}</h2>
      </div>

      <p className="mt-5 text-sm text-gray-400 leading-8">{desc}</p>
    </div>
  );
}

export default SectionTwoInfo;
