import React from "react";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const TwoColumnCard = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="grid grid-cols-1 gap-10 items-start md:grid-cols-2 lg:grid-cols-3"
    >
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
            href="https://www.uniserve.com"
            target="_blank"
            className="hover:underline"
          >
            Uniserve Communications
          </a>
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-dark-text-secondary">
            <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-dark-text-secondary" />
            APRIL, 2025 - PRESENT
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-dark-text-secondary">
            <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-dark-text-secondary" />
            SOFTWARE DEVELOPER
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
          Next.js | React | TypeScript | Node.js | Express | PostgreSQL | Prisma | Docker | GitLab CI/CD
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

        <ul className="text-base text-primary-400 list-disc pl-5 space-y-2 dark:text-dark-text-secondary">
          <li>Architected multi-tenant managed services platform with session-based auth, MFA, OAuth2, and RBAC.</li>
          <li>Built fax management system with Telnyx API integration and secure webhook handling.</li>
          <li>Developed full-stack application using Next.js, TypeScript, Node.js, and PostgreSQL with Prisma ORM.</li>
          <li>Integrated ConnectWise CRM for automated ticket syncing and customer workflow management.</li>
          <li>Established CI/CD pipelines with Docker containerization and automated deployments.</li>
        </ul>
      </motion.div>
      <motion.div
        variants={{
          offscreen: {
            y: 300,
          },
          onscreen: {
            y: 0,
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
            Ericsson
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
          Java | React | Node.js | Express | Jest | GitLab CI/CD | Trace Compass | NLP
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
        <ul className="text-base text-primary-400 list-disc pl-5 space-y-2 dark:text-dark-text-secondary">
          <li>Developed network trace sharing platform with React and Node.js for engineering collaboration.</li>
          <li>Built Java visualization tool using Trace Compass, improving performance by 20%.</li>
          <li>Implemented unit testing with Jest framework, reducing post-deployment bugs by 15%.</li>
          <li>Integrated CI/CD pipelines using GitLab for streamlined deployments and code quality.</li>
          <li>Automated helpdesk ticket analysis using NLP and web scraping for actionable insights.</li>
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
            JANUARY, 2019 - AUGUST, 2022
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
          Java | Spring Boot | REST APIs | PostgreSQL | Redis | Docker | Kubernetes | JUnit | Mockito
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

        <ul className="text-base text-primary-400 list-disc pl-5 space-y-2 dark:text-dark-text-secondary">
          <li>Developed SaaS application with integrated payment processors for enhanced efficiency.</li>
          <li>Built and deployed microservices on Google Kubernetes Engine (GKE).</li>
          <li>Implemented event-driven processing with Google Pub/Sub for system communication.</li>
          <li>Designed RESTful APIs using Backend-for-Frontend (BFF) pattern.</li>
          <li>Implemented OAuth2, Google ReCAPTCHA, and HMAC for security and data integrity.</li>
          <li>Mentored junior engineers and authored technical documentation.</li>
        </ul>
      </motion.div>

    </motion.div>
  );
};

export default TwoColumnCard;
