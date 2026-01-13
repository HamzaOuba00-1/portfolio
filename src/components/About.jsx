



import aboutImg from '../assets/aboutImg.png'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
}

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
}

const About = () => {
  return (
    <section id="about" className="text-white py-16">
      <div className="container mx-auto px-4 text-center">

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold mb-6 underline"
        >
          About Me
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-gray-400"
        >
          A bit about the brain behind the build.
        </motion.p>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-center">

          {/* Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8 md:mb-0 md:mr-8 flex justify-center"
          >
            <img
              src={aboutImg}
              alt="About"
              className="w-2/3 sm:w-1/2 md:w-10/12"
            />
          </motion.div>

          {/* Text */}
          <motion.p
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl"
          >
          Hey! I am Hamza, Fourth-year IT engineering student at CESI Nice, an innovative institution 
          recognized for its forward-thinking and project-based learning.
          Focused on software engineering. Passionate about building reliable and maintainable applications, 
          I enjoy transforming complex ideas into efficient, production-ready solutions.
          </motion.p>

        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-around items-center mt-12 gap-6">

          {[
            { value: '4', label: '4th-Year Engineering Student' },
            { value: '3+', label: 'Years of Freelance Experience' },
            { value: '7+', label: 'Projects Built Last Year' }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-8xl font-bold text-purple-500">
                {item.value}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default About
