import React from "react";
import { solutionsData } from "../static/data";

const Solution = () => {
  return (
    <React.Fragment>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-4">Our Solutions</h2>
        <p className="text-center md:text-base text-sm text-gray-600 mb-10">
          Discover a comprehensive suite of solutions designed to streamline
          your business operations, enhance customer experiences, and drive
          growth. Whether you're looking to automate processes, harness the
          power of AI, or simply improve your bottom line, our solutions have
          got you covered.
        </p>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {solutionsData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 text-left">
                <p className="text-sm text-indigo-500 font-semibold uppercase mb-1">
                  {item.category}
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Solution;
