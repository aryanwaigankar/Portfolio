import SkillsButton from "@/common/SkillsButton";
import { data } from "@/data/data";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="ease border-b border-[#D22B2B] text-[#D22B2B] transition-all duration-500 text-lg lg:text-2xl font-black">
        About Me
      </div>
      <div className="flex w-full space-x-5">
        <div className="lg:w-[50%] shadow-sm md:p-1 rounded-md text-sm md:text-lg w-full text-white lg:text-black relative">
          <div
            className="py-1 lg:!bg-none !text-transparent"
            style={{
              backgroundImage: "url(profile.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              zIndex: 1,
              filter: "brightness(30%)",
              //   opacity: 0.9,
              // filter: "blur(3px)",
            }}
          >
            {data?.about}
          </div>
          <div className="py-1 absolute top-1 left-0 px-1">{data?.about}</div>
        </div>

        <div className="w-[50%] relative group hidden lg:block">
          <div
            className="shadow-sm bg-white absolute translate-x-3 -translate-y-3 h-full w-full"
            style={{
              backgroundImage: `url(${data?.aboutImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              zIndex: 1,
              //   opacity: 0.9,
              // filter: "blur(3px)",
            }}
          ></div>
          <div className="shadow-sm bg-[#D22B2B] h-full w-full"></div>
        </div>
      </div>
      <div className="mt-2 text-[#D22B2B] font-semibold">
        Here are some of my Technical Skills:
      </div>
      <div className="flex flex-wrap py-2">
        {data?.skills?.map((skill, index) => {
          return (
            <div className="m-2">
              <SkillsButton
                name={skill?.name}
                rating={skill?.rating}
                icon={skill?.icon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
