import React, { useState, useEffect } from 'react';
import images from '../../constants/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/outline';

const socials = [
  {
    logo: images.linkedinIcon,
    alt: 'LinkedIn Icon',
    link: 'https://www.linkedin.com/in/rishabh-pahwa/',
  },
  {
    logo: images.githubIcon,
    alt: 'GitHub Icon',
    link: 'https://github.com/r1shabhpahwa',
  },
  {
    logo: images.steamIcon,
    alt: 'Steam Icon',
    link: 'https://steamcommunity.com/id/p1xeleh',
  },
  {
    logo: images.youtubeIcon,
    alt: 'YouTube Icon',
    link: 'https://www.youtube.com/@CETech4u',
  },
];

const greetings = ['hi', 'hola', 'bonjour', 'ciao', 'नमस्ते', 'こんにちは', '안녕', 'hallo', 'olá'];

const HeroSection = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="bg-white dark:bg-dark-bg-primary">
      <div className="container relative">
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-hero font-light text-primary dark:text-dark-text-primary leading-relaxed">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentGreeting}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block"
                  >
                    {greetings[currentGreeting]}
                  </motion.span>
                </AnimatePresence>
                .<br />
                i'm<br />
                rishabh.
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-primary-400 dark:text-dark-text-secondary font-hero font-light leading-relaxed max-w-2xl">
                Building robust software from the database up to the pixel. I specialize in full-stack architecture, open-source infrastructure, and making complex systems feel simple.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  href="#about"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="relative inline-block text-sm font-hero font-normal text-primary dark:text-dark-text-primary group focus:outline-none focus:ring"
                >
                  <span className="absolute inset-0 border border-current"></span>
                  <span className="block px-6 py-3 transition-transform bg-transparent border border-current group-hover:-translate-x-1 group-hover:-translate-y-1">
                    about me
                  </span>
                </motion.a>
                <motion.a
                  href="#projects"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="relative inline-block text-sm font-hero font-normal text-white dark:text-dark-bg-primary group focus:outline-none focus:ring"
                >
                  <span className="absolute inset-0 border border-primary dark:border-dark-text-primary"></span>
                  <span className="relative block px-6 py-3 transition-transform bg-primary dark:bg-dark-text-primary border border-primary dark:border-dark-text-primary group-hover:-translate-x-1 group-hover:-translate-y-1">
                    view my work
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 md:left-8 md:bottom-8 md:transform-none">
          <ul className="flex flex-row gap-4 md:flex-col">
            {socials.map((social, index) => (
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                key={index}
                className="group"
              >
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-full hover:bg-neutral-200 dark:hover:bg-dark-bg-secondary transition-colors"
                >
                  <img
                    className="h-6 w-6 opacity-60 group-hover:opacity-100 transition-opacity dark:invert"
                    src={social.logo}
                    alt={social.alt}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
  
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronDownIcon className="h-5 w-5 text-primary-400 dark:text-dark-text-secondary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
