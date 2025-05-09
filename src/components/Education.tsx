import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "GLA University",
      location: "Mathura",
      period: "2022 - 2026",
      description: "Currently pursuing B.Tech in Computer Science with a focus on programming, data structures, algorithms, and software development.",
      courses: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management Systems", "Operating Systems", "Computer Networks"]
    },
    {
      id: 2,
      degree: "Science Intermediate",
      institution: "D.A.V PG College",
      location: "Siwan",
      period: "2020 - 2022",
      description: "Completed intermediate education with focus on Science stream.",
      percentage: "76.8%",
      courses: ["Physics", "Chemistry", "Mathematics"]
    },
    {
      id: 3,
      degree: "Science Matric",
      institution: "Shree Krishna Ojha Balika High School",
      location: "Tarwan Parsa, Siwan",
      period: "2019 - 2020",
      description: "Completed matriculation with Science stream.",
      percentage: "81.8%",
      courses: ["Science", "Mathematics", "Social Science", "Languages"]
    }
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Education</span>
          </h2>
          <div className="mt-2 w-16 h-1 mx-auto bg-blue-600 dark:bg-blue-400 rounded"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic background and qualifications.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900 rounded"></div>
          
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                } md:even:flex-row-reverse md:odd:flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-800 z-10 flex items-center justify-center">
                  <GraduationCap size={16} className="text-white" />
                </div>
                
                {/* Content box */}
                <div className={`w-5/12 md:w-5/12 ${
                  index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'
                } md:even:mr-auto md:even:pr-8 md:odd:ml-auto md:odd:pl-8`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {item.degree}
                    </h3>
                    <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">
                      {item.institution}
                    </h4>
                    
                    <div className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      <span>{item.period}</span>
                    </div>
                    
                    <div className="flex items-center mb-4 text-gray-600 dark:text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      <span>{item.location}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {item.description}
                    </p>

                    {item.percentage && (
                      <div className="mb-4">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">Percentage: </span>
                        <span className="text-blue-600 dark:text-blue-400">{item.percentage}</span>
                      </div>
                    )}
                    
                    <div>
                      <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Key Subjects:</h5>
                      <div className="flex flex-wrap gap-2">
                        {item.courses.map((course, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="w-5/12 md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;