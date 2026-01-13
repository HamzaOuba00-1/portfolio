import { motion } from 'framer-motion'
import { FaCode, FaPalette } from 'react-icons/fa'
import { LuBrainCircuit } from "react-icons/lu";


const Services = () => {

  const servicesData = [
    {
      title: "Software Engineering",
      icon: FaCode,
      description:
        "Turning ideas into impactful software is my passion. I enjoy exploring different tech stacks, building dynamic interfaces, and crafting elegant solutions to real-world problems.",
    },
    {
      title: "Artificial Intelligence",
      icon: LuBrainCircuit,
      description:
        "I am interested in the AI field and have gained my first academic experience through coursework and projects, and I enjoy exploring how it can complement software applications.",
    },
    {
      title: "Graphic Design",
      icon: FaPalette,
      description:
        "Before focusing on technical implementation, I enjoy expressing ideas through visual design, working with colors, typography, and composition to create clear and appealing visuals.",
    },
  ]

  return (
    <div id="services" className="text-white py-16">
      <div className="container mx-auto px-4 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold underline mb-6"
        >
          Where I’m At
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mb-12 text-gray-400"
        >
          Here’s a sneak peek into the stuff that keeps me up at night.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + index * 0.1,
                }}
                className="bg-[#1c1a2b] p-8 rounded-lg text-center
                           hover:shadow-lg hover:shadow-purple-500
                           transition-shadow duration-300"
              >
                <Icon className="text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto" />

                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base lg:text-lg text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Services
