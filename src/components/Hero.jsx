import avatar from '../assets/me/avatar.png'
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
        className="container mx-auto text-center px-4"
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

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          {/* My Work */}
          <motion.button
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="bg-purple-500 hover:bg-purple-600 transition text-white px-6 py-3 rounded-full w-full sm:w-auto"
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
            className="text-white border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded-full inline-flex items-center justify-center w-full sm:w-auto"
          >
            My GitHub →
          </motion.a>
        </div>

        {/* Secondary section: My Learning Space */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.4 }}
          className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-5 py-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <div className="text-sm font-semibold text-white/90">space-H</div>
              <div className="text-sm text-gray-400">
                space-H is my structured learning laboratory.
              </div>
            </div>

            <motion.a
              href="https://spaceh.online"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:opacity-95 transition inline-flex items-center justify-center"
            >
              Visit space-H
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero