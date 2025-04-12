import React, { useState } from "react";
import { promotionalEventsData, upcomingEventsData } from "../static/data";

const Event = () => {
  const [viewGallery, setViewGallery] = useState(null);
  const [activeTab, setActiveTab] = useState("promotional");

  const handleViewGallery = (index, type) => {
    setViewGallery({ index, type });
  };

  const renderEventCards = (events, type) => {
    return events.map((event, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105"
      >
        <img
          src={event.images[0]}
          alt={event.title}
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
          <p className="text-gray-600 text-base mb-4">{event.description}</p>
          <button
            onClick={() => handleViewGallery(index, type)}
            className="inline-block cursor-pointer px-6 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold tracking-wide uppercase"
          >
            View Gallery
          </button>
        </div>
      </div>
    ));
  };

  const renderGalleryModal = () => {
    if (!viewGallery) return null;
    const { index, type } = viewGallery;
    const event =
      type === "promotional"
        ? promotionalEventsData[index]
        : upcomingEventsData[index];

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-3/4 max-w-4xl">
          <h3 className="text-2xl font-semibold mb-4">{event.title}</h3>
          <div className="flex justify-center space-x-4">
            {event.images.map((image, i) => (
              <img
                key={i}
                src={image}
                alt={`Gallery Image ${i + 1}`}
                className="w-32 h-32 object-cover rounded-lg"
              />
            ))}
          </div>
          <button
            onClick={() => setViewGallery(null)}
            className="mt-4 text-indigo-600 font-semibold cursor-pointer"
          >
            Close Gallery
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <div className="inline-flex gap-4 justify-center mb-6">
          <button
            className={`px-6 py-2 rounded-full cursor-pointer text-sm font-semibold tracking-wide uppercase transition ${
              activeTab === "promotional"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("promotional")}
          >
            Promotional Events
          </button>
          <button
            className={`px-6 py-2 rounded-full cursor-pointer text-sm font-semibold tracking-wide uppercase transition ${
              activeTab === "upcoming"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming Events
          </button>
        </div>

        <h2 className="text-4xl font-extrabold leading-tight mb-4">
          Our{" "}
          <span className="text-indigo-600 capitalize">{activeTab} Events</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          {activeTab === "promotional"
            ? "Explore our exciting promotional events with exclusive offers, giveaways, and more!"
            : "Be part of our upcoming events and stay ahead of the trends with expert speakers, workshops, and more."}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {activeTab === "promotional"
          ? renderEventCards(promotionalEventsData, "promotional")
          : renderEventCards(upcomingEventsData, "upcoming")}
      </div>

      {renderGalleryModal()}
    </div>
  );
};

export default Event;
