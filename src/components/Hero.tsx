import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-bold tracking-tight text-gray-900 dark:text-white">
              <span className="block text-3xl sm:text-4xl md:text-5xl">Hello, I'm</span>
              <span className="mt-1 block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-600 dark:text-blue-400">
                Prince Kumar
              </span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Pre-Final Year B.Tech Computer Science student at GLAU '26, 
              passionate about problem-solving and software development.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 shadow-lg hover:shadow-xl"
              >
                View Projects
              </a>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-md">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  Available for internships
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt="Prince Kumar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={32} className="text-gray-700 dark:text-gray-300" />
        </a>
      </div>
    </section>
  );
};

export default Hero;