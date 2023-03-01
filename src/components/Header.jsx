import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-scroll";

const Header = () => {
  const [mobileNav, setMobilenav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <>
      <div className="dark:bg-white flex items-center justify-between xl:px-16 sm:px-3 px-2 bg-black text-white h-14  sm:h-16 md:h-20 w-full sticky top-0 z-20">
        <div className="z-10">
          <h1 className="text-md sm:text-xl md:text-2xl font-signature cursor-pointer font-bold">
            <Link to="home" smooth>
              Md. Sahi
            </Link>
          </h1>
        </div>
        <button className="block md:hidden">
          <a
            href="tel:+916295331089"
            className="flex mini:hidden items-center font-numbers text-gray-400"
          >
            <FiPhoneCall className="mr-2 animate-ping" /> +91 6295331089
          </a>
        </button>
        <div>
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="text text-gray-400 cursor-pointer capitalize px-4 hover:scale-110 duration-200 hover:text-white"
              >
                <Link to={link} smooth>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="cursor-pointer text-gray-400 z-10 relative"
            onClick={() => setMobilenav(!mobileNav)}
          >
            {mobileNav ? (
              <FaTimes size={28} className="md:hidden" />
            ) : (
              <FaBars size={28} className="md:hidden" />
            )}
          </div>

          {/* Mobile Hamburger Menu  */}
          {mobileNav ? (
            <ul className="flex items-center justify-center mt-1  flex-col absolute left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="flex flex-col py-6 px-4 text-2xl cursor-pointer capitalize text-gray-400"
                >
                  <Link
                    onClick={() => setMobilenav(!mobileNav)}
                    to={link}
                    smooth
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Header;