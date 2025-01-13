import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold text-center text-gray-800">My Projects</h1>
      <div className="mt-6 space-y-4">
        <div className="p-4 bg-white rounded shadow-md">
          <h2 className="text-xl font-bold">Full-Stack Web Application. Fitness Website for South-Asians</h2>
          <p>A Group project that consisted of creating a full-stack web application based around fitness for South Asians to use.</p>
        </div>
        <div className="flex justify-center items-center space-x-4">
                  <a
                    href="https://github.com/jamil-hassan86/Website-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-3xl text-white hover:text-yellow-400 transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faGithub} className="mr-2 text-xl sm:text-2xl" />
                    Check it out here!
                  </a>
                </div>
        <div className="mt-10 p-4 bg-white rounded shadow-md">
          <h2 className="text-xl font-bold">Currently Working on a Machine Learning project for diabetes prediction</h2>
          <p>As of now, I am currently working towards creating a machine learning diabetes predictor tailored for ethnic minority groups</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;