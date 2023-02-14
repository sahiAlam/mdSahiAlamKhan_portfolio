import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { BsArrowRightShort } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiVercel } from "react-icons/si";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="lg:max-w-screen-lg  mx-auto flex flex-col items-center justify-between h-full px-2 sm:px-3 sm:pt-24 md:flex-row md:space-x-12">
          <div className="flex flex-col justify-center h-full lg:w-4/5">
            <h2 className="text-4xl md:text-5xl lg:7xl font-bold text-white">
              I'm a Front End Web Developer
            </h2>
            <p className="text-gray-400 py-4 max-w-md text-md md:text-xl">
              Hi, I'm an undergraduate student from Government College of
              Engineering and Ceramic Technology. My Specialization is in
              Information Technology.
            </p>
            {/* mobile social icons  */}
            <SmallScreenSocial />
            <div className="flex space-x-6">
              <a
                href="./resume.pdf"
                target="_blank"
                // download="Md Sahi Alam Khan | Resume"
                className="group text-white w-fit px-3 py-2 my-4 md:px-6 md:py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-500"
              >
                Resume
                <span className="group-hover:rotate-90 duration-300">
                  <BsArrowRightShort size={25} className="ml-1" />
                </span>
              </a>
              <Link
                to="contact"
                smooth
                duration={500}
                className="group text-white w-fit px-3 py-2 my-4 md:px-6 md:py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-500"
              >
                Let's Chat
                <span className="group-hover:rotate-90 duration-300">
                  <BsArrowRightShort size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
          <div className="w-4/5">
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-md w-4/6 mini:w-3/5 hue-rotate-15 saturate-150 mx-auto md:w-full lg:rounded-[50%] brightness-50 md:border-2 md:border-cyan-300"
            />
          </div>
        </div>
      </div>
    </>
  );
};

// Mobile Social Icon Component
const SmallScreenSocial = () => {
  const socialLinks = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/md-sahi-00ba7b213/",
      border_style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/sahiAlam",
    },
    {
      id: 3,
      child: (
        <>
          <SiVercel size={25} />
        </>
      ),
      href: "https://vercel.com/sahialam",
    },
    {
      id: 4,
      child: (
        <>
          <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto: ksahi4088@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          <FaWhatsapp size={25} />
        </>
      ),
      href: "https://wa.me/+916295331089",
    },
  ];
  return (
    <>
      <div className="flex text-white lg:hidden">
        <ul className="flex space-x-4 my-4">
          {socialLinks.map(({ id, child, href }) => (
            <li key={id} className="">
              <a href={href} target="blank">
                <>{child}</>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;