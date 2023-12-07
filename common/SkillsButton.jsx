import DockerSvg from "@/icons/DockerSvg";
import React from "react";

const SkillsButton = ({
  name = "Javascript (ES6+)",
  rating = 5,
  icon = false,
}) => {
  let stars = [];
  for (let i = 1; i <= rating; i++) {
    stars.push(i);
  }
  return (
    <button className="btn relative inline-flex border border-[#D22B2B] rounded-md items-center justify-start overflow-hidden transition-all bg-white hover:bg-white group">
      {/* purple box */}
      {stars?.length > 0 && (
        <span className="w-0 h-full space-x-1 rounded bg-[#D22B2B] text-center flex items-center justify-center text-white absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full -z-1">
          {stars?.slice(0, 5)?.map((data) => {
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            );
          })}
        </span>
      )}
      <span
        className={`w-full min-w-[9rem] px-1 py-2 text-[#D22B2B] transition-colors space-x-2 justify-center items-center flex duration-300 ease-in-out ${
          stars?.length > 0 && "group-hover:text-opacity-0"
        } z-10`}
      >
        {icon && <span style={{ marginRight: "4px" }}>{icon}</span>}
        {name}
      </span>
    </button>
  );
};

export default SkillsButton;
