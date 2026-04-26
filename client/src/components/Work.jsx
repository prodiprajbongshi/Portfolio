import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
import project1 from "../assets/projects/Quickpick.png";
import project2 from "../assets/projects/bdFex.png";
import project3 from "../assets/projects/imageGanarator.png";
import project4 from "../assets/projects/surbojuya.png";
import project5 from "../assets/projects/techIllution.png";
import project6 from "../assets/projects/waetherApp.png";
import project7 from "../assets/projects/watermarkPr.png";
import project8 from "../assets/projects/nestify.png";
import Navbar from "./Navbar";

const project = [
  {
    projectImg: project1,
    projectLink: "https://quick-pick-eight.vercel.app/",
    projectRepo: "https://github.com/DevProdipraj/QuickPick",
    tag: ["E-Commerce", "Tailwind CSS", "React", "Frontend"],
  },
  {
    projectImg: project2,
    projectLink: "https://devprodipraj.github.io/BDfex/",
    projectRepo: "https://github.com/DevProdipraj/BDfex",
    tag: ["Conference", "HTML5", "CSS3", "Web Design"],
  },
  {
    projectImg: project3,
    projectLink: "https://devprodipraj.github.io/img_generator/",
    projectRepo: "https://github.com/DevProdipraj/img_generator",
    tag: ["Image", "AI", "JavaScript", "Backend"],
  },
  {
    projectImg: project4,
    projectLink: "https://devprodipraj.github.io/Sorbujoya/",
    projectRepo: "https://github.com/DevProdipraj/Sorbujoya",
    tag: ["Farmers", "Bootstrap", "Web Design", "Responsive"],
  },
  {
    projectImg: project5,
    projectLink: "https://devprodipraj.github.io/techillusionBD/",
    projectRepo: "https://github.com/DevProdipraj/techillusionBD",
    tag: ["IT Company", "Backend", "UI/UX", "Frontend"],
  },
  {
    projectImg: project6,
    projectLink: "https://devprodipraj.github.io/wather-app/",
    projectRepo: "https://github.com/DevProdipraj/wather-app",
    tag: ["Weather", "Backend", "API", "Frontend"],
  },
  {
    projectImg: project7,
    projectLink: "https://devprodipraj.github.io/WatermarkPR/",
    projectRepo: "https://github.com/DevProdipraj/WatermarkPR",
    tag: ["Agency", "Web Design", "HTML5", "Bootstrap"],
  },
  {
    projectImg: project8,
    projectLink: "https://nestify-umber.vercel.app",
    projectRepo: "https://github.com/DevProdipraj/Portfolio",
    tag: ["Furniture", "Frontend Development", "Next-js", "Tailwind-CSS"],
  },
];

const Work = () => {
  const sectionHeader = useRef();
  const gitHubLink = useRef();
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Header animation
    gsap.from(sectionHeader.current.querySelectorAll("span"), {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionHeader.current,
        start: "top 40%",
        end: "top 30%",
        scrub: 2,
      },
    });

     // Project cards animation (bottom to top)
    gsap.from(cardsRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 85%",
        scrub: 2,
      },
    });

    // GitHub link animation
    gsap.from(gitHubLink.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      scrollTrigger: {
        trigger: gitHubLink.current,
        start: "top 50%",
        end: "top 50%",
        scrub: 2,
      },
    });

   
  }, []);

  return (
    <div id="work" className="py-12 lg:py-36 px-4 sm:px-6 lg:px-8">

      

      {/* Header */}
      <div className="container mx-auto px-6 max-w-6xl z-10 ">
        <div className="mb-20 overflow-hidden">
          <h1 className="text-center" ref={sectionHeader}>
            {"WORKS".split("").map((letter, idx) => (
              <span
                key={idx}
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 text-4xl md:text-8xl font-bold tracking-tight"
              >
                {letter}
              </span>
            ))}
          </h1>
          <div className="w-24 h-1 mt-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"></div>
        </div>
      </div>

      {/* Cards */}
      <div className="py-0 px-4 sm:px-8 md:px-16 lg:px-16 xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((p, i) => (
            <a key={i} target="_blank" href={p.projectLink}>
              <div
                ref={(el) => (cardsRef.current[i] = el)}
                className="bg-white/5 p-4 rounded-xl border border-white/10 cursor-pointer"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.projectImg}
                    alt="Project"
                    className="w-full h-48 object-contain hover:scale-125 transition-all duration-300 rounded-md mb-4"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tag.map((value, idx) => (
                    <span
                      key={value + idx}
                      className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10 hover:bg-white/1 transition-all duration-300"
                    >
                      {value}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <a
                    href={p.projectLink}
                    target="_blank"
                    className="text-blue-400 hover:underline text-sm"
                  >
                    Live
                  </a>
                  <a
                    href={p.projectRepo}
                    target="_blank"
                    className="text-blue-400 hover:underline text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* GitHub Button */}
      <div ref={gitHubLink}>
        <div className="mt-20 lg:mt-40 text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group"
            href="https://github.com/DevProdipraj/"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:scale-110"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span className="text-white">Explore All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
