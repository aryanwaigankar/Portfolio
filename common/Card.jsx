import GithubSvg from "@/icons/GithubSvg";
import GoToSvg from "@/icons/GoToSvg";
import React from "react";

const Card = ({
  name,
  projectType,
  image,
  description,
  technologies,
  github,
  website,
}) => {
  return (
    <div
      className="border border-[#D22B2B] shadow-md rounded-md"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
      }}
    >
      <div
        className="bg-white p-2 m-1 bg-opacity-70 !backdrop-blur-md rounded-md"
        style={{ opacity: 0.8 }}
      >
        <div className="text-xs text-[#D22B2B] font-semibold">
          {projectType}
        </div>
        <div className="text-lg font-semibold">{name}</div>
        <div>{description}</div>
        <div
          className="text-[#D22B2B] font-semibold text-sm"
          // style={{ textAlign: isOdd(index) ? "left" : "right" }}
        >
          {technologies?.join(" ")}
        </div>
        <div className="flex space-x-3 mt-2">
          <div className="cursor-pointer">
            <a href={github}>
              <GithubSvg fill="#D22B2B" size="20" />
            </a>
          </div>
          <div className="cursor-pointer">
            <a href={website}>
              <GoToSvg fill="#D22B2B" size="20" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
