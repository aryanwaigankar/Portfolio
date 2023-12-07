import AnimationButton from "@/common/AnimationButton";
import { data } from "@/data/data";
import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="ease border-b border-[#D22B2B] text-[#D22B2B] text-center mb-5 transition-all duration-500 text-lg lg:text-2xl font-black">
        Contact Me
      </div>
      <div className="flex rounded-md justify-center items-center">
        <div>
          <div className="text-[#D22B2B] mb-2 transition-all duration-500 text-center text-lg lg:text-2xl">
            Get In Touch
          </div>
          <div className="max-w-[30rem] text-center text-md lg:text-lg">
            {data?.contactDescription}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <div className="relative">
          <a href={`mailto:${data?.email}`}>
            <button
              type="button"
              className={`btn p-2 bg-[#D22B2B] text-[#D22B2B] lg:text-md text-sm font-medium ease-out rounded-md whitespace-nowrap`}
            >
              {"Say Hello"}
            </button>
            <button
              onClick={() => {}}
              type="button"
              className="absolute left-0 top-0 btn p-2 lg:text-md text-sm font-medium border border-[#D22B2B] text-black bg-white ease-out hover:-translate-y-1 hover:translate-x-1 transition-all rounded-md whitespace-nowrap"
            >
              {"Say Hello"}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
