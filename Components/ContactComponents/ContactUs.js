import React from "react";
import InputBar from "./InputBar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";

function ContactUs() {
  const container = "absolute flex background-blur flex-row w-screen h-screen";
  const contactForm =
    "contactScroll md:w-5/12 w-full bg-[#1a0039] h-full overflow-y-scroll pt-8 pb-10 px-4 md:px-16 md:pb-16 md:pt-28 flex flex-col items-center";
  const submitBtn =
    "bg-blue-800 cursor-pointer px-6 py-2 rounded-full text-sm text-white";
  const backBtn =
    "md:absolute top-10 z-30 md:right-[40%] bg-white p-4 ml-auto md:ml-0 mb-8 md:mb-0 rounded-full cursor-pointer";

  const transLeft = "flex-grow h-full hidden md:inline";

  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className={container}>
      <div className={transLeft}></div>

      <div className={contactForm}>
        <div className={backBtn} onClick={() => handleBack()}>
          <AiOutlineArrowLeft />
        </div>

        <h3 className="w-5/6 mb-6 text-xl text-white font-bold text-center">
          Hey, we are still in the works, but you can send us a message
        </h3>

        <InputBar
          label={"First Name"}
          type={"text"}
          placeholder="Enter your first name"
        />
        <InputBar
          label={"Last Name"}
          type={"text"}
          placeholder="Enter your last name"
        />
        <InputBar
          label={"Email"}
          type={"email"}
          placeholder="Enter your email"
        />
        <InputBar
          label={"Tell Us what you need help with"}
          type={"textarea"}
          placeholder="Tell us"
        />

        <div className="w-full">
          <button className={submitBtn}>Send Now</button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
