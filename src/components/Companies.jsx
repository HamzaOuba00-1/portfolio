import { motion } from "framer-motion"

const Companies = () => {
  const technologies = [
    // Languages
    "C", "C#", "Java", "JavaScript", "TypeScript", "PHP", "Python", "SQL",

    // Front-end
    "HTML", "CSS", "Tailwind CSS", "React", "Angular", "Vue",

    // Back-end
    "Node.js", "Spring Boot", ".NET", "Laravel",

    // Mobile
    "React Native",

    // Cloud & CI/CD
    "GitHub Actions", "GitLab CI/CD",

    // Tools & Design
    "Docker", "Git", "Maven",
    "Figma", "Canva", "Illustrator", "Photoshop",
  ]

  const list = [...technologies, ...technologies]

  const marqueeLeft = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 12, 
          ease: "linear",
        },
      },
    },
  }

  const marqueeRight = {
    animate: {
      x: ["-100%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 12,
          ease: "linear",
        },
      },
    },
  }

  return (
    <div className="text-white py-16">
      <div className="container mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Technologies I’ve Worked With
        </motion.h2>

        {/* Row 1 */}
        <div className="overflow-hidden w-full">
          <motion.div
            variants={marqueeLeft}
            animate="animate"
            className="flex whitespace-nowrap gap-6"
          >
            {list.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800 px-6 py-3 rounded-full text-sm md:text-base"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden w-full mt-6">
          <motion.div
            variants={marqueeRight}
            animate="animate"
            className="flex whitespace-nowrap gap-6"
          >
            {list.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800 px-6 py-3 rounded-full text-sm md:text-base"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Companies
