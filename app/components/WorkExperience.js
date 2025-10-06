import React from 'react';

const WorkExperience = () => {
  const experiences = [
    {
      period: "2022 - Present",
      role: "Senior Full Stack Developer",
      company: "Freelance",
      description: "Working with international clients across various industries to deliver scalable web applications.",
      achievements: [
        "Led development of 15+ projects from concept to deployment",
        "Improved application performance by 40% on average",
        "Mentored 5 junior developers"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"]
    },
    {
      period: "2021 - 2022",
      role: "Full Stack Developer",
      company: "TechSolutions Inc.",
      description: "Developed and maintained web applications for clients in the e-commerce and finance sectors.",
      achievements: [
        "Built 3 major e-commerce platforms serving 10,000+ users",
        "Reduced page load time by 60% through optimization",
        "Implemented CI/CD pipelines reducing deployment time by 70%"
      ],
      technologies: ["Next.js", "Express", "PostgreSQL", "Firebase", "Stripe"]
    },
    {
      period: "2020 - 2021",
      role: "Frontend Developer",
      company: "Digital Creations",
      description: "Focused on creating responsive and accessible user interfaces for various web applications.",
      achievements: [
        "Developed 10+ responsive web applications",
        "Improved accessibility scores to 95+",
        "Collaborated with design teams to implement pixel-perfect UIs"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Figma", "Jest"]
    }
  ];

  return (
    <div id="experience" className="relative z-10 w-full max-w-6xl mt-28 px-4">
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-600 shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center dark:text-white mb-4">
          Work <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto text-lg mb-12">
          My professional journey and key achievements
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6 transition-all duration-500 hover:bg-white dark:hover:bg-gray-600 hover:shadow-2xl border border-gray-200 dark:border-gray-600"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="lg:w-2/3">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold dark:text-white mb-2">{exp.role}</h3>
                  <h4 className="text-xl text-blue-600 dark:text-blue-400 mb-4">{exp.company}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {exp.description}
                  </p>
                  
                  <div className="mb-6">
                    <h5 className="font-bold dark:text-white mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="lg:w-1/3 lg:pl-6">
                  <h5 className="font-bold dark:text-white mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready for New Challenges</h3>
          <p className="opacity-90 max-w-2xl mx-auto mb-6">
            I&apos;m excited to bring my skills and experience to new projects and teams. 
            Let&apos;s build something amazing together!
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;