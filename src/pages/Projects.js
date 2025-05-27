import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  const projects = [
    {
      title: 'Full-Stack Web Application. Fitness Website for South-Asians',
      description:
        'A Group project that consisted of creating a full-stack web application based around fitness for South Asians to use.',
      githubLink: 'https://github.com/jamil-hassan86/Website-Project',
      image: 'https://source.unsplash.com/600x400/?fitness', // Placeholder image
    },
    {
      title: 'Machine Learning project for diabetes prediction',
      description:
        'A Machine Learning project that predicts whether a person has diabetes or not based on their health data, specifically tailored towards vulnerable groups.',
      githubLink: 'https://github.com/jamil-hassan86/diabetes-predictor',
      image: 'https://source.unsplash.com/600x400/?diabetes', // Placeholder image
    }
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-500 hover:text-blue-700"
                  >
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
