import React from 'react';
import Image from 'next/image';

const ProjectModal = ({ project, onClose, darkMode }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div 
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl ${
          darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex justify-between items-center p-6 border-b bg-inherit">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-colors ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Project Image */}
          <div className=" flex justify-center items-center rounded-2xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="w-[500px] h-64 object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xl font-bold mb-3">Project Overview</h4>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.description}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-4 rounded-2xl ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <h5 className="font-bold mb-2 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                The Challenge
              </h5>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.problem}
              </p>
            </div>
            <div className={`p-4 rounded-2xl ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
              <h5 className="font-bold mb-2 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                My Solution
              </h5>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* Performance & Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-4 rounded-2xl ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
              <h5 className="font-bold mb-2">Performance Improvements</h5>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.performance}
              </p>
            </div>
            <div className={`p-4 rounded-2xl ${darkMode ? 'bg-gray-700' : 'bg-yellow-50'}`}>
              <h5 className="font-bold mb-2">Business Results</h5>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.results}
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h5 className="font-bold mb-3">Technologies Used</h5>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    darkMode 
                      ? 'bg-blue-900/30 text-blue-300 border border-blue-700' 
                      : 'bg-blue-100 text-blue-700 border border-blue-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-6 border-t">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-2xl font-semibold text-center hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
            >
              View Live Project
            </a>
            <button
              onClick={onClose}
              className={`px-6 py-3 rounded-2xl font-semibold border transition-colors ${
                darkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                  : 'border-gray-300 text-gray-600 hover:bg-gray-100'
              }`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;