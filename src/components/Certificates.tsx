import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Certificates</span>
          </h2>
          <div className="mt-2 w-16 h-1 mx-auto bg-blue-600 dark:bg-blue-400 rounded"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional certifications and achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
            <div className="p-6">
              <div className="flex items-center justify-center mb-6">
                <img 
                  src="/google.jpg" 
                  alt="Google Cloud Certificate" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Prompt Design in Vertex AI
              </h3>
              
              <div className="flex items-center mb-4">
                <Award className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                <span className="text-gray-600 dark:text-gray-400">Google Cloud</span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Machine Learning & AI Skill Badge - Introductory Level
              </p>
              
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                <span className="mr-2">View Certificate</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;