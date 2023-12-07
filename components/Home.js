import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Description from "./Description";
import { useRouter } from "next/router";
import About from "./About";
import AnimationButton from "@/common/AnimationButton";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import ToolBox from "./ToolBox";

const HomeComponent = () => {
  const [audioStatus, setAudioStatus] = useState(false);

  const scrollTo = (id, block = "start") => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block,
      inline: "nearest",
    });
  };
  const RevealOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const scrollObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          scrollObserver.unobserve(entry.target);
        }
      });

      scrollObserver.observe(ref.current);

      return () => {
        if (ref.current) {
          scrollObserver.unobserve(ref.current);
        }
      };
    }, []);

    const classes = `transition-all duration-[2000ms] 
            ${
              isVisible
                ? "opacity-100 -translate-y-0"
                : "opacity-0 transalate-y-5"
            }`;

    return (
      <div ref={ref} className={classes}>
        {children}
      </div>
    );
  };

  return (
    <div className="font-mono">
      <Navbar scrollTo={scrollTo} RevealOnScroll={RevealOnScroll} />
      <div className="fixed top-28 right-4 z-30 hidden lg:block">
        <ToolBox audioStatus={audioStatus} setAudioStatus={setAudioStatus} />
      </div>
      <div className="hidden lg:block bg-[#D22B2B] fixed z-20 inset-0 top-[5.4rem] left-0 right-auto w-[6rem] pb-10 pl-8 pr-6 overflow-y-auto"></div>

      <RevealOnScroll>
        <div
          id={"home"}
          className="lg:px-[9rem] xl:px-[12rem] px-[1rem] pt-[7rem] md:pt-[10rem]"
        >
          <Description scrollTo={scrollTo} />
        </div>

        <div className="lg:px-[9rem] xl:px-[12rem] px-[1rem] mt-3 relative">
          <AnimationButton
            name={"More About Me"}
            onClick={() => scrollTo("about", "start")}
          />
        </div>
      </RevealOnScroll>

      <div
        id="about"
        className="lg:px-[9rem] xl:px-[12rem] px-[1rem] pt-[8rem]"
      >
        <RevealOnScroll>
          <About />
        </RevealOnScroll>
      </div>

      <div
        id="projects"
        className="lg:px-[9rem] xl:px-[12rem] px-[1rem] pt-[5rem]"
      >
        <RevealOnScroll>
          <Projects />
        </RevealOnScroll>
      </div>

      <div
        id="contact"
        className="lg:px-[9rem] xl:px-[12rem] px-[1rem] pt-[6rem]"
      >
        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>
      </div>

      <div
        id="footer"
        className="lg:px-[9rem] xl:px-[12rem] px-[1rem] bg-[#D22B2B] mt-[6rem]"
      >
        {/* <RevealOnScroll> */}
        <Footer />
        {/* </RevealOnScroll> */}
      </div>

      <div className="hidden lg:block bg-[#D22B2B] fixed z-20 inset-0 top-[5.4rem] right-0 left-auto w-[6rem] pb-10 pl-8 pr-6 overflow-y-auto"></div>
    </div>
  );
};

export default HomeComponent;
