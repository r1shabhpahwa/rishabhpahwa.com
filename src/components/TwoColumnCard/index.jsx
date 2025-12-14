import React from "react";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const TwoColumnCard = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="grid grid-cols-1 gap-10 items-center md:grid-cols-2"
    >
      <motion.div
        variants={{
          offscreen: {
            y: 300,
          },
          onscreen: {
            y: 0,
            // rotate: -10,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.5,
            },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="bg-gray-50 px-6 py-16 rounded-3xl h-full relative filter shadow-md md:px-10 dark:bg-dark-bg-secondary dark:border dark:border-dark-border"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-dark-text-primary">
          <a
            href="https://www.ericsson.com/en"
            target="_blank"
            className="hover:underline"
          >
            Ericsson Canada
          </a>
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-dark-text-secondary">
            <CalendarIcon className=" text-neutral-600 h-4 mr-2 dark:text-dark-text-secondary" />
            SEPTEMBER, 2023 - MAY, 2024
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-dark-text-secondary">
            <BriefcaseIcon className="text-neutral-600 h-4 mr-2 dark:text-dark-text-secondary" />
            Software Developer Co-op
          </span>
        </h6>
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
            </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-dark-bg-secondary dark:text-dark-text-tertiary">
              technologies
            </span>
          </div>
        </div>
        <div className="text-base text-primary-400 dark:text-dark-accent-secondary mb-4">
          Java | JavaScript | Node.js/Express | React | CI/CD | JUnit
        </div>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-dark-bg-secondary dark:text-dark-text-tertiary">
              duties & responsibilities
            </span>
          </div>
        </div>
        <ul className="text-base text-primary-400 list-inside list-disc dark:text-dark-text-secondary">
          <li>
          Improved team efficiency by providing a centralized repository for trace sharing and collaboration, streamlining workflows for network analysis.
          </li> 
          <li>
          Developed a web-based network trace-sharing platform with a React front end and Node.js/Express back end, enabling users to post, interact with, and manage network traces through features such as voting, commenting, saving, etc.
          </li>
          <li>
          Played a key role in developing a Java-based network visualization tool by resolving technical issues, fixing bugs, and implementing critical features to improve reliability and enhance the user interface.
          </li>
          <li>
          Spearheaded the automation of helpdesk support ticket analysis using web scraping, NLP techniques, and data visualization, resulting in weekly reports with actionable insights for the development team, leading to increased customer satisfaction levels.
          </li>

        </ul>
      </motion.div>
      <motion.div
        variants={{
          offscreen: {
            y: 150,
          },
          onscreen: {
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1,
            },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="bg-gray-50 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-dark-bg-secondary dark:border dark:border-dark-border"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-dark-text-primary">
          <a
            href="https://www.soprasteria.com"
            target="_blank"
            className="hover:underline"
          >
            Sopra Steria
          </a>
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-dark-text-secondary">
            <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-dark-text-secondary" />
            August, 2019 - August, 2022
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-dark-text-secondary">
            <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-dark-text-secondary" />
            SENIOR SOFTWARE ENGINEER
          </span>
        </h6>
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
            </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-dark-bg-secondary dark:text-dark-text-tertiary">
              technologies
            </span>
          </div>
        </div>
        <div className="text-base text-primary-400 dark:text-dark-accent-secondary mb-4">
          Java 8+ | Spring (Boot, MVC, Cloud),  | JavaScript | Node.js/Express | Microservices | CloudNative
        </div>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-dark-bg-secondary dark:text-dark-text-tertiary">
              duties & responsibilities
            </span>
          </div>
        </div>

        <ul className="text-base text-primary-400 list-inside list-disc dark:text-dark-text-secondary">
          <li>
          Developed a SaaS application with integrated payment processors, boosting operational efficiency and revenue potential.
          </li>
          <li>
          Built and deployed microservices on Google Kubernetes Engine, leveraging Pub/Sub for event-driven architecture and GCP solutions.
          </li>
          <li>
          Streamlined deployments by implementing a Jenkins-based CI/CD pipeline with automated testing, enhancing reliability and reducing manual efforts.
          </li>
          <li>
          Strengthened system security by integrating Google ReCAPTCHA and implementing HMAC for data integrity.
          </li>
          <li>
          Implemented secure APIs using BFF pattern, and maintained high system reliability with detailed documentation and robust incident management.
          </li>
        </ul>
      </motion.div>
      
    </motion.div>
  );
};

export default TwoColumnCard;
