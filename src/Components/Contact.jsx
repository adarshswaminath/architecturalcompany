import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function Contact() {
  return (
    <div className="bg-gray-100" id="contact">
      <div className="container mx-auto py-12 px-4 md:py-16 md:px-8 lg:py-20 lg:px-12 xl:py-24 xl:px-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-semibold mb-2 lg:mb-3 xl:mb-6">
            C O N T A C T
          </h1>
          <p className="text-lg leading-relaxed">
            Dolor deserunt culpa ipsum fugiat officia sunt dolor fugiat sunt sint reprehenderit.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <input
              type="text"
              className="p-4 shadow-lg border-b-2 border-black rounded focus:outline-none focus:border-blue-500"
              placeholder="Name..."
            />
            <input
              type="email"
              className="p-4 shadow-lg border-b-2 border-black rounded focus:outline-none focus:border-blue-500"
              placeholder="Email..."
            />
            <button className="flex items-center justify-center p-4 bg-black text-white rounded shadow-lg transform transition-transform hover:scale-105 focus:outline-none">
              SUBMIT <AiOutlineArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
