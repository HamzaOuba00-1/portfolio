import avatar from '../assets/avatar.png'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className="text-white py-10">

      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        src={avatar}
        className="mx-auto w-2/3 md:w-1/3 lg:w-1/4"
        alt="Avatar"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="container mx-auto text-center"
      >

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-4xl md:text-5xl flex flex-col gap-4 font-bold mb-4"
        >
          Turning Ideas Into Deployable Reality

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-purple-500"
          >
            Tech Builder. Engineer in Progress.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-gray-400 text-lg mb-8"
        >
          Passionate about software and intelligent systems.
        </motion.p>

        <div className="flex justify-center space-x-4 mb-10">

          {/* My Work */}
          <motion.button
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="bg-purple-500 text-white px-6 py-3 rounded-full"
          >
            <Link to="work" smooth duration={500} offset={-70}>
              My Work
            </Link>
          </motion.button>

          {/* My GitHub */}
          <motion.a
            href="https://github.com/HamzaOuba00-1"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="text-white border border-white px-6 py-3 rounded-full inline-flex items-center"
          >
            My GitHub →
          </motion.a>

        </div>
      </motion.div>
    </div>
  )
}

export default Hero
