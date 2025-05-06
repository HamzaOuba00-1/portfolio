import React, { useState } from "react";
import project1 from "../assets/7.png";
import project2 from "../assets/5.png";
import project3 from "../assets/1.png";
import project4 from "../assets/4.png";
import project5 from "../assets/3.png";
import project6 from "../assets/6.png";
import project7 from "../assets/2.png";
import project8 from "../assets/8.png";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Companies from "./Companies";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform ",
      shortDescription: "Azalidor is a modern furniture e-commerce site with user shopping and admin management features.",
      longDescription: `Azalidor is a modern e-commerce web platform specializing in furniture sales, offering a complete and secure shopping experience for customers alongside a powerful admin dashboard for business management. The admin panel enables brand, category, product, coupon, user, and order management, as well as a message center for customer inquiries. On the user side, the platform features intuitive product browsing, wishlists, real-time order tracking, direct customer support access, and a secure checkout process. Built with robust security in mind, Azalidor integrates role-based access control, input validation, encrypted user authentication, and secure session handling, ensuring a reliable and professional environment for both administrators and shoppers.`,
      image: project1,
      videoUrl: "https://www.youtube.com/embed/JJYNM-GPZaU",
      githubLink: "https://github.com/HamzaOuba00-1/Azalidor-shop",
    },
    {
      id: 2,
      title: "7zz Gym",
      shortDescription: "7zz Gym is a web app that offers gym exercises with muscle info, equipment, and tutorial videos using fitness and video APIs",
      longDescription: `7zz Gym is a modern web application that helps users discover, learn, and perform gym exercises through a rich and intuitive interface. By integrating the ExerciseDB API and the YouTube Search & Download API, the platform provides detailed information about each exercise—including target muscles, equipment used, and visual demonstrations—along with tutorial videos and related workout suggestions based on muscle group or equipment type.`,
      image: project2,
      videoUrl: "https://www.youtube.com/embed/fNZ7gIKB8RA",
      githubLink: "https://github.com/HamzaOuba00-1/gym-exercises",
    },
    {
      id: 3,
      title: "Time2Bus",
      shortDescription: "Time2Bus is a mobile app that sends smart, location-based reminders to help users catch their bus or train on time",
      longDescription: `Time2Bus is a smart mobile app that helps users catch their bus or train on time by sending location-based reminders. It uses manual or AI-powered schedule input and calculates the distance to the transit stop to notify users exactly when to leave for a smooth and timely commute.`,
      image: project3,
      videoUrl: "https://www.youtube.com/embed/SsKLWGjl9ts",
      githubLink: "https://github.com/HamzaOuba00-1/time2bus",
    },
    {
      id: 4,
      title: "VisiGen",
      shortDescription: "VisiGen is a web app that generates images from text prompts using OpenAI’s image generation API",
      longDescription: `VisiGen is a web application that uses OpenAI's image generation API to create unique visuals from user-written text prompts. Designed for simplicity and creativity, the platform lets users type a description and instantly receive an AI-generated image, making it easy to bring ideas to life without any graphic design skills.`,
      image: project4,
      videoUrl: "https://www.youtube.com/embed/5eT4PGPx3kU",
      githubLink: "https://github.com/HamzaOuba00-1/img-gene",
    },
    {
      id: 5,
      title: "Aladdin's Flight",
      shortDescription: "Aladdin's Flight is a web game where players control Aladdin to dodge falling stones.",
      longDescription: `Aladdin's Flight is a fast-paced web game where players guide Aladdin on his magic carpet, dodging falling stones using only the up and down arrow keys. With simple controls and an increasing level of difficulty, the game offers a fun and challenging experience that tests the player's reflexes and timing in a magical flying adventure.`,
      image: project5,
      videoUrl: "https://www.youtube.com/embed/VgVPDWNedHY",
      githubLink: "https://github.com/HamzaOuba00-1/aladdin",
    },
    {
      id: 6,
      title: "Human For You",
      shortDescription: "Human For You is an AI-driven HR platform that predicts employee attrition and delivers personalized, explainable retention strategies.",
      longDescription: `Human For You is an AI-powered HR platform that predicts employee attrition risk using a machine learning model and provides clear, actionable retention strategies. By analyzing individual employee data and explaining the key factors behind each prediction with tools like SHAP, it helps HR professionals understand the causes of potential turnover and take personalized steps to reduce it effectively.`,
      image: project6,
      videoUrl: "https://www.youtube.com/embed/k6UBYujqfe8",
      githubLink: "https://github.com/HamzaOuba00-1",
    },
    {
      id: 7,
      title: "CO2 Calculator",
      shortDescription: "A web app that estimates daily carbon emissions through a lifestyle quiz and offers personalized tips to reduce the impact.",
      longDescription: `CO2 Calculator is an interactive web application that estimates a user's daily carbon emissions based on answers to multiple-choice questions about their lifestyle. By calculating the total CO₂ output from habits like transport, energy use, and consumption, the app provides a personalized impact score and tailored advice to help users reduce their environmental footprint in meaningful ways.`,
      image: project7,
      videoUrl: "https://www.youtube.com/embed/KH2f9_I-jzk",
      githubLink: "https://github.com/HamzaOuba00-1/co2-calculator",
    },
    {
      id: 8,
      title: "TaskPilot",
      shortDescription: "TaskPilot is a web app that helps users create, organize, and track tasks to boost productivity and manage daily workflows.",
      longDescription: `TaskPilot is a web-based task management application that helps users organize and prioritize their daily activities with ease. Through a clean and intuitive interface, users can create tasks, set deadlines, assign priorities, and update statuses to stay focused and productive. Whether for personal use or team planning, the app simplifies task tracking and supports better time and workflow management.`,
      image: project8,
      videoUrl: "https://www.youtube.com/embed/MwCP3Gwdb98",
      githubLink: "https://github.com/HamzaOuba00-1/Task-Pilot",
    },
  ];

  // InView séparés
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0 });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0 });
  const { ref: companiesRef, inView: companiesInView } = useInView({ triggerOnce: true, threshold: 0 });

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="work" className="py-12 bg-[#0e0c1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITRE */}
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: 100 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl text-white underline font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        {/* TEXTE INTRO */}
        <motion.p
          ref={textRef}
          initial={{ opacity: 0, y: 100 }}
          animate={textInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-12 text-gray-400 text-center"
        >
          A visual tour through my most exciting work.
        </motion.p>

        {/* PROJETS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const ref = React.createRef();
            const inView = useInView({ triggerOnce: true, threshold: 0.5 });
            return (
              <motion.div
                key={project.id}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-gray-900 shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.shortDescription}</p>
                  <button
                    onClick={() => openModal(project)}
                    className="border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition"
                  >
                    Details
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* COMPANIES */}
      <motion.div
        ref={companiesRef}
        initial={{ opacity: 0, y: 100 }}
        animate={companiesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Companies />
      </motion.div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#0e0c1e] text-white rounded-lg w-11/12 sm:w-3/4 md:w-1/2 max-h-[90vh] overflow-auto p-8 myCustomScroll"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-2xl font-bold hover:text-pink-400"
            >
              x
            </button>

            <h2 className="text-2xl font-bold mb-6">{selectedProject.title}</h2>

            <div className="mb-6 rounded-lg overflow-hidden w-full aspect-video">
              <iframe
                className="w-full h-full"
                src={selectedProject.videoUrl}
                title="Project demo video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-slate-300 mb-6">{selectedProject.longDescription}</p>

            <a
              href={selectedProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 border-b border-purple-500 hover:text-purple-300"
            >
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;

