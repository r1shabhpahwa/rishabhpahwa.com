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
            <div className="space-y-4">
              <p className="text-lg font-hero font-light leading-relaxed text-neutral-700 dark:text-dark-text-secondary">
                I'm a software engineer who loves <span className="font-semibold text-primary dark:text-dark-text-primary">the command line just as much as the frontend</span>. With a Master's from the University of Windsor and <span className="font-semibold text-primary dark:text-dark-text-primary">4+ years building scalable applications</span>, I bridge the gap between <span className="italic">"it works on my machine"</span> and <span className="italic">"it works for thousands of users."</span>
              </p>
              <p className="text-lg font-hero font-light leading-relaxed text-neutral-700 dark:text-dark-text-secondary">
                For me, software engineering is fundamentally about <span className="font-semibold text-primary dark:text-dark-text-primary">turning complex requirements into reliable, usable solutions</span>. I've developed expertise as a <span className="font-semibold text-primary dark:text-dark-text-primary">full-stack generalist</span>, comfortable across the entire stack—from fine-tuning frontend with <span className="font-medium">Next.js and React</span>, to designing secure, scalable backend using <span className="font-medium">Node.js and Spring Boot</span>, and ensuring effective deployment to the cloud.
              </p>
              <p className="text-lg font-hero font-light leading-relaxed text-neutral-700 dark:text-dark-text-secondary">
                But if you really want to know what makes me tick, you have to look at <span className="font-semibold text-primary dark:text-dark-text-primary">what I do when the laptop closes</span>. I am a massive proponent of <span className="font-semibold text-primary dark:text-dark-text-primary">self-hosting and digital sovereignty</span>. I don't just use the cloud; <span className="italic">I built my own at home</span>.
              </p>
              <p className="text-lg font-hero font-light leading-relaxed text-neutral-700 dark:text-dark-text-secondary">
                What began as simple photo storage evolved into a full homelab where I act as <span className="font-medium">Lead Developer, SysAdmin, and DevOps Engineer</span>.
              </p>
              <p className="text-lg font-hero font-light leading-relaxed text-neutral-700 dark:text-dark-text-secondary">
                From configuring <span className="font-medium">secure reverse proxies</span> to ensure my Nextcloud instance is accessible (but safe) from a coffee shop, to orchestrating media streaming via <span className="font-medium">Jellyfin</span> for my friends, this hobby keeps me sharp. It forces me to understand <span className="font-semibold text-primary dark:text-dark-text-primary">networking, Docker containerization, and Linux security</span> at a level that most developers rarely touch.
              </p>
              <p className="text-lg font-hero font-light leading-relaxed text-neutral-700 dark:text-dark-text-secondary">
                At the end of the day, <span className="font-semibold text-primary dark:text-dark-text-primary">I'm a builder</span>. Whether I'm optimizing a database query, or automating a CI/CD pipeline, I love the process of <span className="italic">turning complexity into something reliable and efficient</span>.
              </p>
            </div>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "linear", duration: 0.5 }}
            className="w-full relative md:w-1/2"
          >
            {!isLoaded && (
              <div className="absolute top-0 rounded-lg left-0 z-50 bg-primary-400 dark:bg-dark-bg-secondary animate-pulse w-full h-full" />
            )}
            <img
              src={images.rishabh2Image}
              className="w-full h-96 object-cover object-bottom md:h-auto md:object-contain md:object-center z-10 rounded-lg filter shadow-lg"
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
