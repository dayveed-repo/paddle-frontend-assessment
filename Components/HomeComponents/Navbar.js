import { useRouter } from "next/router";
import React from "react";

function Navbar() {
  const navLinks =
    "cursor-pointer text-gray-400 hover:text-white text-sm font-medium";

  const contactBtn =
    "bg-blue-800 cursor-pointer px-4 py-2 rounded-full text-sm text-white";

  const logoText = "font-extrabold cursor-poiter md:text-xl text-white text-lg";

  const NavRight =
    "flex flex-row flex-grow justify-end space-x-4 md:space-x-8 items-center";

  const NavbarContainer = "w-full py-3 flex flex-row max-w-6xl mx-auto";

  const router = useRouter();

  const RouteToContact = () => {
    router.push("/contact-us");
  };

  const goHome = () => {
    router.push("/");
  };

  const goToAbout = () => {
    router.push("/about");
  };

  const goToBlog = () => {
    router.push("/", "/blog");
  };

  return (
    <div className={NavbarContainer}>
      <h2 className={logoText} onClick={() => goHome()}>
        Metricks
      </h2>

      <div className={NavRight}>
        <p className={navLinks} onClick={() => goToAbout()}>
          About us
        </p>

        <p onClick={() => goToBlog()} className={navLinks}>
          Blog
        </p>

        <p onClick={() => RouteToContact()} className={contactBtn}>
          Contact Us
        </p>
      </div>
    </div>
  );
}

export default Navbar;
