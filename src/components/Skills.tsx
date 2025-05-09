import React from 'react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'Java', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Data Structures', level: 90 },
    { name: 'Algorithms', level: 90 },
    { name: 'Problem Solving', level: 95 },
  ];

  const additionalSkills = [
    { name: 'Git & GitHub', level: 'Intermediate' },
    { name: 'SQL', level: 'Basic' },
    { name: 'Object-Oriented Programming', level: 'Advanced' },
    { name: 'Competitive Programming', level: 'Advanced' },
    { name: 'Web Development', level: 'Intermediate' },
    { name: 'Software Development', level: 'Intermediate' },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="mt-2 w-16 h-1 mx-auto bg-blue-600 dark:bg-blue-400 rounded"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and programming languages I work with.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Additional Skills & Knowledge
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {additionalSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105"
                >
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{skill.name}</h4>
                  <div className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                    {skill.level}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Competitive Programming
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border-l-4 border-blue-600 dark:border-blue-400">
                  <h4 className="font-semibold text-xl text-gray-800 dark:text-gray-200 mb-2">LeetCode</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">Solved 250+ problems</p>
                  <a 
                    href="https://leetcode.com/u/Princekumar23/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Profile →
                  </a>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border-l-4 border-blue-600 dark:border-blue-400">
                  <h4 className="font-semibold text-xl text-gray-800 dark:text-gray-200 mb-2">Codeforces</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">Solved 150+ problems</p>
                  <a 
                    href="https://codeforces.com/profile/Princekumar1319" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Profile →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;