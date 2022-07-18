import React from "react";
import TimeBar from "./TimeBar";
// import { AiOutlineTwitter } from "react-icons/ai";
import Footer from "../Footer";
import { useRouter } from "next/router";

let clock = "w-full flex flex-row space-x-6 my-5 justify-center";

let container =
  "flex flex-col max-w-lg mx-auto items-center mt-6 relative flex-grow";

let pageInfo = "text-gray-300 text-xs text-center";

let pageTitle = "bold text-white md:text-3xl text-xl text-center mb-5";

let input =
  "px-3 md:pb-2 pb-1 bg-transparent border-b-2 border-gray-200 outline-none text-gray-200 text-sm";

let waitListBtn =
  "bg-[#271ac1] text-white rounded-full border-[#271ac1] border text-xs font-medium px-3";

let waitingListForm =
  "w-full max-h-10 bg-white flex-grow flex flex-row rounded-full";

let waitListInput = "flex flex-grow outline-none py-2 px-4 rounded-full";

function HomeBody() {
  const router = useRouter();

  return (
    <div className={container}>
      <h1 className={pageTitle}>Something Awesome is Coming</h1>
      <p className={pageInfo}>
        Your all-in-one affiliate marketing tracking software, track, automate,
        optimize your campaigns
      </p>

      <div className={clock}>
        <TimeBar type="days" number={7} />
        <TimeBar type="hours" number={24} />
        <TimeBar type="minutes" number={54} />
        <TimeBar type="seconds" number={11} />
      </div>

      {router.pathname !== "/contact-us" && (
        <div className="flex flex-row items-center space-x-5 mb-5">
          <input className={input} type="text" placeholder="firstname" />
          <input className={input} type="text" placeholder="lastname" />
        </div>
      )}

      <div className={waitingListForm}>
        <input
          type={"text"}
          className={waitListInput}
          placeholder="Enter Your EmaiL Address"
        />
        <button className={waitListBtn}>Join Our Waiting List</button>
      </div>

      <Footer />
    </div>
  );
}

export default HomeBody;
