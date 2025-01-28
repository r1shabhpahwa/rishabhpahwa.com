import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <section id="404" className="bg-white dark:bg-primary min-h-screen flex items-center justify-center">
      <div className="container text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
          className="text-6xl md:text-8xl font-bold text-primary dark:text-white mb-4"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-8"
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-block bg-primary dark:bg-primary-400 text-white dark:text-primary-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary-600 dark:hover:bg-primary-300 transition-all"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;