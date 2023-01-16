import React from "react";
import { Link } from "react-scroll";

import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import heroImage from "../assets/heroImage.jpg";

const Footer = () => {
  const footerLinks = [
    {
      id: 1,
      src: "home",
    },
    {
      id: 2,
      src: "about",
    },
    {
      id: 3,
      src: "skils",
    },
    {
      id: 4,
      src: "projects",
    },
    {
      id: 5,
      src: "contact",
    },
  ];

  const footerSocialLinks = [
    {
      id: 1,
      src: <FaFacebook />,
      href: "https://www.facebook.com/profile.php?id=100025288412081",
    },
    {
      id: 2,
      src: <FaLinkedin />,
      href: "https://www.linkedin.com/in/md-sahi-00ba7b213/",
    },
    {
      id: 3,
      src: <FaGithub />,
      href: "https://github.com/sahiAlam",
    },
    {
      id: 4,
      src: <FaInstagram />,
      href: "https://www.instagram.com/0mdsahialamkhan0/",
    },
    {
      id: 5,
      src: <SiVercel />,
      href: "https://vercel.com/sahialam",
    },
  ];
  return (
    // bg-gradient-to-b from-gray-800 via-gray-900 to-black
    <>
      <div className="bg-black px-2 sm:px-3 pt-20">
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full pt-10 md:pt-16">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:px-0 sm:px-3 px-2 border-b-2 border-b-gray-800 text-white pb-10">
            <div className="text-center text-gray-400 flex flex-col items-center space-y-3">
              <Link to="home">
                <h1 className="font-numbers text-gray-400 font-bold text-2xl md:text-4xl lg:text-5xl cursor-pointer inline-block">
                  Md. Sahi
                </h1>
              </Link>
              <img
                className="inline-block h-2w-24 w-24 rounded-full ring-2 ring-white"
                src={heroImage}
                alt="My avatar"
              />
            </div>
            <div className="mx-auto">
              <h3 className="text-2xl text-center sm:text-left sm:text-3xl md:text-4xl pb-1.5 font-bold text-gray-400">
                Links
              </h3>
              <ul className="py-4 space-y-3 text-gray-500">
                {footerLinks.map(({ id, src }) => (
                  <li key={id} className="uppercase text-md cursor-pointer md:hover:text-gray-200 transition md:hover:scale-105 text-center sm:text-start">
                    <Link to={src}>{src}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mx-auto">
              <h3 className="text-2xl text-center sm:text-left sm:text-3xl md:text-4xl pb-1.5 font-bold text-gray-400">
                Myself
              </h3>
              <ul className="py-3 text-gray-500">
                <li className=" space-y-1 text-center sm:text-start">
                  <p className="capitalize text-center sm:text-start">Md. Sahi Alam khan</p>
                  <p className="capitalize text-center sm:text-start">GCECT, kolkata</p>
                  <p className="capitalize text-center sm:text-start">west bengal</p>
                  <p className="capitalize text-center sm:text-start">ksahi4088@gmail.com</p>
                  <p className="capitalize text-center sm:text-start font-numbers">phone: +916295331089</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-white py-10 md:py-20">
            <ul className="flex items-center justify-center space-x-3">
              {footerSocialLinks.map(({ id, src, href }) => (
                <li
                  key={id}
                  className="py-2.5 md:py-3 px-2.5 md:px-3 rounded-full border-2 border-gray-400 md:hover:text-gray-400 md:hover:scale-105 cursor-pointer"
                >
                  <a href={href} target="blank">
                    <>{src}</>
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-center py-6 px-2 text-gray-400">
              ©Copyright. All right reserved. This portfolio made with ❤️ by Me.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
