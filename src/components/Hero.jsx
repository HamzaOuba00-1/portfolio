import avatar from "../assets/me/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

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
        <div className="flex justify-center items-center gap-4 mb-8 flex-nowrap">
          {/* My Work */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <Link
              to="work"
              smooth
              duration={500}
              offset={-70}
              className="inline-flex items-center justify-center bg-purple-500 hover:bg-purple-600 transition text-white px-6 py-3 rounded-full whitespace-nowrap"
            >
              My Work
            </Link>
          </motion.div>

          {/* My GitHub */}
          <motion.a
            href="https://github.com/HamzaOuba00-1"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="inline-flex items-center justify-center text-white border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded-full whitespace-nowrap"
          >
            My GitHub →
          </motion.a>
        </div>

        {/* Secondary section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.4 }}
          className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-5 py-4"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between gap-4 text-center sm:text-left">
            {/* Text */}
            {/*
            <div className="flex flex-col">
              <div className="text-sm font-semibold text-white/90">space-H</div>
              <div className="text-sm text-gray-400">
                space-H is my learning lab.
              </div>
            </div>

            {/* Button */}
            {/* <motion.a
              href="https://spaceh.online"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:opacity-95 transition whitespace-nowrap"
            >
              Visit space-H
            </motion.a>
            </motion.div>
          </div>
        </motion.div>*/}
      </motion.div>
    </div>
  );
};

export default Hero;
