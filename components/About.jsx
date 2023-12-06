import SkillsButton from "@/common/SkillsButton";
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
            {`Hello! I'm Aryan, a Mumbai-based Frontend Developer with over a year
          of hands-on experience since completing my BSc in Computer Science in
          2022. I specialize in crafting user-friendly websites and web
          applications. Beyond coding, I find joy in music and football. Check
          out my portfolio to explore the seamless fusion of technology and
          creativity in my work. Let's collaborate and bring your digital ideas
          to life!`}
          </div>
          <div className="py-1 absolute top-1 left-0 px-1">
            {`Hello! I'm Aryan, a Mumbai-based Frontend Developer with over a year
          of hands-on experience since completing my BSc in Computer Science in
          2022. I specialize in crafting user-friendly websites and web
          applications. Beyond coding, I find joy in music and football. Check
          out my portfolio to explore the seamless fusion of technology and
          creativity in my work. Let's collaborate and bring your digital ideas
          to life!`}
          </div>
        </div>

        <div className="w-[50%] relative group hidden lg:block">
          <div
            className="shadow-sm bg-white absolute translate-x-3 -translate-y-3 h-full w-full"
            style={{
              backgroundImage: "url(profile.jpg)",
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
        <div className="m-2">
          <SkillsButton />
        </div>
      </div>
    </div>
  );
};

export default About;
