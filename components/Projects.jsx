import Card from "@/common/Card";
import ProjectCard from "@/common/ProjectCard";
import { data } from "@/data/data";
import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="ease border-b border-[#D22B2B] text-[#D22B2B] mb-5 transition-all duration-500 text-lg lg:text-2xl font-black">
        Some Things I've Built
      </div>
      {data?.projects?.map((project, index) => {
        return (
          <>
            <div className="!my-[5rem] relative hidden lg:block">
              <ProjectCard
                index={index}
                name={project?.name}
                projectType={project?.projectType}
                image={project?.image}
                description={project?.projectDescription}
                github={project?.repoLink}
                technologies={project?.technologies}
                website={project?.websiteLink}
              />
            </div>
            <div className="lg:hidden mb-3">
              <Card
                name={project?.name}
                projectType={project?.projectType}
                image={project?.image}
                description={project?.projectDescription}
                technologies={project?.technologies}
                github={project?.repoLink}
                website={project?.websiteLink}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Projects;
