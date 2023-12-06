import React from "react";

const AnimationButton = (props) => {
  const commonClasses = "";
  return (
    <div className="relative">
      <button
        type="button"
        className={`${
          props?.className ? props.className : ""
        } btn p-2 bg-[#D22B2B] text-[#D22B2B] lg:text-md text-sm font-medium ease-out  rounded-md`}
      >
        {props.name}
      </button>
      <button
        onClick={() => props.onClick()}
        type="button"
        className="absolute left-0 top-0 btn p-2 lg:text-md text-sm font-medium border border-[#D22B2B] text-black bg-white ease-out hover:-translate-y-1 hover:translate-x-1 transition-all rounded-md"
      >
        {props.name}
      </button>
    </div>
  );
};

export default AnimationButton;
