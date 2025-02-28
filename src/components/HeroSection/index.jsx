import React, { useState, useEffect } from 'react';
import images from '../../constants/image';
import { motion } from 'framer-motion';

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
];

const titles = ['TRAVELER', 'GAMER', 'LEARNER', 'FOODIE', 'COFFEE CONNOISSEUR', 'TECH ENTHUSIAST', 'YOUTUBER', 'CHESS PLAYER',];

const useTypewriter = (words, delay = 2000, typingSpeed = 100) => {
  const [index, setIndex] = useState(0); // Tracks the current word index
  const [subIndex, setSubIndex] = useState(0); // Tracks the index of the current character in the word
  const [reverse, setReverse] = useState(false); // Flag to control the direction of typing (forward/backward)
  const [blink, setBlink] = useState(true); // State to control the blinking of the cursor

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500); // Blink every 500ms

    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      // After reaching the end of a word, pause before starting to delete
      setTimeout(() => setReverse(true), delay);
      return;
    }

    if (subIndex === 0 && reverse) {
      // After deleting a word, move to the next word and pause before starting to type
      setReverse(false);
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
      setTimeout(() => {}, delay); // Additional delay before typing the next word can be added here if necessary
    }

    // Randomize the delay to simulate more natural typing
    const typingDelay = reverse ? 75 : Math.random() * (typingSpeed - 50) + 50;

    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
    }, typingDelay);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, delay, words, typingSpeed]);

  // Append the dynamic cursor to the text
  const textWithCursor = `${words[index].substring(0, subIndex)}${blink ? ' |' : ''}`;

  return textWithCursor;
};

const HeroSection = () => {
  const animatedTitle = useTypewriter(titles);

  return (
    <section id="home" className="bg-white dark:bg-primary">
      <div className="container relative">
        <div className="flex items-center flex-col">
          <div className="flex flex-col items-center justify-center min-h-[90vh] md:min-h-screen">
          <div className="container relative">
              <motion.h1
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'linear', duration: 0.5 }}
                className="hero__heading"
              >
                Rishabh P.
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="hero__subtext"
              >
                BUT ALSO A {animatedTitle}
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-full relative bottom-20 md:w-auto md:absolute md:top-[70%]">
          <ul className="flex flex-row justify-center items-center w-full gap-6 md:flex-col">
            {socials.map((social, index) => (
              <motion.li
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  default: {
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                  },
                  scale: {
                    type: 'spring',
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.15 }}
                key={index}
                className="bg-neutral w-max rounded-full hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300"
              >
                <a href={social.link} target="_blank">
                  <img
                    className="h-14 w-14 p-4 transition-all dark:invert"
                    src={social.logo}
                    alt={social.alt}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
