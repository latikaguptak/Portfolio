"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";


const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h3 className="text-indigo-600 mb-4 text-3xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="bg-clip-text bg-gradient-to-r text-white">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Latika Gupta",
                1000,
                "Web Developer",
                1000,
                "Frontend Developer",
                1000,
                "React ,Next js Developer",
                1000,
             
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#ffcd67]"
            />
          </h3>
          <p className="text-slate-200 text-base sm:text-lg mb-6 lg:text-xl">
            Transforming ideas into seamless digital experiences with FrontEnd magic
          </p>
          <div>
            <Link
              href="/#contact"
         
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br bg-[#21476b] hover:bg-[#ffcd67] hover:text-[#21476b] text-amber-300"
            >
             Contact Me
            </Link>
            <Link
              href= "https://latika-resume.tiiny.site/" //"https://aman-resume.tiiny.site/"//
              target="_blank"
            
              className="px-1 inline-block py-1 w-full border-2 border-[#ffcd67] sm:w-fit rounded-full bg-gradient-to-br  hover:bg-[#21476b]  hover:text-indigo-500 mt-3"
            >
              <span className="block bg-[#21476b] hover:bg-[#ffcd67] rounded-full px-5 py-2 text-white">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#ffcd67] shadow-lg w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="https://user-images.githubusercontent.com/113302094/211284885-f4291eef-88a6-48cb-a06e-28c3481a75b0.gif"
              alt="hero image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={370}
              height={370}
             
            />
            
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
