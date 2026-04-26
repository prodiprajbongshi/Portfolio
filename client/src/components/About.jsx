import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const About = () => {
  let timeLine = gsap.timeline();
  const sectionHeader = useRef();
  const aboutInfo = useRef();
  const devlopmentCard = useRef();
  const toolsCard = useRef();
  const experianceCard = useRef();
  const resumeBtn = useRef();

  useGSAP(() => {
    timeLine.from(sectionHeader.current.querySelectorAll("span"), {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionHeader.current,
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 50%",
        scrub: 2,
      },
      
    });

    timeLine.from(aboutInfo.current, {
      y: 100,
      duration: 0.5,
      opacity: 0,
      delay: 2,
      scrollTrigger: {
        trigger: sectionHeader.current,
        scroller: "body",
        // markers: true,
        start: "top 30%",
        end: "top 30%",
        scrub: 2,
      },
    });
    timeLine.from(devlopmentCard.current, {
      x: -200,
      duration: 0.5,
      opacity: 0,
      delay: 4,
      scrollTrigger: {
        trigger: sectionHeader.current,
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top 0%",
        scrub: 2,
      },
    });
    timeLine.from(toolsCard.current, {
      x: -400,
      duration: 0.5,
      opacity: 0,
      delay: 6,
      scrollTrigger: {
        trigger: sectionHeader.current,
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top 0%",
        scrub: 2,
      },
    });
    timeLine.from(experianceCard.current, {
      x: -600,
      duration: 0.5,
      opacity: 0,
      delay: 8,
      scrollTrigger: {
        trigger: sectionHeader.current,
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top 0%",
        scrub: 2,
      },
    });
    timeLine.from(resumeBtn.current, {
      y: 60,
      duration: 2,
      opacity: 0,
      delay: 10,
      scrollTrigger: {
        trigger: sectionHeader.current,
        scroller: "body",
        // markers: true,
        start: "top -50%",
        end: "top -50%",
        scrub: 2,
      },
    });
  });

  return (
    <div>
      <div
        id="about"
        className="w-full py-16 md:py-28 relative overflow-hidden bg-gradient-to-br from-[#0a0e1a] via-[#0f172a] to-[#1a1030]"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-purple-500 blur-[80px]"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-blue-500 blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div  className="  mb-16 text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-3xl text-purple-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <h2 ref={sectionHeader} className="overflow-hidden">
                <span className="inline-block text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">A</span>
                <span className="inline-block text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">B</span>
                <span className="inline-block text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">O</span>
                <span className="inline-block text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">U</span>
                <span className="inline-block text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">T</span>
                <span className="inline-block  w-4"></span> 
                <span className="inline-block text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">M</span>
                <span className="inline-block text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">E</span>
              </h2>
            </div>
            <div className="title-divider mx-auto w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>

          <div ref={aboutInfo} className=" mb-20 max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Hello! I'm{" "}
              <span className="text-purple-300 font-medium">
                Prodip Rajbongshi
              </span>
              , a passionate{" "}
              <span className="text-blue-300 font-medium">
                Full-Stack Developer
              </span>{" "}
              with<span className="text-pink-300 font-medium"> 3+ years</span>{" "}
              of experience crafting exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Development Card */}
            <div
              ref={devlopmentCard}
              className="   bg-gradient-to-br from-[#1e1b4b]/50 to-[#0f172a]/80 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all hover:-translate-y-2 shadow-lg shadow-purple-500/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-purple-500/10">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-3xl text-purple-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Development
                </h3>
              </div>
              <ul className="space-y-3 text-gray-300 lg:mt-12">
                {[
                  "Javascript",
                  "React",
                  "Next.js",
                  "Redux",
                  "Redux Toolkit",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                ].map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Design & Tools Card */}
            <div
              ref={toolsCard}
              className=" bg-gradient-to-br from-[#1e3a8a]/50 to-[#0f172a]/80 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all hover:-translate-y-2 shadow-lg shadow-blue-500/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-3xl text-blue-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="1" x2="9" y2="4"></line>
                    <line x1="15" y1="1" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="23"></line>
                    <line x1="15" y1="20" x2="15" y2="23"></line>
                    <line x1="20" y1="9" x2="23" y2="9"></line>
                    <line x1="20" y1="14" x2="23" y2="14"></line>
                    <line x1="1" y1="9" x2="4" y2="9"></line>
                    <line x1="1" y1="14" x2="4" y2="14"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Design & Tools
                </h3>
              </div>
              <ul className="space-y-3 text-gray-300 lg:mt-12">
                {[
                  "Figma (Basic)",
                  "Html - 5",
                  "CSS - 3",
                  "Bootstrap - 5",
                  "Tailwind CSS",
                  "Shadcn",
                  "GSAP",
                ].map((tool, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experience Card */}
            <div
              ref={experianceCard}
              className="  bg-gradient-to-br from-[#831843]/50 to-[#0f172a]/80 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-pink-400/50 transition-all hover:-translate-y-2 shadow-lg shadow-pink-500/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-pink-500/10">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-3xl text-pink-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="7"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Experience
                </h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                  <h4 className="text-lg font-medium text-white">
                    Full-Stack Developer
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    6+ months experience
                  </p>
                  <p className="text-gray-300 mt-2">
                    Building scalable web applications with modern technologies
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                  <h4 className="text-lg font-medium text-white">
                    Frontend development
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    3+ years experience
                  </p>
                  <p className="text-gray-300 mt-2">
                    Frontend Developer with Real-World Experience in Building
                    Responsive, Scalable Interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div ref={resumeBtn} className="  text-center">
            <a
              href="https://drive.google.com/drive/folders/1P0MRfitJ6EHEn7hDMV58uCnbqaYlW7LW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-medium text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all group"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:rotate-12"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
              <span>View Full Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
