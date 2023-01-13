import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-5">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-normal lg:text-xl py-4">
          Hello, I'm Md Sahi Alam Khan, a front-end web developer with 1 year of
          experience. I specialize in creating visually stunning and
          user-friendly websites using the latest technologies and best
          practices. My expertise includes proficiency in HTML, CSS,
          JavaScript,and modern JavaScript libraries such as React.
        </p>

        <p className="text-normal lg:text-xl py-4">
          I have a strong background in designing and implementing responsive
          web designs that look great on any device. I have experience working
          on a wide range of projects, from small landing pages to large-scale
          web applications for various industries, including e-commerce,
          healthcare, and finance.
        </p>
        <p className="text-normal lg:text-xl py-4">
          I am passionate about creating great user experiences and am always
          eager to take on new challenges. I believe that great websites are not
          just about how they look, but also how they function.
        </p>
        <p className="text-normal lg:text-xl py-4">
          If you're looking for a front-end developer who can bring your ideas
          to life and create a website that exceeds your expectations, please
          don't hesitate to contact me.
        </p>
      </div>
    </div>
  );
};

export default About;
