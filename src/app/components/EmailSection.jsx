import React from "react";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="">
        <h5 className="text-xl font-bold text-[#ffcd67] my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-slate-200 mb-4 max-w-md">
          {" "}
          Hey there! I&apos;d love to discuss about web development. Feel free
          to reach out to me my inbox is always open. Whether you have a
          question or just want to say hi, I&apos;ll try my best to get back to
          you!
        </p>
        <div className="socials flex flex-row gap-2 ">
          <Link href="https://github.com/latikaguptak" target="_blank">
            <Github className="text-[#ffcd67] hover:text-white" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/latika-gupta-varshney"
            target="_blank"
          >
            <Linkedin className="text-[#ffcd67] hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="">
        <h5 className="text-xl font-bold text-[#ffcd67] my-2 text-end">
          Contact Me
        </h5>
        <div className="justify-end items-end flex">
          <ul className="list-none text-slate-200  ">
            <li className="flex">
              <p className="my-2"> latika.gupta.108@gmail.com</p>
              <Image
                className="mt-1 mx-1 ml-2 p-2"
                src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
                alt="Linkedin Icon"
                height={40}
                width={40}
              />
            </li>

            <li className="flex items-end justify-end">
              <p className="my-2">LatikaGupta02</p>
              <Link
                href="https://x.com/LatikaGupta02?t=YcDhy_d7trTSmRhw0vMmbw&s=09"
                target="_blank"
              >
                <Image
                  className="mt-1 mx-1 ml-2 p-1 rounded-lg"
                  src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10809.jpg"
                  alt="X Icon"
                  height={40}
                  width={40}
                />
              </Link>
            </li>
            {/* <li className="flex items-end justify-end">
              <p className="my-2">Latika Gupta</p>
              <Link
                href=""
                target="_blank"
              >
                <Image
                  className="mt-1 mx-1 ml-2 p-1 rounded-lg"
                  src="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg"
                  alt="X Icon"
                  height={40}
                  width={40}
                />
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
