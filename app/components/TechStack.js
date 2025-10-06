"use client";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";

const TechStack = () => {
  const technologies = [
    { name: "React", icon: <FaReact className="text-blue-500" />, category: "Frontend" },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-800 dark:text-white" />, category: "Frontend" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, category: "Frontend" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, category: "Frontend" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, category: "Backend" },
    { name: "Express", icon: <SiExpress className="text-gray-700 dark:text-gray-300" />, category: "Backend" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, category: "Database" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-600" />, category: "Database" },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, category: "Backend" },
    { name: "AWS", icon: <FaAws className="text-orange-500" />, category: "DevOps" },
    { name: "Docker", icon: <FaDocker className="text-blue-400" />, category: "DevOps" },
    { name: "Git", icon: <FaGitAlt className="text-red-500" />, category: "Tools" },
  ];

  const categories = [...new Set(technologies.map((tech) => tech.category))];

  return (
    <div id="skills" className="relative z-10 w-full max-w-6xl mt-28 px-4">
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-600 shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center dark:text-white mb-4">
          Tech{" "}
          <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            Stack
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto text-lg mb-12">
          Technologies I use to bring ideas to life
        </p>

        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold dark:text-white mb-6 border-b border-gray-200 dark:border-gray-600 pb-2">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies
                .filter((tech) => tech.category === category)
                .map((tech, index) => (
                  <div
                    key={tech.name}
                    className="group bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6 text-center transition-all duration-500 hover:bg-white dark:hover:bg-gray-600 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 dark:border-gray-600"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-5xl mb-3 transition-transform duration-500 group-hover:scale-110">
                      {tech.icon}
                    </div>
                    <div className="font-medium dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tech.name}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
          <p className="opacity-90 max-w-2xl mx-auto">
            I&apos;m constantly exploring new technologies and frameworks to stay at
            the forefront of web development. Currently diving deeper into AI/ML
            integration and Web3 technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
