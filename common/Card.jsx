import GithubSvg from "@/icons/GithubSvg";
import GoToSvg from "@/icons/GoToSvg";
import React from "react";

const Card = () => {
  return (
    <div
      className="border border-[#D22B2B] shadow-md rounded-md"
      style={{
        backgroundImage: "url(memoryReboot.jpg)",
        backgroundPosition: "center",
      }}
    >
      <div
        className="bg-white p-2 m-1 bg-opacity-70 !backdrop-blur-md rounded-md"
        style={{ opacity: 0.8 }}
      >
        <div className="text-xs text-[#D22B2B] font-semibold">project type</div>
        <div className="text-lg font-semibold">Project name</div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi omnis
          pariatur accusamus ducimus vitae, vero sint! Provident, porro
          inventore? Ad provident nesciunt eos numquam ea optio consectetur sit
          dolorum veniam!
        </div>
        <div className="flex space-x-3 mt-2">
          <div className="cursor-pointer">
            <GithubSvg fill="#D22B2B" size="20" />
          </div>
          <div className="cursor-pointer">
            <GoToSvg fill="#D22B2B" size="20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
