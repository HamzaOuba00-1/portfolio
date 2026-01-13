import { AiOutlineMenu } from "react-icons/ai"
import { IoCloseSharp } from "react-icons/io5"
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-scroll"

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const items = [
    { id: 1, text: "About", to: "about" },
    { id: 2, text: "Interests", to: "services" },
    { id: 3, text: "Work", to: "work" },
    { id: 4, text: "Contact", to: "contact" },
  ]

  return (
    <>
      {/* ===== Desktop Navbar ===== */}
      <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 hidden md:flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide">
            <span className="text-white">HAMZA</span>
            <span className="text-purple-500 ml-1">OUBA</span>
          </div>

          {/* Links */}
          <ul className="flex items-center gap-8 text-gray-300">
            {items.map(({ id, text, to }) => (
              <li key={id} className="relative group cursor-pointer">
                <Link to={to} smooth duration={500} offset={-80}>
                  <span className="transition-colors group-hover:text-white">
                    {text}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="/oubaCV.pdf"
            download
            className="flex items-center gap-2 px-5 py-2 rounded-full
                      text-sm font-medium
                      bg-purple-500/90 hover:bg-purple-500
                      transition shadow-lg shadow-purple-500/20"
          >
            <span>My Resume</span>
            <ArrowDownTrayIcon className="w-4 h-4" />
          </a>
        </div>
      </motion.nav>

      {/* ===== Mobile Navbar ===== */}
      <div className="fixed top-0 w-full z-50 md:hidden backdrop-blur-lg bg-black/50 border-b border-white/5">
        <div className="flex items-center justify-between px-5 py-4">
          
          <div className="text-lg font-semibold">
            <span className="text-white">HAMZA</span>
            <span className="text-purple-500 ml-1">OUBA</span>
          </div>

          <button
            onClick={() => setMenu(!menu)}
            className="text-white"
          >
            {menu ? <IoCloseSharp size={26} /> : <AiOutlineMenu size={26} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0e0c1e] px-6 py-8 space-y-6"
          >
            {items.map(({ id, text, to }) => (
              <Link
                key={id}
                to={to}
                smooth
                duration={500}
                offset={-80}
                onClick={() => setMenu(false)}
                className="block text-gray-300 text-lg hover:text-purple-400 transition"
              >
                {text}
              </Link>
            ))}

            <a
              href="/oubaCV.pdf"
              download
              className="inline-block mt-4 px-5 py-2 rounded-full
                         bg-purple-500 text-white text-sm
                         hover:bg-purple-400 transition"
            >
              <span>My Resume</span>
              <ArrowDownTrayIcon className="w-4 h-4 inline-block ml-2" />
            </a>
          </motion.div>
        )}
      </div>
    </>
  )
}

export default Navbar
