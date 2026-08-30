import React, { useState, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiCode,
  FiGlobe,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ─── Project Images ──────────────────────────────────────────────────────────
import blogApplication from "../assets/projects/blogApplication.jpg";
import watermark from "../assets/projects/watermark.jpg";
import orrien from "../assets/projects/orrien.jpg";
import jamBox from "../assets/projects/jambox.jpg";
import quickpick from "../assets/projects/Quickpick.png";
import amarfoods from "../assets/projects/amarFoods.jpg";
import bdFex from "../assets/projects/bdFex.png";
import greenbd from "../assets/projects/greenBangladesh.jpg";
import shaninTour from "../assets/projects/shaninTour.jpg";
import aladdin from "../assets/projects/aladdin.jpg";
import happylown from "../assets/projects/happylown.jpg";
import sass from "../assets/projects/sass.jpg";
import nestify from "../assets/projects/nestify.png";
import mernAuth from "../assets/projects/mernAuth.jpg";
import imgGenarator from "../assets/projects/imageGanarator.png";
import digitalAgency from "../assets/projects/digitalAgency.jpg";
import sorbojuya from "../assets/projects/surbojuya.png";
import techillusion from "../assets/projects/techIllution.png";
import watherApp from "../assets/projects/waetherApp.png";

// ─── Complete Project Data (19 Projects) ──────────────────────────────────────
const projects = [
  {
    id: 1,
    projectName: "Blog Application",
    category: "Full Stack",
    projectImg: blogApplication,
    projectDesc:
      "Full-stack MERN blogging platform with RESTful APIs, JWT authentication, rich Markdown editing, and responsive UI.",
    projectLink: "https://blog-application-nu-two.vercel.app/",
    projectRepo: "https://github.com/prodiprajbongshi/blogApplication",
    featured: true,
    tag: [
      "MERN Stack",
      "React",
      "Redux",
      "REST API",
      "JWT Auth",
      "MongoDB",
      "Node.js",
      "Express",
    ],
  },
  {
    id: 2,
    projectName: "QuickPick Store",
    category: "E-Commerce",
    projectImg: quickpick,
    projectDesc:
      "Modern e-commerce platform built with React & Redux Toolkit, featuring interactive shopping cart, instant search & filter.",
    projectLink: "https://quick-pick-eight.vercel.app/",
    projectRepo: "https://github.com/prodiprajbongshi/QuickPick",
    featured: true,
    tag: [
      "React",
      "Redux",
      "Tailwind CSS",
      "E-Commerce",
      "React Router",
      "Cart State",
    ],
  },
  {
    id: 3,
    projectName: "Nestify Furniture",
    category: "React & Next.js",
    projectImg: nestify,
    projectDesc:
      "High-end furniture showcase built with Next.js & Tailwind CSS with sleek catalog views and smooth micro-interactions.",
    projectLink: "https://nestify-coral.vercel.app",
    projectRepo: "https://github.com/prodiprajbongshi/Nestify",
    featured: false,
    tag: [
      "Next.js",
      "Tailwind CSS",
      "Modern UI",
      "Product Showcase",
      "Frontend",
    ],
  },
  {
    id: 4,
    projectName: "MERN Auth System",
    category: "Full Stack",
    projectImg: mernAuth,
    projectDesc:
      "Production-ready authentication system with password reset tokens, JWT cookies, MongoDB, and modern validation.",
    projectLink: "https://mern-auth-azvl.vercel.app/",
    projectRepo: "https://github.com/prodiprajbongshi/mern_auth",
    featured: false,
    tag: ["MERN", "JWT", "Node.js", "Express", "MongoDB", "Security"],
  },
  {
    id: 5,
    projectName: "Live Weather App",
    category: "Frontend",
    projectImg: watherApp,
    projectDesc:
      "Dynamic weather forecasting web app featuring real-time API integrations, auto-location detection, and custom forecast visuals.",
    projectLink: "https://prodiprajbongshi.github.io/wather-app/",
    projectRepo: "https://github.com/prodiprajbongshi/wather-app",
    featured: false,
    tag: ["JavaScript", "OpenWeather API", "CSS3", "Async/Await", "Responsive"],
  },
  {
    id: 6,
    projectName: "AI Image Generator",
    category: "Frontend",
    projectImg: imgGenarator,
    projectDesc:
      "AI generative art application utilizing text-to-image AI APIs, high-res download triggers, and historical query cache.",
    projectLink: "https://prodiprajbongshi.github.io/img_generator/",
    projectRepo: "https://github.com/prodiprajbongshi/img_generator",
    featured: false,
    tag: [
      "AI Integration",
      "JavaScript",
      "REST API",
      "Creative UI",
      "Frontend",
    ],
  },
  {
    id: 7,
    projectName: "Watermark BD",
    category: "Frontend",
    projectImg: watermark,
    projectDesc:
      "Corporate business agency website with pixel-perfect responsive layout, cross-browser compatibility, and fast load times.",
    projectLink: "https://watermarkbd.com/",
    featured: false,
    tag: ["HTML5", "Bootstrap 5", "JavaScript", "Business Landing", "UI/UX"],
  },
  {
    id: 8,
    projectName: "Orrien Portfolio UI",
    category: "React & Next.js",
    projectImg: orrien,
    projectDesc:
      "Ultra-clean modern React website styled with Tailwind CSS, smooth route transitions, and responsive layout.",
    projectLink: "https://orrien.vercel.app",
    projectRepo: "https://github.com/prodiprajbongshi/Orrien",
    featured: false,
    tag: [
      "React",
      "Tailwind CSS",
      "React Router",
      "Responsive UI",
      "Web Design",
    ],
  },
  {
    id: 9,
    projectName: "JamBox Games",
    category: "Games",
    projectImg: jamBox,
    projectDesc:
      "Interactive gaming hub featuring custom animations, responsive game grid cards, and mobile-friendly controls.",
    projectLink: "https://jambox.games/",
    projectRepo: "https://github.com/prodiprajbongshi/jambox",
    featured: false,
    tag: ["HTML5 Canvas", "JavaScript", "CSS3", "Interactive UI", "Gaming"],
  },
  {
    id: 10,
    projectName: "Amar Foods",
    category: "E-Commerce",
    projectImg: amarfoods,
    projectDesc:
      "Online food and restaurant brand landing platform with product menus, customer review showcases, and contact flows.",
    projectLink: "https://amarfoods.com",
    featured: false,
    tag: ["E-Commerce", "HTML5", "Bootstrap", "Food Brand", "Web Design"],
  },
  {
    id: 11,
    projectName: "BD Fex Conference",
    category: "Frontend",
    projectImg: bdFex,
    projectDesc:
      "International conference & summit event landing page with speaker schedule timelines and ticket booking forms.",
    projectLink: "https://prodiprajbongshi.github.io/BDfex/",
    projectRepo: "https://github.com/prodiprajbongshi/BDfex",
    featured: false,
    tag: ["Conference", "HTML5", "CSS3", "Landing Page", "Event UI"],
  },
  {
    id: 12,
    projectName: "Green Bangladesh",
    category: "Frontend",
    projectImg: greenbd,
    projectDesc:
      "Environmental nonprofit organization portal featuring mission highlights, donation calls-to-action, and volunteer forms.",
    projectLink: "https://www.greenbangladesh.org/",
    projectRepo: "https://www.greenbangladesh.org/",
    featured: false,
    tag: ["NGO Portal", "HTML5", "Bootstrap", "Community", "Responsive"],
  },
  {
    id: 13,
    projectName: "Shanin Tour & Travel",
    category: "Frontend",
    projectImg: shaninTour,
    projectDesc:
      "Tourism and destination agency platform featuring holiday packages, travel itineraries, and responsive booking layouts.",
    projectLink: "https://shanin-tour.vercel.app/",
    projectRepo: "https://github.com/prodiprajbongshi/shanin-tour",
    featured: false,
    tag: ["Travel & Tourism", "Bootstrap", "HTML5", "CSS3", "Landing Page"],
  },
  {
    id: 14,
    projectName: "Aladdin Adventure Game",
    category: "Games",
    projectImg: aladdin,
    projectDesc:
      "Interactive nostalgic browser game developed in React with collision detection, score tracking, and custom game sound effects.",
    projectLink: "https://aladdin-game.vercel.app",
    projectRepo: "https://github.com/prodiprajbongshi/aladdinGame",
    featured: false,
    tag: [
      "Browser Game",
      "React",
      "JavaScript",
      "Game Logic",
      "Interactive UI",
    ],
  },
  {
    id: 15,
    projectName: "Happy Lown Store",
    category: "E-Commerce",
    projectImg: happylown,
    projectDesc:
      "Full-fledged WordPress WooCommerce e-commerce site with product catalogue, checkout gateway, and Elementor custom design.",
    projectLink: "https://happylown.com/",
    projectRepo: "https://happylown.com/",
    featured: false,
    tag: ["WordPress", "WooCommerce", "Elementor", "Online Store", "CMS"],
  },
  {
    id: 16,
    projectName: "Banking App UI",
    category: "Frontend",
    projectImg: sass,
    projectDesc:
      "Finance dashboard application featuring account balance analytics, modular SCSS architecture, and transaction history.",
    projectLink: "https://prodiprajbongshi.github.io/BankingApp/",
    projectRepo: "https://github.com/prodiprajbongshi/BankingApp",
    featured: false,
    tag: ["React", "SASS / SCSS", "Fintech", "Dashboard UI", "Frontend"],
  },
  {
    id: 17,
    projectName: "Creative Agency Hub",
    category: "Frontend",
    projectImg: digitalAgency,
    projectDesc:
      "Bold digital design agency website with high-contrast typography, interactive service showcases, and portfolio galleries.",
    projectLink: "https://prodiprajbongshi.github.io/creativeAgency/",
    projectRepo: "https://github.com/prodiprajbongshi/creativeAgency",
    featured: false,
    tag: ["Digital Agency", "HTML5", "CSS3", "Web Design", "Portfolio"],
  },
  {
    id: 18,
    projectName: "Sorbujoya Agriculture",
    category: "Frontend",
    projectImg: sorbojuya,
    projectDesc:
      "Agritech and farming community website designed for high accessibility, farmer support resources, and responsive layout.",
    projectLink: "https://prodiprajbongshi.github.io/Sorbujoya/",
    projectRepo: "https://github.com/prodiprajbongshi/Sorbujoya",
    featured: false,
    tag: ["Agriculture", "Bootstrap", "NGO", "Responsive Design", "UI Design"],
  },
  {
    id: 19,
    projectName: "Tech Illusion BD",
    category: "Frontend",
    projectImg: techillusion,
    projectDesc:
      "Corporate technology enterprise website with comprehensive service matrices, client testimonials, and business contact modules.",
    projectLink: "https://prodiprajbongshi.github.io/techillusionBD/",
    projectRepo: "https://github.com/prodiprajbongshi/techillusionBD",
    featured: false,
    tag: [
      "Corporate IT",
      "Frontend",
      "Business Website",
      "Modern UI",
      "Web Dev",
    ],
  },
];

const categories = [
  "All Projects",
  "Full Stack",
  "React & Next.js",
  "E-Commerce",
  "Frontend",
  "Games",
];

// ─── Browser Frame Component ──────────────────────────────────────────────────
const BrowserFrame = ({ img, alt, className = "" }) => (
  <div
    className={`rounded-xl overflow-hidden border border-white/10 bg-[#0d0d1f] shadow-2xl ${className}`}
  >
    {/* Browser chrome bar */}
    <div className="bg-[#151528] flex items-center justify-between px-3 py-2 border-b border-white/10 select-none">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
      </div>
      <div className="bg-white/5 rounded-md px-3 py-0.5 max-w-[200px] w-full text-center">
        <span className="text-white/40 text-[10px] font-mono tracking-wider truncate block">
          preview.prodip.dev
        </span>
      </div>
      <div className="w-10"></div>
    </div>
    <div className="relative overflow-hidden group/img aspect-video bg-[#0b0c16]">
      <img
        src={img}
        alt={alt}
        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
    </div>
  </div>
);

// ─── Featured Hero Project Card ───────────────────────────────────────────────
const FeaturedProject = ({ project, index }) => {
  const num = String(index + 1).padStart(2, "0");
  return (
    <div className="featured-card group relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 mb-12 hover:border-purple-500/40 transition-all duration-500">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left / Top: Browser Frame Showcase */}
        <div className="lg:col-span-7 relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/20 via-blue-600/10 to-transparent blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
          <BrowserFrame img={project.projectImg} alt={project.projectName} />
        </div>

        {/* Right / Bottom: Project Information */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
          <div>
            <div className="flex items-center justify-between gap-4 mb-3">
              <span className="px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                ⭐ Featured #{num}
              </span>
              <span className="text-xs font-mono text-gray-400">
                {project.category}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
              {project.projectName}
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-3">
              {project.projectDesc}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tag.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/10 hover:border-purple-400/40 hover:text-white transition-colors"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-semibold rounded-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FiExternalLink className="text-base" />
              Live Demo
            </a>
            {project.projectRepo && (
              <a
                href={project.projectRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-gray-200 text-sm font-medium rounded-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <FiGithub className="text-base" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Standard Project Card Component ──────────────────────────────────────────
const ProjectCard = ({ project, index }) => {
  const num = String(index + 1).padStart(2, "0");
  return (
    <div className="project-grid-card group relative flex flex-col justify-between bg-[#111224]/80 hover:bg-[#151730] border border-white/10 hover:border-purple-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-purple-950/30">
      {/* Top Media Preview */}
      <div>
        <div className="relative overflow-hidden aspect-video bg-[#0b0c16] border-b border-white/10">
          <img
            src={project.projectImg}
            alt={project.projectName}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111224] via-transparent to-black/30 opacity-60 group-hover:opacity-30 transition-opacity"></div>

          {/* Top badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="px-2.5 py-1 text-[11px] font-mono font-bold bg-black/70 backdrop-blur-md border border-white/15 text-purple-300 rounded-full">
              #{num}
            </span>
            <span className="px-2.5 py-1 text-[11px] font-medium bg-black/70 backdrop-blur-md border border-white/15 text-gray-300 rounded-full">
              {project.category}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 sm:p-6 space-y-3">
          <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
            {project.projectName}
          </h4>

          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
            {project.projectDesc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tag.slice(0, 4).map((t, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-[11px] rounded bg-white/5 text-gray-300 border border-white/10 group-hover:border-purple-500/20"
              >
                {t}
              </span>
            ))}
            {project.tag.length > 4 && (
              <span className="px-1.5 py-0.5 text-[10px] text-gray-400 font-mono">
                +{project.tag.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-5 sm:p-6 pt-0 border-t border-white/5 flex items-center justify-between gap-3 mt-4">
        <a
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors py-1"
        >
          <FiGlobe className="text-sm" />
          Live Demo
          <span className="group-hover:translate-x-0.5 transition-transform">
            →
          </span>
        </a>

        {project.projectRepo ? (
          <a
            href={project.projectRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors py-1"
          >
            <FiGithub className="text-sm" />
            GitHub
          </a>
        ) : (
          <span className="text-[11px] text-gray-500 font-mono">
            Commercial / Client
          </span>
        )}
      </div>
    </div>
  );
};

// ─── Main Work Component ──────────────────────────────────────────────────────
const Work = () => {
  const sectionRef = useRef(null);
  let timeLine = gsap.timeline();

  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const featuredList = useMemo(() => projects.filter((p) => p.featured), []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All Projects") {
      return projects.filter((p) => !p.featured);
    }
    return projects.filter(
      (p) =>
        !p.featured &&
        (p.category === selectedCategory ||
          p.tag.some((t) =>
            t.toLowerCase().includes(selectedCategory.toLowerCase()),
          )),
    );
  }, [selectedCategory]);

  const sectionHeader = useRef();
  const featuredSection = useRef(null);
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

    const cards = featuredSection.current.querySelectorAll(
      ".featured-project-card",
    );

    gsap.from(
      cards,
      {
        y: 120,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        
        scrollTrigger: {
          trigger: featuredSection.current,
          start: "top 80%",
          end: "top 40%",
          marker : true,
          scrub: 1.2,
        },
      },
    );
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a1a] relative overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Section Header ── */}
        <div className="mb-16 lg:mb-20 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4">
            <FiLayers className="text-sm" />
            <span>02 / Selected Works</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="  mb-16  ">
                <div className="inline-flex     ">
                  <h2 ref={sectionHeader} className="overflow-hidden">
                    <span className="inline-block text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">
                      P
                    </span>
                    <span className="inline-block text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">
                      R
                    </span>
                    <span className="inline-block text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">
                      O
                    </span>
                    <span className="inline-block text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">
                      J
                    </span>
                    <span className="inline-block text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">
                      E
                    </span>
                    <span className="inline-block text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">
                      C
                    </span>
                    <span className="inline-block text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">
                      T
                    </span>
                    <span className="inline-block text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">
                      S
                    </span>
                  </h2>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base max-w-xl mt-3 leading-relaxed">
                Explore a showcase of production web applications, full-stack
                systems, creative UI experiments, and real-world client
                platforms.
              </p>
            </div>

            <div className="text-center sm:text-right">
              <span className="text-xs font-mono text-gray-400">
                Total Showcase:
              </span>
              <p className="text-2xl font-bold text-white font-mono">
                {projects.length} Projects
              </p>
            </div>
          </div>
        </div>

        {/* ── 01. Flagship Featured Projects ── */}
        <div  ref={featuredSection} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse"></div>
            <h3 className="text-sm font-mono font-bold tracking-widest text-purple-300 uppercase">
              Featured Flagships
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent"></div>
          </div>

          {featuredList.map((project, idx) => (
            <FeaturedProject key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* ── 02. More Projects Header + Filter Tabs ── */}
        <div className="pt-6 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  More Projects & Experiments
                </h3>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm mt-1">
                Showing {filteredProjects.length} projects across frontend,
                backend, and full-stack development
              </p>
            </div>

            {/* Filter Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs rounded-lg font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md shadow-purple-600/30 border border-purple-400/40"
                        : "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── 03. All Projects Grid ── */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {filteredProjects.map((p, idx) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={idx + featuredList.length}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/[0.02] border border-white/10 rounded-2xl mb-20">
            <p className="text-gray-400">No projects found in this category.</p>
            <button
              onClick={() => setSelectedCategory("All Projects")}
              className="mt-3 px-4 py-2 bg-purple-600 text-white text-xs rounded-lg hover:bg-purple-500"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* ── 04. GitHub Bottom CTA ── */}
        <div className="mt-16 text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 border border-white/10">
            <a
              href="https://github.com/prodiprajbongshi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#121324] hover:bg-[#1a1c36] text-white rounded-xl font-medium transition-all duration-300 group shadow-lg"
            >
              <FiGithub className="text-xl text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
              <span>Explore All Repositories on GitHub</span>
              <span className="text-purple-400 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
