import { data } from "@/data/data";
import React, { useEffect, useState } from "react";

const Navbar = ({ scrollTo, RevealOnScroll }) => {
  const navLinks = [
    { name: "About", id: "about" },
    { name: "Career", id: "career" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const [showNav, setshowNav] = useState(false);

  const onButtonClick = () => {
    const pdfUrl = data?.resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.download = "Aryan's Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (showNav) {
      window.document.body.style.overflow = "hidden";
      return;
    }
    window.document.body.style.overflow = "visible";
  }, [showNav]);

  return (
    <div>
      <nav className="bg-white backdrop-blur-md fixed w-full z-20 top-0 start-0 shadow-sm bg-opacity-40 md:bg-opacity-90">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          {/* <Logo /> */}
          <div className="relative cursor-pointer">
            <div className="w-0 h-0 border-l-[25px] border-l-transparent border-b-[50px] border-b-black border-r-[25px] border-r-transparent"></div>
            <div
              className={`absolute top-0 left-0 w-0 h-0 border-l-[25px] border-l-transparent border-b-[50px] border-b-[#D22B2B] border-r-[25px] border-r-transparent ease-out  hover:translate-x-3 transition-all`}
            >
              <div className="absolute top-0 left-0 w-0 h-0 border-l-[15px] border-l-transparent border-b-[30px] border-b-black border-r-[15px] border-r-transparent "></div>
            </div>
          </div>

          <div className="block md:hidden md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={() => setshowNav(!showNav)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
              ariaControls="navbar-sticky"
              ariaExpanded="false"
            >
              {/* <span className="sr-only">Open main menu</span> */}
              <svg
                className={`w-5 h-5 transform ${
                  showNav ? "rotate-90" : ""
                } ease-out transition-all`}
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="#D22B2B"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="#D22B2B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* <RevealOnScroll> */}
          <div
            className={`items-center justify-between  md:flex md:w-auto md:order-1
            transition-all duration-100 ${
              showNav ? "w-full h-full" : "h-0 w-0 hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 my-4 text-md font-medium border border-[#D22B2B] rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row md:my-0 md:border-0">
              {navLinks?.map((data, index) => {
                return (
                  <li key={index}>
                    <a
                      //   onClick={() => scrollTo(data?.id)}
                      //   href={"#"}
                      className="cursor-pointer group relative inline-block overflow-hidden mt-2 py-2 px-3 text-black hover:text-[#D22B2B]"
                    >
                      <span className="ease absolute left-0 top-0 h-0 w-0 border-t md:border-t-0 border-[#D22B2B] transition-all duration-500 group-hover:w-full"></span>
                      <span className="ease absolute right-0 top-0 h-0 w-0 border-r-0 md:border-r border-[#D22B2B] transition-all duration-500 group-hover:h-full"></span>
                      <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b md:border-b-0 border-[#D22B2B] transition-all duration-500 group-hover:w-full"></span>
                      <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-0 md:border-l border-[#D22B2B] transition-all duration-500 group-hover:h-full"></span>
                      {data?.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* <AnimationButton name={"Resume"} /> */}
            <div className="relative">
              <button
                type="button"
                className="btn p-2 md:ml-4 bg-[#D22B2B] text-[#D22B2B] text-md font-medium ease-out  rounded-md"
              >
                {"Resume"}
              </button>
              <button
                onClick={() => onButtonClick()}
                type="button"
                className="absolute left-0 md-right-0 top-0 btn p-2 md:ml-4 text-md font-medium border border-[#D22B2B] text-black bg-white ease-out hover:-translate-y-1 hover:translate-x-1 transition-all rounded-md"
              >
                {"Resume"}
              </button>
            </div>
          </div>
          {/* </RevealOnScroll> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
