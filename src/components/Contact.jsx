import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col md:px-5 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            Cotact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/ce70118c-3f95-42b4-a577-9c5eb63a075a"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              autoComplete="off"
              className="p-2 bg-transparent border-2 rounded-md border-opacity-60 border-gray-500 text-white focus:outline-none focus:bg-black  focus:border-opacity-100"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              required
              autoComplete="off"
              className="my-4 p-2 bg-transparent border-2 border-opacity-60 rounded-md border-gray-500 text-white focus:outline-none focus:bg-black  focus:border-opacity-100"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              autoComplete="off"
              rows="10"
              className="p-2 bg-transparent border-2 border-opacity-60 rounded-md border-gray-500 text-white focus:outline-none  focus:bg-black resize-none focus:border-opacity-100"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;