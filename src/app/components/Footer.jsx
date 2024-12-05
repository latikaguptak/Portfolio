import React from "react";
import Image from "next/image";
import { FiHome } from "react-icons/fi";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer border   bg-gray-950 border-t-[#ffcd67] border-l-transparent border-r-transparent text-white">
      <div className="container p-4 flex items-center justify-between">
        <p className="text-[#ffcd67] tracking-wide flex items-center space-x-2">
        <Link href="#">
            <FiHome
              className="mx-4 cursor-pointer text-[#ffcd67] hover:text-white"
              size={23}
            />
          </Link>
          Latika  Gupta Responsive Portfolio 2024{" "}
         
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
