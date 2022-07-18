import React from "react";
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

function Footer() {
  let icon = "text-2xl text-stone-200";
  let footerLink = "text-xs text-gray-400";
  return (
    <div className="absolute flex flex-col items-center bottom-6">
      <div className="flex flex-row space-x-5 items-center mb-3">
        <AiFillFacebook className={icon} />
        <AiFillTwitterSquare className={icon} />
        <AiFillYoutube className={icon} />
        <AiFillInstagram className={icon} />
        <AiFillLinkedin className={icon} />
      </div>

      <div className="flex flex-row space-x-6 mb-1">
        <p className={footerLink}>Terms of Service</p>
        <p className={footerLink}>Privacy Policy</p>
      </div>

      <p className={footerLink}>
        CopyRight 2021 @Poddle Technologies. All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
