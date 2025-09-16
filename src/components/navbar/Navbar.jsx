import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="flex justify-between items-center w-full max-w-6xl">
        <div>
          <Link className="text-3xl font-bold text-gray-900 mb-2" to="/">
            Navbar
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li>Home</li>
          <li>About</li>
          <Link to="/contact">Contact</Link>
        </ul>
        <div>
          <ul className="flex space-x-6">
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
