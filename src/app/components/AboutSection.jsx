"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TabButton from "./TabButton";
import Skill from "./Skill";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: <Skill />,
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5">
        <li>
          <strong>B.Tech (Computer Science & Engineering)</strong>
          <br />
          SRMS collage of Engineering and Technology
          <br />
          2018-2022 | 8.5 CGPA (85%)
        </li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experience",
    content: (
      <ul className="list-disc pl-5">
        <li>HCL (Remote Intern July 2021 - Dec 2021) - Web Development Intern</li>
        {/* <li>Freelancer (Aug 2022 - Present)</li> */}
        <li>TCS (August 2022 - Present) - Frontend Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-slate-200" id="about">
      <div className="md:grid md:grid-cols-1 gap-8 items-center px-6">
        <div className="mt-4 md:mt-0 flex flex-col h-full lg:text-justify">
          <h2 className="text-4xl font-bold text-[#ffcd67] mb-4">About Me</h2>
          <p className="text-slate-200 lg:text-lg">
            I am a Front End Developer with a fervor for crafting interactive and responsive web applications. Possessing proficiency in JavaScript, React, Redux, Next.js, HTML, CSS, and Git, I bring a comprehensive skill set to the development landscape. My commitment to continual learning is evidenced by my quick adaptability and eagerness to broaden my knowledge base. Recognized as a dedicated team player, I am enthusiastic about collaborative efforts to conceive and deliver exceptional applications. My professional approach and passion for web development fuel my commitment to contributing meaningfully to collaborative projects.
          </p>
          <div className="flex flex-row mt-8 w-full lg:justify-center space-x-4">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between mt-8">
            <div className="hidden lg:block">
              <Image
                src="https://cdn.dribbble.com/users/1364029/screenshots/16093268/media/68e82a7fb4904614a9066d6b540c14b2.gif"
                alt="dev"
                height={500}
                width={500}
                className="object-cover rounded-full border-6 shadow-lg shadow-[#ffcd67]"
              />
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8 flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {TAB_DATA.find((t) => t.id === tab).content}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
