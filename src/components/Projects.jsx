import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import project1 from "../assets/projects/7.png";
import project2 from "../assets/projects/5.png";
import project3 from "../assets/projects/1.png";
import project4 from "../assets/projects/4.png";
import project5 from "../assets/projects/3.png";
import project6 from "../assets/projects/6.png";
import project7 from "../assets/projects/2.png";
import project8 from "../assets/projects/8.png";
import project9 from "../assets/projects/9.png";
import project10 from "../assets/projects/10.png";

const INITIAL_VISIBLE = 9;
const LOAD_MORE_STEP = 6;

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const projects = useMemo(
    () => [

      {
        id: 10,
        title: "Perfuma — Smart Fragrance Composition App",
        shortDescription:
          "Full-stack app that automatically generates balanced perfume formulas with professional PDF export.",
        image: project10,
        videoUrl: "https://www.youtube.com/embed/EwiQrWufMAE",
        githubLink: "https://github.com/HamzaOuba00-1/perfume-generator",
        descriptionLines: [
          "Automatic perfume formula generation based on real fragrance composition rules",
          "Guided essential oil selection following the olfactory pyramid structure",
          "Premium PDF recipe sheet generation with dilution tables",
          "Admin dashboard for CRUD management of essential oils with secure authentication",
          "Clean full-stack architecture with Spring Boot backend and Angular frontend",
        ],
        stack: ["Spring Boot", "Java", "Angular", "Docker"],
      },

      
      {
        id: 9,
        title: "HotelFlow — Hotel Management & Booking Platform",
        shortDescription:
          "Full-stack hotel management and online booking platform with role-based access.",
        image: project9,
        videoUrl: "https://www.youtube.com/embed/beIzHXRxwyo",
        githubLink: "https://github.com/HamzaOuba00-1/hotelmanager",
        descriptionLines: [
          "HotelFlow is a modern full-stack web application designed for hotel management and online booking",
          "Multi-role platform: Visitor, Manager, Employee, and Client",
          "Providing secure and user-friendly public booking interface",
          "Hotel & room management, reservations, planning, attendance, and internal messaging",
          "JWT-based authentication with role-based authorization",
        ],
        stack: ["Java Spring Boot", "React", "PostgreSQL"],
      },
      
      {
        id: 8,
        title: "7zz Gym — Exercise Discovery & Fitness Platform",
        shortDescription:
          "Interactive fitness web app for discovering gym exercises with muscle info and video tutorials.",
        image: project2,
        videoUrl: "https://www.youtube.com/embed/fNZ7gIKB8RA",
        githubLink: "https://github.com/HamzaOuba00-1/gym-exercises",
        descriptionLines: [
          "Exercise catalog with muscle, equipment, and name-based filtering",
          "Integration of ExerciseDB API and YouTube API for tutorials",
          "Secure API handling with environment variables and input sanitization",
        ],
        stack: ["React", "JavaScript", "REST APIs", "Tailwind CSS"],
      },
      
      {
        id: 7,
        title: "VisiGen — AI Image Generation Platform",
        shortDescription:
          "Creative web app that generates AI images from text prompts using OpenAI.",
        image: project4,
        videoUrl: "https://www.youtube.com/embed/5eT4PGPx3kU",
        githubLink: "https://github.com/HamzaOuba00-1/img-gene",
        descriptionLines: [
          "Text-to-image generation using OpenAI image models",
          "Prompt history with image preview and download support",
          "Secure API usage with environment variables and input validation",
        ],
        stack: ["React", "JavaScript", "OpenAI API"],
      },
      {
        id: 6,
        title: "Internship Demo : E-commerce Platform",
        shortDescription:
          "Modern e-commerce platform with a full admin dashboard and secure shopping experience.",
        image: project1,
        videoUrl: "https://www.youtube.com/embed/JJYNM-GPZaU",
        githubLink: "https://github.com/HamzaOuba00-1",
        descriptionLines: [
          "Complete furniture e-commerce experience with wishlist and order tracking",
          "Admin dashboard for brands, categories, products, orders, users, and coupons",
          "Secure authentication, role-based access control, and input validation",
        ],
        stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "HTML5", "CSS3"],
      },
      {
        id: 5,
        title: "Time2bUS — Smart Transport Reminder App",
        shortDescription:
          "Intelligent mobile app that helps users catch buses and trains on time using location and smart reminders.",
        image: project3,
        videoUrl: "https://www.youtube.com/embed/SsKLWGjl9ts",
        githubLink: "https://github.com/HamzaOuba00-1/time2bus",
        descriptionLines: [
          "Smart notifications based on schedule and distance to transit stop",
          "Manual schedule input or AI-powered timetable scanning (OCR)",
          "Geolocation and Google Maps integration for precise departure timing",
        ],
        stack: ["React Native", "TypeScript", "Node.js"],
      },
      {
        id: 4,
        title: "Aladdin’s Flight — Arcade Web Game",
        shortDescription:
          "Fast-paced browser arcade game with simple controls and increasing difficulty.",
        image: project5,
        videoUrl: "https://www.youtube.com/embed/VgVPDWNedHY",
        githubLink: "https://github.com/HamzaOuba00-1/aladdin",
        descriptionLines: [
          "Simple one-touch gameplay using keyboard arrow controls",
          "Real-time obstacle generation and collision detection",
          "Score tracking with progressively increasing difficulty",
        ],
        stack: ["React", "CSS Animations", "Tailwind CSS"],
      },
      {
        id: 3,
        title: "Human For You — AI-Powered HR Analytics Platform",
        shortDescription:
          "AI-driven platform for predicting employee attrition and supporting HR decision-making.",
        image: project6,
        videoUrl: "https://www.youtube.com/embed/k6UBYujqfe8",
        githubLink: "https://github.com/HamzaOuba00-1",
        descriptionLines: [
          "Employee attrition prediction using machine learning models",
          "Explainable AI with interpretable indicators for each prediction",
          "Decision-support tool for HR professionals and managers",
        ],
        stack: ["Python", "Machine Learning", "React"],
      },
      {
        id: 2,
        title: "CO₂ Calculator — Personal Carbon Footprint Estimator",
        shortDescription:
          "Interactive web app that estimates personal carbon footprint and suggests sustainable actions.",
        image: project7,
        videoUrl: "https://www.youtube.com/embed/KH2f9_I-jzk",
        githubLink: "https://github.com/HamzaOuba00-1/co2-calculator",
        descriptionLines: [
          "Interactive lifestyle questionnaire with real-time CO₂ estimation",
          "Carbon footprint calculation based on daily habits and choices",
          "Personalized recommendations to reduce environmental impact",
        ],
        stack: ["React", "JavaScript", "Tailwind CSS"],
      },
      {
        id: 1,
        title: "TaskPilot — Task & Productivity Manager",
        shortDescription:
          "Modern task management web app focused on productivity and simplicity.",
        image: project8,
        videoUrl: "https://www.youtube.com/embed/MwCP3Gwdb98",
        githubLink: "https://github.com/HamzaOuba00-1/Task-Pilot",
        descriptionLines: [
          "Task creation with priorities, deadlines, and status tracking",
          "Productivity-focused workflow with filters and categorization",
          "Clean, minimal, and fully responsive user interface",
        ],
        stack: ["React", "Tailwind CSS"],
      },
    ],
    [],
  );

  const visibleProjects = useMemo(
    () => projects.slice(0, visibleCount),
    [projects, visibleCount],
  );

  const canLoadMore = visibleCount < projects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_STEP, projects.length));
  };



  return (
    <div id="work" className="pt-16 pb-4 bg-[#0e0c1e]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl text-white underline font-bold mb-6"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mb-12 text-gray-400"
        >
          A visual tour through my most exciting work.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
              className="bg-[#1c1a2b] rounded-lg overflow-hidden shadow-lg 
                         hover:shadow-lg hover:shadow-purple-500
                         transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl text-white font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">
                  {project.shortDescription}
                </p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition"
                >
                  Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {projects.length > INITIAL_VISIBLE && canLoadMore && (
            <motion.div
              className="mt-10 flex justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={handleLoadMore}
                className="
                  group relative overflow-hidden
                  rounded-full
                  border border-purple-500/70
                  bg-white/5
                  px-7 py-3
                  text-sm font-semibold text-white
                  backdrop-blur-xl
                  shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                  transition
                  hover:border-purple-400
                  hover:bg-white/10
                  focus:outline-none
                  focus:ring-2 focus:ring-purple-500/60
                  focus:ring-offset-0
                "
              >
                <span
                  className="
                    pointer-events-none absolute -inset-x-10 -inset-y-8
                    translate-x-[-60%] rotate-12
                    bg-gradient-to-r from-transparent via-white/10 to-transparent
                    opacity-0
                    transition duration-500
                    group-hover:translate-x-[60%]
                    group-hover:opacity-100
                  "
                />
                Load more
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="
                w-full max-w-5xl
                max-h-[95vh]
                rounded-2xl
                border border-white/10
                bg-[#0b0820]
                shadow-2xl
                flex flex-col
              "
            >
              <div className="flex items-start justify-between px-8 pt-7 shrink-0">
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  {selectedProject.title}
                </h2>

                <button
                  aria-label="Close"
                  className="text-white/70 hover:text-white text-2xl leading-none"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </button>
              </div>

              {/* Body */}
              <div className="px-8 pb-8 pt-5 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                <div className="w-3/4 mx-auto h-auto rounded-2xl bg-white/5 p-4 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_25px_80px_rgba(0,0,0,0.55)]">
                  <div className="aspect-video overflow-hidden rounded-xl bg-black/40">
                    <iframe
                      className="w-full h-full"
                      src={selectedProject.videoUrl}
                      title="Project demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-white font-semibold">Description</h3>

                  {(() => {
                    const lines =
                      selectedProject.descriptionLines ??
                      selectedProject.longDescription
                        ?.split(".")
                        .map((s) => s.trim())
                        .filter(Boolean)
                        .slice(0, 6) ??
                      [];

                    return (
                      <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-slate-300">
                        {lines.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    );
                  })()}
                </div>

                {selectedProject.stack?.length ? (
                  <div className="mt-6">
                    <h3 className="text-white font-semibold">Stack</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="mt-7">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline underline-offset-4 hover:text-purple-300"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Work;
