import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
import SuccessModal from "./model/SuccessModal";
import ErrorModal from "./model/ErrorModal";

const Contact = () => {
  const form = useRef();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("name");
    const number = formData.get("number");
    const email = formData.get("email");
    const message = formData.get("Message");

    if (!name || !number || !email || !message) {
      setShowFail(true);
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => setShowSuccess(true),
        () => setShowFail(true)
      );

    e.target.reset();
  };

  return (
    <div id="contact" className="text-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center py-12">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-bold"
        >
          Contact <span className="text-purple-500">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-slate-400 mt-4"
        >
          Feel free to reach out — I’m always open to new opportunities,
          collaborations, or just a friendly chat!
        </motion.p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Info */}
        <div className="space-y-6">
          {[
            {
              icon: <FaPhone />,
              title: "Call Me",
              value: "+33 6 67 52 43 75",
            },
            {
              icon: <FaEnvelope />,
              title: "Email",
              value: "hamza.ouba@outlook.com",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
              className="flex items-center space-x-4"
            >
              <div className="bg-purple-500 p-4 rounded-full text-white">
                {item.icon}
              </div>
              <div>
                <p className="text-lg font-medium text-purple-500">
                  {item.title}
                </p>
                <p>{item.value}</p>
              </div>
            </motion.div>
          ))}

          <motion.a
            href="https://github.com/HamzaOuba00-1"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex items-center space-x-4"
          >
            <div className="bg-purple-500 p-4 rounded-full">
              <FaGithub className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-purple-500">GitHub</p>
              <p className="hover:text-purple-500 transition">HamzaOuba00-1</p>
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/hamza-ouba-984029364"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex items-center space-x-4"
          >
            <div className="bg-purple-500 p-4 rounded-full">
              <FaLinkedin className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-purple-500">LinkedIn</p>
              <p className="hover:text-purple-500 transition">Hamza OUBA</p>
            </div>
          </motion.a>
        </div>

        {/* Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Full Name"
              className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
            />
            <input
              name="number"
              placeholder="Phone number"
              className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
            />
          </div>

          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
          />

          <textarea
            name="Message"
            placeholder="Message"
            className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-purple-500 px-6 py-3 rounded-md hover:bg-purple-600 transition"
          >
            Submit Message
          </motion.button>
        </motion.form>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="mt-24 flex flex-col sm:flex-row justify-between items-center gap-4 p-5 border-t border-purple-500"
      >
        <p>© 2025. Made with 🤍</p>
        <p>OUBA Hamza</p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/hamza-ouba-984029364"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/HamzaOuba00-1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500"
          >
            <FaGithub size={22} />
          </a>
        </div>
      </motion.div>

      <SuccessModal
        visible={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
      <ErrorModal visible={showFail} onClose={() => setShowFail(false)} />
    </div>
  );
};

export default Contact;
