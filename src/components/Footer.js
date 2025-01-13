import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black-800 text-blue p-4 text-center">
      <div className="flex justify-center items-center space-x-4">
        <a
          href="https://github.com/jamil-hassan86"  // Replace with your actual GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-3xl text-white hover:text-yellow-400 transition-all duration-300"
        >
          <FontAwesomeIcon icon={faGithub} className="mr-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;