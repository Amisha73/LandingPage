import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold text-lime-500">LOGO</h1>
          <p className="mt-2 text-sm">
            Delivering excellence in food delivery and online services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li className="hover:text-lime-500 transition cursor-pointer">Home</li>
            <li className="hover:text-lime-500 transition cursor-pointer">Services</li>
            <li className="hover:text-lime-500 transition cursor-pointer">About</li>
            <li className="hover:text-lime-500 transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-white">Follow Us</h2>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="#" className="hover:text-lime-500 transition">Facebook</a>
            <a href="#" className="hover:text-lime-500 transition">Twitter</a>
            <a href="#" className="hover:text-lime-500 transition">Instagram</a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 text-center text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
