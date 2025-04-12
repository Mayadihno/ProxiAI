import React, { useState } from "react";
import { pastProjectsData } from "../../static/data";

const PastProject = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll
    ? pastProjectsData
    : pastProjectsData.slice(0, 6);
  return (
    <React.Fragment>
      <section className="bg-white py-16 px-4 md:px-12 lg:px-20 text-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 px-6">
            <div className="inline-block px-6 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold tracking-wide uppercase mb-3">
              Our Work
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Past <span className="text-indigo-600">Projects</span>
            </h2>
            <p className="text-gray-600 md:text-base text-sm max-w-3xl mx-auto mb-12 leading-relaxed">
              Browse a selection of our completed projects, ranging from fintech
              and health tech to e-learning and logistics. Each project
              highlights our commitment to innovation, problem-solving, and
              excellence, demonstrating how we've helped various industries
              thrive.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>

                  <div className="text-gray-600 space-y-2 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">
                        Problem:
                      </span>
                      <p className="mt-1">{project.problem}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-gray-700">
                        Solution:
                      </span>
                      <p className="mt-1">{project.solution}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-gray-700">
                        Impact:
                      </span>
                      <p className="mt-1">{project.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-6 py-3 cursor-pointer bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PastProject;
