import Card from "@/common/Card";
import ProjectCard from "@/common/ProjectCard";
import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="ease border-b border-[#D22B2B] text-[#D22B2B] mb-5 transition-all duration-500 text-lg lg:text-2xl font-black">
        Some Things I've Built
      </div>
      <div className="!my-[5rem] relative hidden lg:block">
        <ProjectCard index={0} />
      </div>
      <div className="lg:hidden mb-3">
        <Card />
      </div>
      <div className="!my-[5rem] relative hidden lg:block">
        <ProjectCard index={1} />
      </div>
      <div className="!my-[5rem] relative hidden lg:block">
        <ProjectCard index={2} />
      </div>
    </div>
  );
};

export default Projects;
