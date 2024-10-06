"use client";
import React from "react";
import { motion } from "framer-motion";

const Skill = () => {
  const iconVariants = {
    initial: { scale: 1, opacity: 1 },
    hover: { scale: 1.2, transition: { duration: 0.3 } },
    tap: { scale: 0.9, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="my-3"
    >
      <h1 className="text-2xl font-bold text-white mt-2">Skills</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 p-5">
        {SkillsData.map((skill, index) => {
          return (
            <li
              key={index}
              className="icon-box relative rounded-xl overflow-hidden flex flex-col items-center w-20 h-20 sm:w-28 sm:h-28 md:w-20 md:h-20 border-2 cursor-pointer border-[#ffcd67] p-4 transform hover:translate-y-1 hover:shadow-xl transition ease-in-out duration-300"
            >
              <motion.div
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="object-cover rounded-md"
                  loading="lazy"
                />
              </motion.div>
              <span className="absolute bottom-0 left-0 right-0 bg-[#163a5c] text-white text-center text-sm sm:text-md md:text-sm px-1">
                {skill.name}
              </span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Skill;
const SkillsData  = [
  {
    name: "Html",
    img: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
  },
  {
    name: "Css",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
  },
  {
    name: "Javascript",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
  },
 
  {
    name: "React",
    img: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
  },
  {
    name: "Next js",
    img: "https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png",
  },
 
  
  {
    name: "GitHub",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn11Rru16VFClaKhYzoL9yGLIwOEaggMpa1Q&usqp=CAU",
  },
 
  {
    name: "Redux",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifmdBhm6i8KHRRMO9XDSytESNl3ywhe867Q&s",
  },
  {
    name: "Tailwind",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKPw4CK4jcH7udsFHZdiB3iIOuI3fUCsxUZosXy4Y1yd25NA-dzCBPrSDIhg1BwObl3w&usqp=CAU",
  },
  {
    name: "Sass",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Flogos-and-brands-adobe%2F512%2F288_Sass-512.png&f=1&nofb=1&ipt=5ba15b53871712c2f3b1d79542ea0bb23525b98f6aba01de7544e5898b187dc5&ipo=images",
  },
  
  {
    name:"React query",
    img:"https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fglll1swn5umyjemv09ql.png"
  }
];

// {
//   name: "Docker",
//   img: "https://miro.medium.com/v2/resize:fit:601/1*e8u6teTHyalPejIBauj4Jw.png",
// },
// {
//   name: "Express js",
//   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMljNHtufEhORorpm03zCLtzlnY2R_gvx4cZYwSh_auF0rSZvjFO5kALPmyDgj9axhleY&usqp=CAU",
// },

// {
//   name: "TypeScript",
//   img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201",
// },


// {
//   name: "Gitlab",
//   img: "https://cdn.icon-icons.com/icons2/2699/PNG/512/gitlab_tile_logo_icon_170092.png",
// }