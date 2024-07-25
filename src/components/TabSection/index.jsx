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
    image: images.javascriptLogo,
    title: "Javascript",
  },
  {
    image: images.pythonLogo,
    title: "Python",
  },
  {
    image: images.sapLogo,
    title: "ABAP",
  },
  {
    image: images.htmlLogo,
    title: "HTML5",
  },
  {
    image: images.cssLogo,
    title: "CSS",
  },
  {
    image: images.reactLogo,
    title: "React",
  },
  {
    image: images.sapLogo,
    title: "UI5",
  },
  
  {
    image: images.hubspotLogo,
    title: "ML",
  },
  {
    image: images.tailwindLogo,
    title: "Data Analysis",
  },
  {
    image: images.gitLogo,
    title: "Git",
  },
  
  {
    image: images.sapLogo,
    title: "S/4HANA",
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
          <TabList className="bg-primary flex flex-col justify-center items-center mx-auto rounded-xl mb-16 w-full dark:bg-primary-500 md:w-max md:flex-row">
            <Tab className="text-white w-full text-center cursor-pointer px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
              Know me more
            </Tab>
            <Tab className="text-white w-full text-center cursor-pointer  px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-none rounded-b-xl md:rounded-l-none md:rounded-r-xl">
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
            className="w-full text-primary md:w-1/2 dark:text-white"
          >
            <h2 className="text-2xl font-semibold mb-2">
              Software Development Engineer
            </h2>
            <p className="text-base font-normal text-neutral-700 dark:text-neutral-300">
            Software engineer with over 3 years of experience in delivering high-quality solutions to global clients. Proficient in a diverse range of technologies, including Java, JavaScript (React, Node.js with Express), and DevOps CI/CD practices. 
            <br />
            <br />
            One of my key strengths is adaptability, which enables me to thrive in Agile environments, delivering on time and to specification. I've demonstrated my ability to mentor, guide, and inspire teams, as well as to communicate effectively with a range of stakeholders. My technical knowledge is complemented by robust problem-solving abilities and a strong commitment to innovation.
            <br />
            <br/>
            I am proud of my achievements, including the Pinnacle Award at Sopra Steria and securing the Runner-Up Position in the Smart India Hackathon 2018. But I believe the journey of learning and growth is never-ending. I'm always looking for opportunities to further hone my skills and contribute to the growth of the organizations I am part of.
            </p>
            <br />
            <h3 className="font-semibold text-xl mb-2">Certifications 📝:</h3>
            <ul className="list-inside list-disc text-neutral-700 dark:text-neutral-300">
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
              <div className="absolute top-0 rounded-lg left-0 z-50 bg-primary-400 animate-pulse w-full md:h-[450px]" />
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
                  className="flex flex-col justify-center items-center gap-4 py-8 px-8 bg-gray-50 rounded-xl filter shadow-md dark:bg-primary-400"
                >
                  <img
                    className="h-14 object-contain dark:filter dark:invert"
                    src={logo.image}
                    alt={logo.title}
                    loading="lazy"
                    width={56}
                    height={56}
                  />
                  <h6 className="text-xl font-semibold text-primary dark:text-white">
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
