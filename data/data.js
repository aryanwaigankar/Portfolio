import BootstrapSvg from "@/icons/BootstrapSvg";
import CssSvg from "@/icons/CssSvg";
import DockerSvg from "@/icons/DockerSvg";
import HtmlSvg from "@/icons/HtmlSvg";
import JavascriptSvg from "@/icons/JavascriptSvg";
import NextSvg from "@/icons/NextSvg";
import ReactSvg from "@/icons/ReactSvg";
import TailwindSvg from "@/icons/TailwindSvg";
import Typescript from "@/icons/Typescript";

export const data = {
  name: "Aryan Waigankar",
  email: "aryanwaigankar10@gmail.com",
  resume: "Aryan Waigankar Resume.pdf",
  github: "https://github.com/aryanwaigankar",
  linkedIn: "https://www.linkedin.com/in/aryanwaigankar/",
  subTitle: "A Frontend focused Web Developer.",
  portfolioGithub: "https://github.com/aryanwaigankar/Portfolio",
  shortAbout:
    "I like to develop scalable Websites and Web Applications with great user experiences.",
  about:
    "Hello! I'm Aryan, a Mumbai-based Frontend Developer with over a year of hands-on experience since completing my BSc in Computer Science in 2022. I specialize in crafting user-friendly websites and web applications. Beyond coding, I find joy in music and football. Check out my portfolio to explore the seamless fusion of technology and creativity in my work. Let's collaborate and bring your digital ideas to life!",
  aboutImage: "profile.jpg",
  skills: [
    { name: "React JS", rating: 5, icon: <ReactSvg size={"1.5rem"} /> },
    { name: "Next JS", rating: 5, icon: <NextSvg size={"1.2rem"} /> },
    {
      name: "Javascript (ES6+)",
      rating: 5,
      icon: <JavascriptSvg size={"1.5rem"} />,
    },
    { name: "React Native", rating: 4, icon: <ReactSvg size={"1.5rem"} /> },
    { name: "Tailwind", rating: 5, icon: <TailwindSvg size={"1.5rem"} /> },
    { name: "HTML", rating: 5, icon: <HtmlSvg size={"1.5rem"} /> },
    { name: "CSS", rating: 4, icon: <CssSvg size={"1.5rem"} /> },
    { name: "Bootstrap", rating: 4, icon: <BootstrapSvg size={"1.2rem"} /> },
    { name: "Docker", rating: 1, icon: <DockerSvg size={"1.5rem"} /> },
    { name: "Typescript", rating: 2, icon: <Typescript size={"1.2rem"} /> },
  ],
  contactDescription:
    "Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
  songs: [
    {
      name: "Memory Reboot",
      image: "memoryReboot.jpg",
      audio: "Memory Reboot.mp3",
      artists: "Narvent and VØJ",
      id: 0,
    },
    {
      name: "Am I Dreaming",
      image: "am-i-dreaming.png",
      audio: "am-i-dreaming.mp3",
      artists: "Metro Boomin, A$AP Rocky, Roisee",
      id: 1,
    },
    {
      name: "Heat Waves",
      image: "heat-waves.png",
      audio: "Heat Waves.mp3",
      artists: "Glass Animals",
      id: 2,
    },
  ],
  projects: [
    {
      name: "Bankist Website",
      projectType: "Personal Project",
      image: "Bankist-Web.png",
      projectDescription: "Simple and clean Web design for a Banking Website.",
      repoLink: "https://github.com/aryanwaigankar/Bankist-web-page",
      websiteLink: "https://aryanwaigankar.github.io/Bankist-web-page/",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Mapty",
      projectType: "Personal Project",
      image: "Mapty-Web.png",
      projectDescription:
        "A web app to track the locations of your recent workouts like running and cycling with your workout statistics. Select the location and track your data.",
      repoLink: "https://github.com/aryanwaigankar/Mapty",
      websiteLink: "https://aryanwaigankar.github.io/Mapty/",
      technologies: ["HTML", "CSS", "JavaScript", "Leaflet"],
    },
    {
      name: "Bankist Interface",
      projectType: "Personal Project",
      image: "Bankist-Interface-Web.png",
      projectDescription:
        "An Online Banking web app with features like money transactions to other accounts and requesting loan",
      repoLink: "https://github.com/aryanwaigankar/Bankist-Interface",
      websiteLink: "https://aryanwaigankar.github.io/Bankist-Interface/",
      technologies: ["React JS", "HTML", "CSS", "Bootstrap", "JavaScript"],
    },
  ],
};
