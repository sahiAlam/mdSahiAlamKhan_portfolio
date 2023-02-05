import React from "react";
import { useState } from "react";
const Contact = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContactDetails({ ...contactDetails, [name]: value });
  };

  const { name, email, message } = contactDetails;

  const submitContactDetails = async (event) => {
    event.preventDefault();
    if (name && email && message) {
      const response = await fetch(
        "https://portfoliocontact-b6bb4-default-rtdb.firebaseio.com/contactDetails.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      if (response) {
        setContactDetails({
          name: "",
          email: "",
          message: "",
        });
        alert("Data sent Successfully..");
      } else {
        alert("Data must be filled..");
      }
    } else {
      alert("Data must be filled..");
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 px-2 sm:px-3 py-20 text-white"
    >
      <div className="max-w-screen-lg mx-auto h-auto">
        <div className="pb-8">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Me
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              autoComplete="off"
              onChange={inputData}
              value={contactDetails.name}
              className="p-2 bg-transparent border-2 rounded-md border-opacity-60 border-gray-500 text-white focus:outline-none focus:bg-black  focus:border-opacity-100"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              autoComplete="off"
              onChange={inputData}
              value={contactDetails.email}
              className="my-4 p-2 bg-transparent border-2 border-opacity-60 rounded-md border-gray-500 text-white focus:outline-none focus:bg-black  focus:border-opacity-100"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              autoComplete="off"
              onChange={inputData}
              value={contactDetails.message}
              rows="10"
              className="p-2 bg-transparent border-2 border-opacity-60 rounded-md border-gray-500 text-white focus:outline-none  focus:bg-black resize-none focus:border-opacity-100"
            ></textarea>

            <button
              onClick={submitContactDetails}
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;