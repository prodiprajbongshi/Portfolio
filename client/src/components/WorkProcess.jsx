import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Research & Strategy",
    desc: "Understand the project's goals, target users, business requirements, and technical constraints. Deep-diving into the problem before touching a single line of code.",
    keywords: ["User Research", "Requirements", "Goals", "Stakeholders"],
    accentColor: "from-purple-500 to-violet-500",
    glowColor: "rgba(139, 92, 246, 0.15)",
    dotColor: "#8b5cf6",
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Engineering & Build",
    desc: "Create intentional wireframes, a cohesive visual system, clear typography hierarchy, color palette, and interaction direction, then build the product using modern technologies like React, Next.js, Typescript, GSAP, and Tailwind CSS with clean, maintainable, and scalable architecture.",
    keywords: [
      "Wireframes",
      "Frontend Development",
      "UI Design",
      "Responsive Website",
      "Modern Interface",
      "Interactive Experience",
      "Color Palette",
    ],
    accentColor: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.15)",
    dotColor: "#3b82f6",
  },
  {
    number: "03",
    title: "Develop",
    subtitle: "MERN-Powered Backend Development",
    desc: "Build a secure and scalable portfolio backend using the MERN stack, with Node.js, Express.js, MongoDB and PostgreSQL powering APIs, data management, authentication, and seamless frontend communication.",
    keywords: [
  "Backend Development",
  "API Development",
  "Server-Side Development",
  "Database Management",
  "System Architecture",
  "Data Management",
  "Business Logic",
  "Scalable Systems",
  "Secure Applications",
  "Performance Optimization",
  "Cloud Integration"
],
    accentColor: "from-teal-500 to-green-500",
    glowColor: "rgba(20, 184, 166, 0.15)",
    dotColor: "#14b8a6",
  },
  {
    number: "04",
    title: "Refine",
    subtitle: "Polish & Optimize",
    desc: "Optimize performance, responsiveness, and accessibility. Fine-tune animations, fix edge cases, and ensure the product works flawlessly across all devices.",
    keywords: ["Performance", "Accessibility", "Responsive", "Animation"],
    accentColor: "from-amber-500 to-orange-500",
    glowColor: "rgba(245, 158, 11, 0.15)",
    dotColor: "#f59e0b",
  },
  {
    number: "05",
    title: "Launch",
    subtitle: "Deploy & Deliver",
    desc: "Deploy to production with CI/CD pipelines, configure hosting and domains, and hand over a fully-tested, production-ready product with documentation.",
    keywords: ["CI/CD", "VPS", "Vercel", "DNS", "Testing", "Delivery"],
    accentColor: "from-pink-500 to-rose-500",
    glowColor: "rgba(236, 72, 153, 0.15)",
    dotColor: "#ec4899",
  },
  {
    number: "06",
    title: "Support",
    subtitle: "Maintain & Evolve",
    desc: "Ongoing monitoring, feature iterations, performance improvements, and continuous support to ensure long-term stability and growth.",
    keywords: ["Monitoring", "Iterations", "Support", "Growth"],
    accentColor: "from-indigo-500 to-purple-500",
    glowColor: "rgba(99, 102, 241, 0.15)",
    dotColor: "#6366f1",
  },
];

const WorkProcess = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const stepsRef = useRef([]);
  const progressLineRef = useRef(null);
  const progressFillRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // ── Heading reveal
    gsap.from(headingRef.current.querySelectorAll(".process-letter"), {
      y: 60,
      opacity: 0,
      duration: 0.6,
      stagger: 0.07,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(subtitleRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.7,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 65%",
        toggleActions: "play none none reverse",
      },
    });

    // ── Progress line draw animation
    if (progressFillRef.current) {
      gsap.fromTo(
        progressFillRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1.5,
          },
        },
      );
    }

    // ── Each step reveal + active state
    // stepsRef.current.forEach((el, idx) => {
    //   if (!el) return;

    //   const numEl = el.querySelector(".step-number");
    //   const titleEl = el.querySelector(".step-title");
    //   const descEl = el.querySelector(".step-desc");
    //   const keywordsEl = el.querySelector(".step-keywords");
    //   const dotEl = dotsRef.current[idx];

    //   // Reveal animation
    //   if (!prefersReducedMotion) {
    //     const tl = gsap.timeline({
    //       scrollTrigger: {
    //         trigger: el,
    //         start: "top 75%",
    //         end: "top 45%",
    //         toggleActions: "play reverse play reverse",
    //       },
    //     });

    //     tl.from(numEl, { x: -30, opacity: 0, duration: 0.5, ease: "power3.out" })
    //       .from(titleEl, { y: 20, opacity: 0, duration: 0.4, ease: "power2.out" }, "-=0.2")
    //       .from(descEl, { y: 15, opacity: 0, duration: 0.4, ease: "power2.out" }, "-=0.2")
    //       .from(keywordsEl?.children ? Array.from(keywordsEl.children) : [], {
    //         y: 10,
    //         opacity: 0,
    //         duration: 0.3,
    //         stagger: 0.05,
    //         ease: "power2.out",
    //       }, "-=0.1");
    //   }

    //   // Active state on scroll
    //   ScrollTrigger.create({
    //     trigger: el,
    //     start: "top 30%",
    //     end: "bottom 0%",
    //     markers:true,
    //     onEnter: () => {
    //       el.classList.add("step-active");
    //       if (dotEl) {
    //         gsap.to(dotEl, { scale: 1.5, duration: 0.3, ease: "back.out" });
    //       }
    //     },
    //     onLeave: () => {
    //       el.classList.remove("step-active");
    //       if (dotEl) {
    //         gsap.to(dotEl, { scale: 1, duration: 0.3, ease: "power2.out" });
    //       }
    //     },
    //     onEnterBack: () => {
    //       el.classList.add("step-active");
    //       if (dotEl) {
    //         gsap.to(dotEl, { scale: 1.5, duration: 0.3, ease: "back.out" });
    //       }
    //     },
    //     onLeaveBack: () => {
    //       el.classList.remove("step-active");
    //       if (dotEl) {
    //         gsap.to(dotEl, { scale: 1, duration: 0.3, ease: "power2.out" });
    //       }
    //     },
    //   });
    // });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* ── Section Header ── */}
        <div className="mb-20 lg:mb-28">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-purple-400">
              03 / How I Work
            </span>
            <div className="h-px flex-1 max-w-16 bg-purple-500/40"></div>
          </div>
          <h2 ref={headingRef} className="overflow-hidden mb-4">
            {["P", "R", "O", "C", "E", "S", "S"].map((l, i) => (
              <span
                key={i}
                className="process-letter inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight"
              >
                {l}
              </span>
            ))}
          </h2>
          <p
            ref={subtitleRef}
            className="text-gray-500 text-sm sm:text-base max-w-md"
          >
            Every project follows a structured approach — from initial discovery
            to final delivery — ensuring consistent quality and clear
            communication.
          </p>
        </div>

        {/* ── Steps ── */}
        <div className="relative">
          {/* Vertical progress line */}
          <div
            ref={progressLineRef}
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-white/6"
            aria-hidden="true"
          >
            <div
              ref={progressFillRef}
              className="absolute inset-0 bg-gradient-to-b from-purple-500 via-blue-500 to-indigo-500"
              style={{ transformOrigin: "top center" }}
            ></div>
          </div>

          {/* Steps list */}
          <div className="space-y-0">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                ref={(el) => (stepsRef.current[idx] = el)}
                className="process-step relative pl-16 md:pl-20 pb-16 last:pb-0 transition-all duration-500"
                style={{ "--glow-color": step.glowColor }}
              >
                {/* Timeline dot */}
                <div
                  ref={(el) => (dotsRef.current[idx] = el)}
                  className="absolute left-4 md:left-6 top-1.5 w-5 h-5 rounded-full border-2 border-white/20 bg-[#0a0a1a] z-10 transition-all duration-300"
                  style={{
                    background: `radial-gradient(circle, ${step.dotColor}40 0%, #0a0a1a 70%)`,
                    borderColor: `${step.dotColor}60`,
                    boxShadow: `0 0 0 0px ${step.dotColor}40`,
                  }}
                  aria-hidden="true"
                ></div>

                {/* Step content */}
                <div className="relative group">
                  {/* Glow on active */}
                  <div
                    className="absolute -inset-4 rounded-2xl opacity-0 step-glow transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(ellipse at 0% 50%, ${step.glowColor}, transparent 70%)`,
                    }}
                    aria-hidden="true"
                  ></div>

                  <div className="relative">
                    {/* Step number + subtitle row */}
                    <div className="flex items-baseline gap-4 mb-3">
                      <span
                        className="step-number font-mono font-bold text-4xl md:text-5xl text-white/10 step-num-text transition-all duration-500 leading-none"
                        aria-label={`Step ${step.number}`}
                      >
                        {step.number}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-widest text-white/20 step-subtitle-text transition-colors duration-500">
                        {step.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className={`step-title text-2xl md:text-3xl font-bold mb-3 text-white/70 step-title-text transition-all duration-500 bg-gradient-to-r ${step.accentColor} bg-clip-text`}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="step-desc text-gray-500 text-sm md:text-base leading-relaxed mb-5 max-w-xl step-desc-text transition-colors duration-500">
                      {step.desc}
                    </p>

                    {/* Keywords */}
                    <div className="step-keywords flex flex-wrap gap-2">
                      {step.keywords.map((kw, ki) => (
                        <span
                          key={ki}
                          className="px-3 py-1 text-xs rounded-full border transition-colors duration-300 step-keyword"
                          style={{
                            backgroundColor: `${step.dotColor}10`,
                            borderColor: `${step.dotColor}25`,
                            color: `${step.dotColor}cc`,
                          }}
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-20 pt-12 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-lg mb-1">
              Ready to start a project?
            </p>
            <p className="text-gray-500 text-sm">
              Let's discuss your idea and bring it to life.
            </p>
          </div>
          <a
            href="#contact"
            aria-label="Get in touch to start a project"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Let's Work Together
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Step active CSS */}
      <style>{`
        .process-step.step-active .step-num-text {
          color: rgba(255, 255, 255, 0.7);
        }
        .process-step.step-active .step-subtitle-text {
          color: rgba(255, 255, 255, 0.4);
        }
        .process-step.step-active .step-title-text {
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        .process-step.step-active .step-desc-text {
          color: rgb(209, 213, 219);
        }
        .process-step.step-active .step-glow {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default WorkProcess;
