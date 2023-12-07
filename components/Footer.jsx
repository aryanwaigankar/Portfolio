import GithubSvg from "@/icons/GithubSvg";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#D22B2B]">
      <div className="text-center text-white py-5">
        Designed & Built by Aryan Waigankar
      </div>
      <div className="flex justify-center pb-4 cursor-pointer">
        <GithubSvg fill="white" size="20" />
      </div>
    </div>
  );
};

export default Footer;
