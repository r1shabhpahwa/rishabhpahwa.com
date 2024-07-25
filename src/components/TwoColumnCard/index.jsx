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
        className="bg-gray-50 px-6 py-16 rounded-3xl h-full relative filter shadow-md md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
          <a
            href="https://www.ericsson.com/en"
            target="_blank"
            className="hover:underline"
          >
            Ericsson
          </a>
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <CalendarIcon className=" text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            SEPTEMBER, 2023 - APR, 2024
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <BriefcaseIcon className="text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            Software Developer Co-op
          </span>
        </h6>
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
            </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              technologies
            </span>
          </div>
        </div>
        <div className="text-base text-primary-400 dark:text-neutral-200 mb-4">
          Java | JavaScript | React | Node.js with Express | CI/CD | JUnit
        </div>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              duties & responsibilities
            </span>
          </div>
        </div>
        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>
            Developed a web-based network trace-sharing platform using React (front end) and Node.js with express (back end).
          </li> 
          <li>
            Enhanced a Java-based network trace log visualization tool by resolving critical issues, implementing key features, and optimizing the UI for better usability.
          </li>
          <li>
            Optimized existing algorithms, achieving a 20% increase in performance and scalability for handling large datasets.
          </li>
          <li>
            Implemented unit testing frameworks, reducing post-deployment bugs by 15%.
          </li>
          <li>
            Integrated CI/CD practices, using Git for version control and Gerrit for code reviews, ensuring high code quality and streamlined development workflows.
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
        className="bg-gray-50 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
          <a
            href="https://www.soprasteria.com"
            target="_blank"
            className="hover:underline"
          >
            Sopra Steria
          </a>
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
            August, 2019 - August, 2022
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
            SENIOR SOFTWARE ENGINEER
          </span>
        </h6>
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
            </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              technologies
            </span>
          </div>
        </div>
        <div className="text-base text-primary-400 dark:text-neutral-200 mb-4">
          JavaScript | UI5 (front-end framework) | ABAP | SQL
        </div>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              duties & responsibilities
            </span>
          </div>
        </div>

        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>
            Managed a critical project for Airbus for nearly 3 years as the technical owner, showcasing strong coding and
            debugging skills in developing and maintaining an SAP WebDynpro based portal for seamless technical data
            submission by the client's part suppliers
          </li>
          <li>
            Integrated OData services to facilitate efficient communication between the SAP backend and the portal, enhancing
            data processing capabilities and user experience
          </li>
          <li>
            Initiated and led the transition towards SAP Fiori development principles within the project, including the adoption of
            UI5 for creating responsive design applications for an enhanced user interface
          </li>
          <li>
            Demonstrated a functional understanding of the application and technical proficiency 
            in crucial areas such as SAP WebDynpro, OO Reports & ALV, BADI, BAPI, IDOC, Data Dictionary, 
            SAP Performance Tuning, and SQL optimization
          </li>
        </ul>
      </motion.div>
      
    </motion.div>
  );
};

export default TwoColumnCard;
