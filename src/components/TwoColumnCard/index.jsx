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
          <li>Working on architecting a multi-tenant managed services platform with session-based authentication, MFA (TOTP), OAuth2, and granular RBAC for MSP operations.</li>
          <li>Developing fax management module with Telnyx API integration, multi-layered webhook security, and tenant-isolated media storage.</li>
          <li>Building full-stack solution with responsive Next.js frontend and Node.js/Express backend APIs, implementing CSRF protection, retry logic, and typed error handling.</li>
          <li>Implementing secure authentication system with AES-GCM encrypted MFA secrets, rotating session tokens, and rate-limited endpoints.</li>
          <li>Integrating with ConnectWise CRM for support ticket synchronization and workflow automation across platforms.</li>
          <li>Establishing code quality standards with ESLint 9, pre-commit hooks, and clean modular architecture with TanStack Query for server-state caching.</li>
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
          <li>Collaborated within an Agile team to develop and enhance software solutions, ensuring seamless cross-functional teamwork.</li>
          <li>Developed a platform for network trace sharing using React and Node.js/Express, centralizing trace data for engineering teams and enabling collaboration through commenting, voting, and saving features.</li>
          <li>Contributed to the development of a Java-based visualization tool leveraging Trace Compass, an Eclipse open-source platform, resolving technical issues and implementing key features to enhance reliability.</li>
          <li>Optimized algorithms, achieving a 20% improvement in performance and scalability of the tool for handling large datasets.</li>
          <li>Spearheaded the automation of helpdesk support ticket analysis using web scraping, NLP techniques, and data visualization, leading to increased customer satisfaction levels.</li>
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
          <li>Collaborated on the development of a SaaS application by integrating existing payment processors, enhancing operational efficiency and revenue potential.</li>
          <li>Developed microservices and deployed with Google Kubernetes Engine (GKE), ensuring scalable and resilient architectures.</li>
          <li>Implemented event-driven processing with Google Pub/Sub, optimizing system communication and data consistency.</li>
          <li>Designed and exposed RESTful APIs using the Backend-for-Frontend (BFF) pattern, ensuring seamless client-server interactions.</li>
          <li>Strengthened system security by integrating OAuth2 authentication, Google ReCAPTCHA, and implementing HMAC for data integrity.</li>
          <li>Authored technical documentation on system architecture, API specifications, and troubleshooting guides while mentoring junior engineers through code reviews and onboarding support.</li>
        </ul>
      </motion.div>

    </motion.div>
  );
};

export default TwoColumnCard;
