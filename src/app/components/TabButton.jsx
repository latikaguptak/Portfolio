import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "100%" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-amber-400" : "text-gray-500";

  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={selectTab}>
      <p className={`font-semibold text-lg ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 w-full mt-1 bg-[#ffcd67]"
      ></motion.div>
    </div>
  );
};

export default TabButton;
