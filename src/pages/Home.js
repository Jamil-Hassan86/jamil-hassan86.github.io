import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const phrases = [
    'Computer Science',
    'Data Visualisation',
    'Machine Learning',
    'Front-End Development',
  ];
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[index % phrases.length];

      if (isDeleting) {
        setCurrentText(currentText.slice(0, -1));
        setTypingSpeed(50);
      } else {
        setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setIndex((prevIndex) => prevIndex + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingSpeed, index, phrases]);

  return (
    <div className="min-h-screen bg-[#6a0dad] text-white p-8 text-xl sm:text-2xl md:text-3xl">
      <div className="max-w-4xl mx-auto text-center mt-16">
        <h1 className="text-5xl font-extrabold tracking-wide text-xl sm:text-2xl md:text-3xl">
          Welcome!
        </h1>
        <p className="mt-6 text-2xl font-mono leading-relaxed text-xl sm:text-2xl md:text-3xl">
          Hi, I'm <span className="font-bold text-yellow-300">Jamil</span>, and I am interested in
        </p>
        <p className="mt-2 text-3xl font-mono text-yellow-400 text-xl sm:text-2xl md:text-3xl">
          {currentText}
          <span className="animate-blink">|</span>
        </p>
        <div className="mt-20 text-center text-xl sm:text-2xl md:text-3xl">
        <a
          href="https://github.com/jamil-hassan86"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-yellow-400 text-gray-900 font-semibold text-lg rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-300"
        >
          <FontAwesomeIcon icon={faGithub} className="mr-2 text-xl" />
          Visit My GitHub
        </a>
      </div>
      </div>

      <div className="mt-20 flex flex-col items-center space-y-6">
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-2xl transform transition-transform hover:scale-105 hover:shadow-xl glow-effect">
          <h2 className="text-3xl font-semibold mb-4 text-center text-xl sm:text-2xl md:text-3xl">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-xl sm:text-2xl md:text-3xl">
            I am an aspiring and passionate Computer Scienctist.
            I have broad interests in various fields of Computer Science, whether it'd would be about data projects, 
            making web applications, or even trying out Machine Learning projects. I am always willing to learn new things if it means I can improve my skills and have fun while doing it.
          </p>
        </div>
      </div>

      
      <div className="mt-20 text-center">
        <a
          href="projects"
          className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 font-semibold text-lg rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-300"
        >
          Check Out My Projects
        </a>
      </div>
    </div>
  );
};

export default Home;