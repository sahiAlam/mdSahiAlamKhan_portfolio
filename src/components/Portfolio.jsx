import React from "react";
import project1 from "../assets/portfolio/project1.jpg";
import project2 from "../assets/portfolio/project2.jpg";
import project3 from "../assets/portfolio/project3.jpg";
import project4 from "../assets/portfolio/project4.jpg";
import project5 from "../assets/portfolio/project5.jpg";
import project6 from "../assets/portfolio/project6.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
    },
    {
      id: 2,
      src: project2,
    },
    {
      id: 3,
      src: project3,
    },
    {
      id: 4,
      src: project4,
    },
    {
      id: 5,
      src: project5,
    },
    {
      id: 6,
      src: project6,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto pt-20"
    >
      <div className="max-w-screen-lg p-5 mx-auto flex flex-col justify-center w-full h-full pb-24">
        <div className="pb-8">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-2">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 md:hover:scale-105 brightness-90 md:hover:brightness-50"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;