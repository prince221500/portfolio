import React, { useState } from 'react';
import { Github, ExternalLink, Code, CheckCircle } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink?: string;
  demoLink?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Algorithm Visualizer",
      description: "Interactive web application that visualizes various sorting and pathfinding algorithms to help understand their working mechanisms.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com",
      demoLink: "https://example.com",
      featured: true
    },
    {
      id: 2,
      title: "Personal Finance Tracker",
      description: "A Java application that helps users track their expenses, income, and savings with data visualization and budget planning features.",
      image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Java", "SQL"],
      githubLink: "https://github.com",
      featured: true
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "A Python-based application that fetches weather data from APIs and provides current and forecasted weather information for any location.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "API"],
      githubLink: "https://github.com/prince221500",
      demoLink: "https://example.com",
      featured: false
    },
    {
      id: 4,
      title: "E-commerce Website",
      description: "A full-stack e-commerce website with product listings, shopping cart, user authentication, and payment integration.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["JavaScript", "HTML", "CSS", "Python"],
      githubLink: "https://github.com/prince221500",
      featured: false
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
      ? projects.filter(project => project.featured) 
      : projects.filter(project => project.tags.includes(filter));
  
  const filters = ['all', 'featured', 'Java', 'Python', 'JavaScript', 'HTML', 'CSS'];

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="mt-2 w-16 h-1 mx-auto bg-blue-600 dark:bg-blue-400 rounded"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Some of the projects I've worked on.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                filter === f
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:transform hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                    <CheckCircle size={14} className="mr-1" />
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <Github size={18} className="mr-1" />
                      <span>Code</span>
                    </a>
                  )}
                  
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Competitive Programming Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900">
                <Code size={32} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">LeetCode</h4>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">250+</p>
              <p className="text-gray-600 dark:text-gray-400">Problems Solved</p>
              <div className="mt-4">
                <a 
                  href="https://leetcode.com/u/Princekumar23/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  View Profile
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900">
                <Code size={32} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Codeforces</h4>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">150+</p>
              <p className="text-gray-600 dark:text-gray-400">Problems Solved</p>
              <div className="mt-4">
                <a 
                  href="https://codeforces.com/profile/Princekumar1319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;