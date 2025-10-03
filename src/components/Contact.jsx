import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);
  const form = useRef(); // Define the form reference

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("name");
    const number = formData.get("number");
    const email = formData.get("email");
    const message = formData.get("Message");

    // Check if all fields are filled
    if (!name || !number || !email || !message) {
      setShowFail(true); // show error popup
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
        (result) => {
          console.log(result.text);
          setShowSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setShowFail(true); // show error popup on send failure
        }
      );

    e.target.reset();
  };

  return (
    <div id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="text-4xl font-bold text-white"
        >
          Contact <span className="text-purple-500">Me</span>
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="text-slate-400 mt-4"
        >
          Feel free to reach out to me <br></br> I’m always open to new
          opportunities, collaborations, or just a friendly chat!
        </motion.p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="flex items-center space-x-4"
          >
            <div className="bg-purple-500 p-4 rounded-full">
              <FaPhone className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-purple-500">Call Me</p>
              <p className="text-white">+33 6 67 52 43 75</p>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="bg-purple-500 p-4 rounded-full">
              <FaEnvelope className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-purple-500">Email</p>
              <p className="text-white">hamza.ouba@viacesi.fr</p>
            </div>
          </motion.div>

          <a
            href="https://www.linkedin.com/in/hamza-ouba-984029364"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4"
          >
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              <div className="bg-purple-500 p-4 rounded-full">
                <FaLinkedin className="text-white w-6 h-6" />
              </div>
              <div>
                <p className=" text-purple-500 text-lg font-medium">LinkedIn</p>
                <p className="text-white  hover:text-purple-500 transition-colors duration-300">
                  Hamza OUBA
                </p>
              </div>
            </motion.div>
          </a>
        </div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="space-y-4 text-white"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Phone number"
              name="number"
              className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
            />
          </div>
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />
          <div>
            <input
              type="email"
              placeholder="Your email"
              name="email"
              className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
            />
          </div>
          <textarea
            placeholder="Message"
            name="Message"
            className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition duration-200"
          >
            Submit Message
          </motion.button>
        </motion.form>
        <SuccessModal
          visible={showSuccess}
          onClose={() => setShowSuccess(false)}
        />
        <ErrorModal visible={showFail} onClose={() => setShowFail(false)} />
      </div>
      {/*footer*/}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-48 flex justify-between items-center p-5 text-white border-t-2 border-purple-500"
      >
        <p>© 2025. Made With 🤍</p>
        <p>OUBA Hamza</p>
        <div className="flex justify-center space-x-4 text-white mt-4">
          <a
            href="https://www.linkedin.com/in/hamza-ouba-984029364"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors duration-300"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/HamzaOuba00-1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors duration-300"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
