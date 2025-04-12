import React from "react";
import { articlesData } from "../static/data";

const Blogs = () => {
  return (
    <React.Fragment>
      <div className="bg-gray-50 p-5">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="inline-block px-6 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold tracking-wide uppercase mb-3">
              Latest Insights
            </div>
            <h2 className="text-4xl text-center md:text-5xl font-extrabold leading-tight mb-6">
              Our <span className="text-indigo-600">Articles</span>
            </h2>
            <p className="text-gray-600 text-center text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover our latest articles covering a wide range of topics, from
              technology and business to lifestyle and sustainability. Stay
              informed and explore the trends shaping the future.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {articlesData.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    By {article.author} | {article.date}
                  </p>
                  <p className="text-gray-700 text-base">
                    {article.content.slice(0, 150)}...
                  </p>
                  <button className="mt-4 text-indigo-600 hover:underline cursor-pointer font-semibold">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Blogs;
