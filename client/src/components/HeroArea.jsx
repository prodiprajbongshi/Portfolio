import React, { useRef } from "react";
import { LuDownload } from "react-icons/lu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const HeroArea = () => {
  let timeLine = gsap.timeline();
  const heroInfo = useRef();
  const heroImage = useRef();

  useGSAP(() => {
    // Animation for heroImage
    timeLine.from(heroImage.current, {
      x: 100,
      duration: 0.3,
      opacity: 0,
      delay: 0.3,
    });

    // Animation for heroInfo
    timeLine.from(heroInfo.current, {
      y: 30,
      duration: 0.2,
      opacity: 0,
      delay: 0.2,
    });
  });

  return (
    <div className="container px-4 sm:px-6 pb-10 lg:pb-32 lg:px-38 flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-y-12 lg:gap-x-10 py-22 md:pt-52">
      {/* Left Text Section */}
      <div ref={heroInfo} className="w-full lg:w-3/5 text-center lg:text-left">
        <h3 className="text-base sm:text-lg font-medium text-purple-400">
          Web Developer (MERN) || Bridging Frontend Beauty with Backend Power
        </h3>
        <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent my-6 leading-tight">
          Hi, I'm Prodip <br className="hidden sm:block" /> Rajbongshi
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mx-auto lg:mx-0 max-w-[90%] sm:max-w-full">
          I specialize in building{" "}
          <span className="text-purple-400 font-bold">
            high-performance web applications
          </span>{" "}
          that address real-world business challenges. With over 3 years of
          experience, I deliver production-ready solutions using modern
          technologies and best development practices...
        </p>

        <div className="flex flex-wrap gap-3 justify-center lg:justify-start my-10">
          {[
            "HTML-5",
            "CSS-3",
            "Next.js",
            "Javascript",
            "React.js",
            "Node.js",
            "Tailwind",
            "GSAP",
            "Shadcn",
            "Framer Motion",
            "TanStack Query",
            "Bootstrap",
            "Express.js",
            "Redux",
            "JWT",
            "Figma",
            "MongoDB",
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-all relative group cursor-pointer"
              title="Expert proficiency"
            >
              {skill}
              <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100"></span>
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-x-6">
          <a
            href="#contact"
            className="w-full sm:w-auto text-white flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            aria-label="Hire Prodip for your project"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            Hire Me
          </a>
          <a
            href="https://drive.google.com/drive/folders/1P0MRfitJ6EHEn7hDMV58uCnbqaYlW7LW?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-2 px-6 py-3.5 border border-white/20 text-gray-300 rounded-lg font-medium hover:bg-white/10 transition-all"
          >
            <LuDownload />
            <span>Download Resume</span>
          </a>
        </div>

        <p className="text-sm text-gray-400 pt-4 mt-2 text-center lg:text-left">
          Available for freelance projects and full-time opportunities
        </p>
      </div>

      {/* Right Image Section */}
      <div
        ref={heroImage}
        className="w-full sm:w-4/5 lg:w-2/5 max-w-md mx-auto lg:mx-0"
      >
        <div className="relative flex items-center justify-center bg-[#1C2232] rounded-xl cursor-pointer hover:shadow-2xl transition-all duration-300">
          <img
            src="/ProdipRajbongshi.png"
            alt="Profile Picture"
            className="w-full object-cover rounded-xl"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 40%, transparent 100%)",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "100% 95%",
              maskImage:
                "linear-gradient(to bottom, black 40%, transparent 100%)",
              maskRepeat: "no-repeat",
              maskSize: "100% 100%",
            }}
          />
          <div className="absolute z-20 bottom-[10%] flex items-center justify-center w-full fade-delay">
            <div className="px-6 py-3 bg-black/50 backdrop-blur-md rounded-full border border-white/20 text-white font-semibold hover:bg-black/70 cursor-pointer">
              <span>3+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
