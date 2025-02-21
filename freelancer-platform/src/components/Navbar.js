import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Freelancer Platform</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/jobs" className="hover:underline">Jobs</Link></li>
          <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
          <li><Link to="/profile" className="hover:underline">Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
