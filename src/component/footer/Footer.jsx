import React from "react";
import { navItems } from "../../static/data";
import { ICONS } from "../../static/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className=" w-[92%] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About Us */}
          <div>
            <h1 className="text-2xl font-bold text-indigo-600">
              Proxi<span className="text-white">AI</span>
            </h1>
            <p className="text-gray-400 text-sm leading-7">
              We are dedicated to providing innovative solutions that help
              businesses thrive and grow. Our team is committed to delivering
              exceptional service with a focus on quality and results.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="ml-20">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-white hover:text-indigo-600 font-medium transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Social Media */}
          <div className="ml-20">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-y-6 flex-col">
              <ICONS.facebook size={25} className=" cursor-pointer" />
              <ICONS.instagram size={25} className=" cursor-pointer" />
              <ICONS.youtube size={25} className=" cursor-pointer" />
              <ICONS.x size={25} className=" cursor-pointer" />
              <ICONS.whatsapp size={25} className=" cursor-pointer" />
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">
              <i className="fas fa-map-marker-alt"></i> 123 Main Street,
              Sunderland, United Kingdom
            </p>
            <p className="text-gray-400">
              <i className="fas fa-phone-alt"></i> +1 (123) 456-7890
            </p>
            <p className="text-gray-400">
              <i className="fas fa-envelope"></i> info@proxi.com
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 PROXI. All rights reserved. | Designed by{" "}
            <a href="https://yourwebsite.com" className="hover:text-indigo-600">
              Your Name
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
