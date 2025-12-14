import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import images from "../../constants/image";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
const logos = [
  {
    image: images.javaLogo,
    title: "Java",
  },
  {
    image: images.typescriptLogo,
    title: "TypeScript",
  },
  {
    image: images.pythonLogo,
    title: "Python",
  },
  {
    image: images.reactLogo,
    title: "React",
  },
  {
    image: images.nextLogo,
    title: "Next.js",
  },
  {
    image: images.nodejsLogo,
    title: "Node.js",
  },
  {
    image: images.postgresqlLogo,
    title: "PostgreSQL",
  },
  {
    image: images.dockerLogo,
    title: "Docker",
  },
  {
    image: images.kubernetesLogo,
    title: "Kubernetes",
  },
  {
    image: images.awsLogo,
    title: "AWS",
  },
  {
    image: images.githubLogo,
    title: "CI/CD",
  },
  {
    image: images.gitLogo,
    title: "Git",
  },
];

const TabSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Tabs defaultIndex={0}>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
        >
          <TabList className="bg-primary flex flex-col justify-center items-center mx-auto rounded-xl mb-16 w-full dark:bg-dark-bg-secondary md:w-max md:flex-row border dark:border-dark-border">
            <Tab className="text-white w-full text-center cursor-pointer px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-dark-accent-primary rounded-t-xl md:rounded-l-xl md:rounded-tr-none dark:text-dark-text-primary">
              Know me more
            </Tab>
            <Tab className="text-white w-full text-center cursor-pointer  px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-dark-accent-primary rounded-t-none rounded-b-xl md:rounded-l-none md:rounded-r-xl dark:text-dark-text-primary">
              Technical Skills
            </Tab>
          </TabList>
        </motion.div>
        <TabPanel className="flex gap-20 items-center flex-col-reverse md:flex-row-reverse transition-all">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "linear", duration: 0.5 }}
            className="w-full text-primary md:w-1/2 dark:text-dark-text-primary"
          >
            <h2 className="text-2xl font-semibold mb-2 dark:text-dark-text-primary">
              Software Developer
            </h2>
            <p className="text-base font-normal text-neutral-700 dark:text-dark-text-secondary">
            Full-stack software developer with 6+ years of experience building scalable web applications and cloud-native solutions. Graduate from University of Windsor with a Master's in Applied Computing, combining strong academic foundation with hands-on industry experience.
            <br />
            <br />
            Specialized in modern full-stack development with expertise in React, Next.js, Node.js, Spring Boot, and cloud platforms (AWS, GCP, Azure). Strong background in microservices architecture, RESTful APIs, authentication systems (OAuth2, MFA), and CI/CD automation using Docker and Kubernetes.
            <br />
            <br/>
            Beyond professional work, I'm deeply passionate about open-source software and self-hosting. I run a comprehensive homelab built on TrueNAS Scale, hosting 14+ self-hosted services including media servers, cloud storage, VPN infrastructure, and container orchestration - all accessible through secure reverse proxy configurations. This hands-on experience with infrastructure management and DevOps practices complements my development skills and keeps me engaged with emerging technologies.
            <br />
            <br/>
            Proven track record of delivering production-ready features from design to deployment, with emphasis on clean code, security best practices, and performance optimization. Always eager to learn, experiment, and contribute to the open-source community.
            </p>
            <br />
            <h3 className="font-semibold text-xl mb-2 dark:text-dark-text-primary">Certifications 📝:</h3>
            <ul className="list-inside list-disc text-neutral-700 dark:text-dark-text-secondary">
              <li>
                <a
                  href="https://www.linkedin.com/learning/certificates/b171b5ea06edc9862339a492cb0e801611a42696b2b5622ffde03649254e9a7a?u=56973065"
                  className="underline"
                  target="_blank"
                >
                  Scrum: Advanced
                  <span className="ml-1 inline-flex align-middle">
                    <ExternalLinkIcon className="h-5 w-5" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/learning/certificates/e0f7392996dcf0cb51ab8603f3b73d399d46f93c1db29c18af0e3ecdd6e9a995?u=56973065"
                  className="underline"
                  target="_blank"
                >
                  MongoDB
                </a>
                <span className="ml-1 inline-flex align-middle">
                  <ExternalLinkIcon className="h-5 w-5" />
                </span>
              </li>
              <li>
                <a
                  href="https://ca.badgr.com/public/assertions/CLJBZQbQTpSPItiUQvjBhQ"
                  className="underline"
                  target="_blank"
                >
                  NextGen CTO
                </a>
                {<span className="ml-1 inline-flex align-middle">
                  <ExternalLinkIcon className="h-5 w-5" />
                </span>}
              </li>
              <li>
                <a
                  //href=""
                  //className="underline"
                  target="_blank"
                >
                  Core Java & Android App Development, Hewlett Packard Enterprise (HPE)
                </a>
                {/* <span className="ml-1 inline-flex align-middle">
                  <ExternalLinkIcon className="h-5 w-5" />
                </span> */}
              </li>
            </ul>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "linear", duration: 0.5 }}
            className="w-full relative md:w-1/2 md:h-[450px]"
          >
            {!isLoaded && (
              <div className="absolute top-0 rounded-lg left-0 z-50 bg-primary-400 dark:bg-dark-bg-secondary animate-pulse w-full md:h-[450px]" />
            )}
            <img
              src={images.rishabhImage}
              className="h-full w-full z-10 object-cover object-top rounded-lg filter shadow-lg"
              alt="Image Rishabh"
              loading="lazy"
              width={664}
              height={450}
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>
        </TabPanel>
        <TabPanel className="flex gap-20 items-center flex-col md:flex-row-reverse transition-all">
          <div className="w-full text-center text-white max-w-3xl mx-auto md:h-[450px]">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "linear", duration: 0.5 }}
              className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-8"
            >
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-4 py-8 px-8 bg-gray-50 rounded-xl filter shadow-md dark:bg-dark-bg-secondary dark:border dark:border-dark-border"
                >
                  <img
                    className="h-14 object-contain dark:filter dark:invert"
                    src={logo.image}
                    alt={logo.title}
                    loading="lazy"
                    width={56}
                    height={56}
                  />
                  <h6 className="text-xl font-semibold text-primary dark:text-dark-text-primary">
                    {logo.title}
                  </h6>
                </div>
              ))}
            </motion.div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default TabSection;
