import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import cert1 from "../assets/certificates/cert1.png";
import cert2 from "../assets/certificates/cert2.png";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Full Stack Web Development by WB Web Development Solutions",
      date: "January 2026",
      image: cert1,
      verifyUrl: "https://cursa.app/fr/mon-certificat/certeb336bc50d5c95667a37f7e463003308",
    },
    {
      id: 2,
      title: "Formation React.js complète avec Remote Monkey",
      date: "December 2025",
      image: cert2,
      verifyUrl: "https://cursa.app/fr/mon-certificat/certa5f8b82fe33628c2c6f9596f21b21756",
    },
  ];

  return (
    <div className="py-16 bg-[#0e0c1e]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-4xl text-white underline font-bold mb-6"
        >
          Certificates
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mb-12 text-gray-400"
        >
          Certificates completed through continuous learning.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="
                bg-[#1c1a2b]
                rounded-lg
                overflow-hidden
                shadow-lg
                hover:shadow-purple-500
                transition-shadow
              "
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 text-left">
                <h3 className="text-lg text-white font-semibold">
                  {cert.title}
                </h3>

                <p className="text-sm text-slate-400 mt-1">{cert.date}</p>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="mt-4 border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition"
                >
                  View certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL*/}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            onClick={() => setSelectedCert(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="
          w-full max-w-5xl
          h-[85vh]
          rounded-2xl
          border border-white/10
          bg-[#0b0820]
          shadow-2xl
          flex flex-col
        "
            >
              {/* Header */}
              <div className="flex items-center justify-between px-8 pt-7">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-white">
                    {selectedCert.title}
                  </h2>
                  <p className="text-sm text-slate-400 mt-1">
                    {selectedCert.date}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {selectedCert.verifyUrl && (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                  rounded-full
                  border border-purple-500/40
                  bg-purple-500/10
                  px-5 py-2
                  text-sm
                  text-purple-300
                  hover:bg-purple-500
                  hover:text-white
                  transition
                "
                    >
                      Access certificate
                    </a>
                  )}

                  <button
                    aria-label="Close"
                    className="text-white/70 hover:text-white text-2xl leading-none"
                    onClick={() => setSelectedCert(null)}
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Body*/}
              <div className="flex-1 flex items-center justify-center px-8 pb-8">
                <div
                  className="
            w-full
            h-full
            max-w-[900px]
            max-h-[600px]
            rounded-2xl
            bg-white/5
            border border-white/10
            p-4
            flex items-center justify-center
          "
                >
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-h-full max-w-full object-contain rounded-xl bg-white"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;
