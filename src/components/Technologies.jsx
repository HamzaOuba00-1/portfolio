import { motion } from "framer-motion"

const Companies = () => {
  const technologies = [
    "C", "C#", "Java", "JavaScript", "TypeScript", "PHP", "Python", "SQL",

    "HTML", "CSS", "Tailwind CSS", "React", "Angular", "Vue",

    "Node.js", "Spring Boot", ".NET", "Laravel",

    "React Native",

    "GitHub Actions", "GitLab CI/CD",

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
    <div id="companies" className="pt-12 pb-0">
      <div className="text-white py-4">
        <div className="container mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl underline font-bold mb-8"
          >
            Technologies I’ve Worked With
          </motion.h2>

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
    </div>
  )
}

export default Companies
