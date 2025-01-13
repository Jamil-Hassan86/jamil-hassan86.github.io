import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 shadow-md">
      <ul className="flex space-x-8 text-white justify-center text-xl sm:text-2xl">
        <li>
          <Link
            to="/"
            className="hover:text-yellow-400 transition-all duration-300 active:text-yellow-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="hover:text-yellow-400 transition-all duration-300 active:text-yellow-500"
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;