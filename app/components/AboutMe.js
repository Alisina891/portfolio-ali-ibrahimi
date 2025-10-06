import React from 'react';

const AboutMe = () => {
  return (
    <div id="about" className="relative z-10 w-full max-w-6xl mt-28 px-4">
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-600 shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center dark:text-white mb-4">
          About <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Me</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <h3 className="text-2xl font-bold dark:text-white mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I&apos;m an enthusiastic Full Stack Developer with 2 years of hands-on experience and ongoing learning 
                in modern web technologies. Based in Afghanistan, I have built personal and client-focused projects 
                to deliver practical, high-quality solutions.
              </p>
              <p>
                My focus includes <strong>E-commerce platforms</strong>, 
                <strong> SaaS applications</strong>, and <strong>real-time dashboards</strong>. 
                I enjoy tackling complex problems and creating efficient, scalable systems.
              </p>
              <p>
                When I&apos;m not coding, I explore new technologies, contribute to open-source projects, 
                and continuously enhance my skills through practice and learning.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-2xl">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/30 rounded-2xl">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">8+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/30 rounded-2xl">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">10+</div>
                <div className="text-gray-600 dark:text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-2xl">
                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">3+</div>
                <div className="text-gray-600 dark:text-gray-300">Countries Served</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-2xl">
              <h4 className="font-bold text-lg dark:text-white mb-3">What I&apos;m Strong At</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Dashboard & Admin Panel Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  E-commerce & Payment Integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Real-time Data Applications
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  SaaS Product Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  API Design & Microservices Architecture
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-2xl">
              <h4 className="font-bold text-lg dark:text-white mb-3">My Approach</h4>
              <p className="text-gray-600 dark:text-gray-300">
                I prioritize clean code, testing, and user-centered design. 
                Every project is an opportunity to solve real problems 
                and deliver meaningful, practical experiences for users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
