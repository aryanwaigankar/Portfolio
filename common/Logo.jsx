import React from "react";

const Logo = () => {
  return (
    <div className="relative cursor-pointer">
      <div className="w-0 h-0 border-l-[25px] border-l-transparent border-b-[50px] border-b-black border-r-[25px] border-r-transparent"></div>
      <div
        className={`absolute top-0 left-0 w-0 h-0 border-l-[25px] border-l-transparent border-b-[50px] border-b-[#D22B2B] border-r-[25px] border-r-transparent ease-out  hover:translate-x-3 transition-all`}
      >
        <div className="absolute top-0 left-0 w-0 h-0 border-l-[15px] border-l-transparent border-b-[30px] border-b-black border-r-[15px] border-r-transparent "></div>
      </div>
    </div>
  );
};

export default Logo;
