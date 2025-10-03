import React from "react";
import { animate, motion } from "framer-motion";

const Companies = () => {
  const companies = [
    // Langages
    "C",
    "C#",
    "Java",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Python",

    // Front-end
    "HTML",
    "CSS",
    "Tailwind CSS",
    "React",
    "Angular",
    "Vue",

    // Back-end
    "Node.js",
    "Spring Boot",
    ".NET",
    "Django",
    "Laravel",

    // Mobile
    "React Native",
    "Flutter",

    // Cloud & CI/CD
    "AWS",
    "Microsoft Azure",
    "GitHub Actions",
    "GitLab CI/CD",
    "Jenkins",

    // Conteneurs & Outils
    "Docker",
    "Git",
    "Maven",
    "SonarQube",

    // Design / UI
    "Figma",
    "Canva",
    "Adobe Illustrator",
    "Adobe Photoshop",
  ];

  const companiesList = [...companies, ...companies];

  const scrollVariant1 = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    },
  };

  const scrollVariant2 = {
    animate: {
      x: [-2000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    },
  };
  return (
    <div className="text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Technologies I've Worked With
        </h2>
        <div className="overflow-hidden relative w-full">
          <motion.div
            variants={scrollVariant1}
            animate="animate"
            className="whitespace-nowrap flex space-x-10"
          >
            {companiesList.map((company, index) => (
              <motion.div
                className="text-lg bg-gray-800 px-6 py-3 rounded-full inline-block"
                key={index}
              >
                {company}
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="overflow-hidden relative w-full mt-5">
          <motion.div
            variants={scrollVariant2}
            animate="animate"
            className="whitespace-nowrap flex space-x-10"
          >
            {companiesList.map((company, index) => (
              <motion.div
                className="text-lg bg-gray-800 px-6 py-3 rounded-full inline-block"
                key={index}
              >
                {company}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
