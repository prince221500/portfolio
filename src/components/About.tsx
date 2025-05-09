import React from 'react';
import { Code, GraduationCap, Award, Laptop } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="mt-2 w-16 h-1 mx-auto bg-blue-600 dark:bg-blue-400 rounded"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A brief introduction to who I am and what I do.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Hi there! I'm Prince Kumar
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm a 21-year-old Computer Science student currently in my pre-final year at GLA University, 
              expected to graduate in 2026. I'm passionate about software development, problem-solving, 
              and creating efficient solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              With a strong foundation in algorithms and data structures, I've solved over 250 problems 
              on LeetCode and 150+ on Codeforces. I enjoy tackling complex challenges and continuously 
              expanding my knowledge in various programming languages and technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold text-gray-700 dark:text-gray-300">Name:</p>
                <p className="text-gray-600 dark:text-gray-400">Prince Kumar</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold text-gray-700 dark:text-gray-300">Age:</p>
                <p className="text-gray-600 dark:text-gray-400">21 Years</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold text-gray-700 dark:text-gray-300">Location:</p>
                <p className="text-gray-600 dark:text-gray-400">India</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold text-gray-700 dark:text-gray-300">Email:</p>
                <p className="text-gray-600 dark:text-gray-400">pk2302861@gmail.com</p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Me
            </a>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 mr-4">
                  <Code size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Competitive Programmer
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Solved 250+ problems on LeetCode and 150+ problems on Codeforces, 
                with a strong understanding of algorithms and data structures.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 mr-4">
                  <GraduationCap size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Computer Science Student
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Pursuing B.Tech in Computer Science at GLA University, 
                with a focus on programming and software development.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 mr-4">
                  <Laptop size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Software Developer
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Proficient in Java, Python, HTML, CSS, and JavaScript, with a 
                passion for creating efficient and innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;