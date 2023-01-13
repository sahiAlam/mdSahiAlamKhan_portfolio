import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Header = () => {
  const [mobileNav, setMobilenav] = useState(false);
  const [theme, setTheme] = useState("dark");

  // if local storage is empty save theme as light
  // useEffect(() => {
  //   if (localStorage.getItem("theme") === null) {
  //     localStorage.setItem("theme", "dark");
  //   }
  // }, [theme]);

  useEffect(() => {
    // select html elem
    const html = document.querySelector("html");
    //add or remove class dark in html elem according to theme in localstorage.
    if (localStorage.getItem("theme") === "dark") {
      html.classList.add("dark");
      setTheme("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  // handle switch theme
  // const handleThemeSwitch = () => {
  //   if (localStorage.getItem("theme") === "light") {
  //     setTheme("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     setTheme("light");
  //     localStorage.setItem("theme", "light");
  //   }
  // };

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
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <>
      <div className="dark:bg-white flex items-center justify-between px-16 bg-black text-white h-16 md:h-20 w-full fixed z-20">
        <div className="z-10">
          <h1 className="text-xl md:text-2xl font-signature cursor-pointer">
            <Link to="home" smooth duration="700" delay="100">
              Md. Sahi
            </Link>
          </h1>
        </div>
        <button className="block md:hidden">
          <BsFillMoonStarsFill />
        </button>
        <a
          href="./resume.pdf"
          download="true"
          className="block md:hidden bg-gradient-to-r from-cyan-400 to-blue-500 rounded-sm px-2 py-1"
        >
          Resume
        </a>
        <div>
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="text text-gray-400 cursor-pointer capitalize px-4 hover:scale-110 duration-200 hover:text-white"
              >
                <Link to={link} smooth duration="600" delay="100">
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
              <FaTimes size={30} className="md:hidden" />
            ) : (
              <FaBars size={30} className="md:hidden" />
            )}
          </div>

          {/* Mobile Hamburger Menu  */}
          {mobileNav ? (
            <ul className="flex items-center justify-center  flex-col absolute left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="flex flex-col py-6 px-4 text-2xl cursor-pointer capitalize text-gray-400"
                >
                  <Link
                    onClick={() => setMobilenav(!mobileNav)}
                    to={link}
                    smooth
                    duration={800}
                    delay="100"
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
