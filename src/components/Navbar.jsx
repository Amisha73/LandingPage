import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div>
        <h1 className="text-2xl text-lime-500 font-extrabold">LOGO</h1>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 text-lg font-medium text-gray-700">
        <li className="hover:text-lime-500 cursor-pointer transition">Home</li>
        <li className="hover:text-lime-500 cursor-pointer transition">Services</li>
        <li className="hover:text-lime-500 cursor-pointer transition">About</li>
        <li className="hover:text-lime-500 cursor-pointer transition">Contact</li>
      </ul>

      {/* Auth Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 text-lg font-semibold text-gray-700 hover:text-lime-500 transition">
          Signup
        </button>
        <button className="px-5 py-2 bg-lime-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-lime-600 transition">
          Signin
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
