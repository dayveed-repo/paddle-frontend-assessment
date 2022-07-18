import React from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";

function Navbar({ setpageNumber, pageNumber, getRepos }) {
  const handleNext = () => {
    getRepos(pageNumber + 1);
    setpageNumber(pageNumber + 1);
  };

  const handleHome = () => {
    getRepos(1);
    setpageNumber(1);
  };

  const handleBack = () => {
    if (pageNumber === 1) return;
    getRepos(pageNumber - 1);
    setpageNumber(pageNumber - 1);
  };

  const NavContainer =
    "w-full px-3 py-2 bg-[#4c1d95] items-center  flex flex-row";

  const NavLeft = "flex flex-row items-center";

  const pageBtnContainer = "flex items-center space-x-4";

  const pageBtn = "text-white text-lg cursor-pointer";

  const homeIcon =
    "text-xl cursor-pointer mx-5 text-purple-400 hover:text-white";

  const NavMiddle = "flex-grow text-lg text-center text-white font-semibold";

  const NavSearch =
    "w-3/12 max-w-xl bg-[#8738ff] flex flex-row items-center px-3 py-1 rounded-lg";

  const searchInput = "flex-grow bg-transparent outline-none";
  return (
    <div className={NavContainer}>
      <div className={NavLeft}>
        <div className={pageBtnContainer}>
          <BsFillArrowLeftCircleFill
            onClick={() => handleBack()}
            className={pageBtn}
          />

          <BsFillArrowRightCircleFill
            onClick={() => handleNext()}
            className={pageBtn}
          />
        </div>

        <AiFillHome onClick={() => handleHome()} className={homeIcon} />
      </div>

      <h3 className={NavMiddle}>Trending Repos</h3>

      <div className={NavSearch}>
        <input type="text" placeholder="Search" className={searchInput} />
        <AiOutlineSearch className="text-gray-400" />
      </div>
    </div>
  );
}

export default Navbar;
