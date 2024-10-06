"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import ResponsiveNav from "./ResponsiveNab";
const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed flex items-center justify-between mx-auto  top-0 left-0 right-0 z-10 bg-[#21476b] rounded-b-3xl bg-opacity-100 p-6 shadow-lg  transform hover:shadow-[#ffcd67] transition-transform duration-300 ease-in-out  cursor-pointer  text-white w-full">
      {/* <div className="flex container flex-wrap items-center justify-between mx-auto "> */}
        <Link
          href={"/"}
          className=" text-amber-300 font-semibold"
         
        >
          <span className="font-bold text-xl text-[#ffcd67]">Latika Gupta</span>
            
        </Link>
        <ResponsiveNav/>
    
        
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-3 mt-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
       
     
    </nav>
  );
};

export default Navbar;
