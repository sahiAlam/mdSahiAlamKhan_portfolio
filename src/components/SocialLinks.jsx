import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/md-sahi-00ba7b213/",
      border_style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/sahiAlam",
    },
    {
      id: 3,
      child: (
        <>
          Vercel <SiVercel size={30} />
        </>
      ),
      href: "https://vercel.com/sahialam",
    },
    {
      id: 4,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto: ksahi4088@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          WhatsApp <FaWhatsapp size={30} />
        </>
      ),
      href: "https://wa.me/+916295331089",
      border_style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <>
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0 z-10">
        <ul>
          {links.map(({ id, child, href, border_style, download }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-12 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 delay-100
                ${border_style}`}
            >
              <a
                href={href}
                target="blank"
                download={download}
                rel="noreferrer"
                className="flex items-center justify-between w-full text-white"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialLinks;
