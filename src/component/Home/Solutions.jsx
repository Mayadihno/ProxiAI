import React, { useState } from "react";
import { solutionsData } from "../../static/data";

const Solutions = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleSolutions = showAll ? solutionsData : solutionsData.slice(0, 6);

  return (
    <React.Fragment>
      {/* Who We Are Section */}
      <div className="max-w-7xl mx-auto my-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h3 className="text-3xl font-bold mb-4">Who We Are</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            We are a forward-thinking digital solutions agency committed to
            empowering businesses through innovation. Our team blends
            technology, creativity, and strategy to deliver scalable solutions
            that solve real-world problems. From AI-driven insights to cloud
            automation, our goal is to help you grow smarter and faster in
            today’s ever-changing landscape.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Team working together"
            className="rounded-2xl w-full h-auto shadow-lg object-contain"
          />
        </div>
      </div>
      <section className="w-full px-6 md:px-12 lg:px-20 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-6 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold tracking-wide uppercase mb-3">
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Our <span className="text-indigo-600">Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
            Discover a comprehensive suite of solutions designed to streamline
            your operations, enhance productivity, and unlock new opportunities.
            Whether you're aiming to automate workflows, harness the power of
            AI, or build smarter customer experiences, we’ve got the tools and
            talent to make it happen.
          </p>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {visibleSolutions.map((item, index) => (
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

          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-12 cursor-pointer px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Solutions;
