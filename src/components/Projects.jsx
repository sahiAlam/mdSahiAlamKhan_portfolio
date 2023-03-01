import React from "react";
// import { Link } from "react-scroll";
import project1 from "../assets/portfolio/project1.jpg";
import project2 from "../assets/portfolio/project2.jpg";
import project3 from "../assets/portfolio/project3.jpg";
import project4 from "../assets/portfolio/project4.jpg";
import project5 from "../assets/portfolio/project5.jpg";
import project6 from "../assets/portfolio/project6.jpg";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
      demo_link: "https://exchange-react-app-sahi-project3.vercel.app/",
      code_link: "https://github.com/sahiAlam/exchange-react-app-sahi-project3",
    },
    {
      id: 2,
      src: project2,
      demo_link: "https://weather-report-app-sahil.vercel.app/",
      code_link: "https://github.com/sahiAlam/weatherApp",
    },
    {
      id: 3,
      src: project3,
      demo_link: "https://code-festival.vercel.app/",
      code_link: "https://github.com/sahiAlam/codeFestival",
    },
    {
      id: 4,
      src: project4,
      demo_link: "https://sahialam.github.io/tailwind-project/",
      code_link: "https://github.com/sahiAlam/tailwind-project",
    },
    {
      id: 5,
      src: project5,
      demo_link: "https://code-festival-hsl5.vercel.app/",
      code_link: "https://github.com/sahiAlam/landing-page",
    },
    {
      id: 6,
      src: project6,
      demo_link: "https://sahialam.github.io/university/",
      code_link: "https://github.com/sahiAlam/university",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto py-20 px-4 sm:px-8"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500 pb-1">
            My Projects
          </p>
          <p className="py-3">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0">
          {portfolios.map(({ id, src, demo_link, code_link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 md:hover:scale-105 brightness-90 md:hover:brightness-50"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo_link} target="blank">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code_link} target="blank">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
