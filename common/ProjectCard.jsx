import GithubSvg from "@/icons/GithubSvg";
import GoToSvg from "@/icons/GoToSvg";
import React, { useState } from "react";

function ProjectCard({
  index = 1,
  name,
  projectType,
  image,
  description,
  technologies,
  github,
  website,
}) {
  const isOdd = (num) => num % 2 === 1;
  return (
    <div>
      <div
        className="relative flex w-full"
        style={{
          display: "flex",
          justifyContent: isOdd(index) ? "end" : "start",
        }}
      >
        <div
          className="!w-[60%] shadow-md  bg-red-700"
          style={{ width: "60%" }}
        >
          <img src={image} alt="" />
        </div>
        <div
          className={`absolute top-0 ${
            isOdd(index) ? "left-0" : "right-0"
          } w-[50%] h-full`}
          style={{
            zIndex: 2,
            padding: "1rem",
            textAlign: isOdd(index) ? "left" : "right",
          }}
        >
          <div className="">
            <div
              className="text-[#D22B2B] font-semibold"
              style={{ textAlign: isOdd(index) ? "left" : "right" }}
            >
              {projectType}
            </div>
            <div
              className="text-xl font-semibold"
              style={{ textAlign: isOdd(index) ? "left" : "right" }}
            >
              {name}
            </div>
          </div>
          <div
            className="my-2 text-left py-5 px-1 bg-white shadow-md text-lg"
            style={{ opacity: 0.9 }}
          >
            {description}
          </div>
          <div
            className="text-[#D22B2B] font-semibold"
            style={{ textAlign: isOdd(index) ? "left" : "right" }}
          >
            {technologies?.join(" ")}
          </div>
          <div
            className="text-[#D22B2B] font-semibold space-x-5 flex my-2 items-end justify-end"
            style={{
              textAlign: isOdd(index) ? "right" : "left",
              display: "flex",
              justifyContent: isOdd(index) ? "start" : "end",
            }}
          >
            <div className="cursor-pointer">
              <a href={github} target="_blank">
                <GithubSvg size="25" />
              </a>
            </div>
            <div className="cursor-pointer">
              <a href={website} target="_blank">
                <GoToSvg size="25" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
