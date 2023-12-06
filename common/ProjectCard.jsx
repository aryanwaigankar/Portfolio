import GithubSvg from "@/icons/GithubSvg";
import GoToSvg from "@/icons/GoToSvg";
import React, { useState } from "react";

function ProjectCard({ index = 1 }) {
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
        <div className="w-[60%] shadow-md  bg-red-700">
          <img src="Bankist-Web.png" alt="" />
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
              Personal Project
            </div>
            <div
              className="text-xl font-semibold"
              style={{ textAlign: isOdd(index) ? "left" : "right" }}
            >
              Bankist Web Page
            </div>
          </div>
          <div
            className="my-2 text-left py-5 px-1 bg-white shadow-md text-lg"
            style={{ opacity: 0.9 }}
          >
            some text about projectanskdjakdjsakdja kajsdkajd kasj askdjakd
            fjsdfdsfhdf eiwuriwjqd
          </div>
          <div
            className="text-[#D22B2B] font-semibold"
            style={{ textAlign: isOdd(index) ? "left" : "right" }}
          >
            React Tailwind HTML CSS
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
              <GithubSvg size="25" />
            </div>
            <div className="cursor-pointer">
              <GoToSvg size="25" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
