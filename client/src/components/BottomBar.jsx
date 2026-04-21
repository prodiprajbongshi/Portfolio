import React, { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

const BottomBar = () => {
  const [hiddenBar, setHiddenBar] = useState(false);

  const navigate = useNavigate();

  let timeLine = gsap.timeline();
  const bottomBar = useRef();

  useGSAP(() => {
    timeLine.from(bottomBar.current, {
      y: 100,
      duration: 0.5,
      opacity: 0,
      delay: 0.5,
    });
  });

  return (
    <>
      {hiddenBar && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30">
          <button
            onClick={() => setHiddenBar(false)}
            className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full shadow-lg cursor-pointer"
          >
            Show Bar
          </button>
        </div>
      )}

      {!hiddenBar && (
        <div
          ref={bottomBar}
          className="lg:block fixed bottom-10 w-full px-4 z-20"
        >
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="rounded-xl overflow-hidden shadow-2xl text-center bg-gradient-to-br from-[#0a0e1a] via-[#0f172a] to-[#1e1030] p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-col md:flex-row md:items-center flex-1 gap-4">
                <div
                  onClick={() => {
                    navigate("/");
                  }}
                  className="hidden lg:block cursor-pointer"
                >
                  <img
                    className="md:w-52 h-auto mx-auto md:mx-0"
                    src="./Logo.svg"
                    alt="Brand Icon"
                  />
                </div>
                <div className="hidden md:block">
                  <ul className="flex justify-center md:justify-start items-center gap-x-6 text-white lg:ms-5 ">
                    <a href="#work" className="cursor-pointer">
                      Work
                    </a>
                    <a href="#services" className="cursor-pointer">
                      Service
                    </a>
                    <a href="#about" className="cursor-pointer">
                      About
                    </a>
                  </ul>
                </div>
                <div className="flex justify-center md:justify-start gap-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/prodiprajbongshi"
                    className="px-4 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-purple-400/30 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <div className="text-xl text-purple-400">
                        <FaGithub />
                      </div>
                      <div className="text-sm text-white/80">GitHub</div>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/prodip-rajbongshi-a50818282/"
                    className="px-4 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-purple-400/30 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <div className="text-xl text-blue-300">
                        <SiLinkedin />
                      </div>
                      <div className="text-sm text-white/80">LinkedIn</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex justify-center md:justify-end gap-2">
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
                  Hire Me
                </a>

                <button
                  onClick={() => setHiddenBar(true)}
                  className="text-gray-400 hover:text-white transition-all p-2 cursor-pointer"
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
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BottomBar;
