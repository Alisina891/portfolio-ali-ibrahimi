'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Menu, X, Download, ExternalLink, Github, Linkedin, Mail, MapPin, ChevronRight,
  Briefcase, ShoppingCart, Code, Database, Server, Palette, Zap 
} from "lucide-react"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      id: 1,
      title: "JobShip Platform",
      description: "A comprehensive job search platform with AI-powered matching, admin panel, and real-time application tracking. Features secure authentication, role-based access control, and responsive design.",
      fullDescription: "JobShip is a full-stack job platform that connects job seekers with employers using intelligent AI matching algorithms. The platform features a comprehensive admin dashboard, real-time application tracking, and secure user authentication.",
      demoLink: "https://jobship-project.vercel.app/",
      githubLink: "https://github.com/Alisina891/JobShip-Project",
      problem: "Job seekers and students lacked a centralized platform to find suitable opportunities with intelligent matching.",
      solution: "Developed a full-stack platform with AI-powered matching algorithms and personalized user profiles.",
      results: "Increased user engagement by 200% with efficient job matching and real-time application tracking.",
      features: [
        "AI-Powered Job Matching",
        "Admin Dashboard & Analytics", 
        "Real-time Application Tracking",
        "Secure Authentication System",
        "Role-based Access Control",
        "Responsive Mobile Design"
      ],
      technologies: ["Next.js", "React", "ASP.NET Core", "SQL Server", "Firebase", "Tailwind CSS"],
      icon: <Briefcase className="w-16 h-16 text-blue-600" />,
      role: "Full Stack Developer",
      duration: "3 months",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Online Shop",
      description: "Complete e-commerce solution with product management, secure payment processing, and comprehensive admin panel. Features inventory management, order tracking, and customer analytics.",
      fullDescription: "A modern e-commerce platform built with cutting-edge technologies to provide seamless shopping experience. Features include secure payment processing, inventory management, and comprehensive admin controls.",
      demoLink: "https://online-shop-project-zeta.vercel.app/",
      githubLink: "https://github.com/Alisina891/OnlineShop-Project",
      problem: "Small businesses needed an efficient online presence with secure payment processing and inventory management.",
      solution: "Built a full-stack e-commerce solution with responsive design and secure payment integration.",
      results: "Successfully deployed with Stripe integration and comprehensive product management system.",
      features: [
        "Product Management System",
        "Secure Payment Integration",
        "Admin Dashboard & Analytics",
        "Shopping Cart & Checkout",
        "Order Tracking System",
        "Customer Management"
      ],
      technologies: ["React", "Next.js", "ASP.NET Core", "SQL Server", "Stripe", "Tailwind CSS"],
      icon: <ShoppingCart className="w-16 h-16 text-green-600" />,
      role: "Full Stack Developer",
      duration: "4 months",
      gradient: "from-green-500 to-green-600"
    }
  ]

  const skills = [
    {
      category: "Frontend",
      icon: <Palette className="w-8 h-8" />,
      items: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 88 },
        { name: "Tailwind CSS", level: 85 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      category: "Backend",
      icon: <Server className="w-8 h-8" />,
      items: [
        { name: "ASP.NET Core", level: 82 },
        { name: "Node.js", level: 78 },
        { name: "SQL Server", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Firebase", level: 70 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      category: "Tools & DevOps",
      icon: <Zap className="w-8 h-8" />,
      items: [
        { name: "Git & GitHub", level: 88 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 75 },
        { name: "Vercel", level: 80 }
      ]
    }
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gray-900">
              Ali Sina Ibrahimi
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`font-medium transition-all duration-300 ${
                    activeSection === item
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>

            <a 
              href="/Profile.pdf" 
              download 
              className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Professional Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-2xl"
          >
            <Image
              src="/images/1.jpg"
              alt="Ali Sina Ibrahimi - Full Stack Developer"
              width={160}
              height={160}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Available for new projects
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Full Stack
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Developer
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            I build modern, scalable web applications with clean code and excellent user experiences. 
            Specialized in React, Next.js, and .NET technologies.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="#projects"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              View My Work
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a 
              href="/Profile.pdf" 
              download 
              className="group border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            I am a passionate Full Stack Developer specializing in building scalable, modern web applications. 
            With a strong foundation in both frontend and backend technologies, I focus on creating clean architecture, 
            optimizing performance, and delivering exceptional user experiences. I thrive on solving complex problems 
            and turning ideas into reality through code.
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Here are my two main projects that showcase my full-stack development capabilities and problem-solving approach.
            </motion.p>
          </div>
          
          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-start bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                {/* Project Icon */}
                <div className="lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`relative rounded-2xl p-12 bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-xl`}
                  >
                    {project.icon}
                    <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      {project.role}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                      {project.duration}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {project.fullDescription}
                  </p>

                  {/* Case Study */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Problem</h4>
                      <p className="text-sm text-gray-600">{project.problem}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-sm text-gray-600">{project.solution}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                      <p className="text-sm text-gray-600">{project.results}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Technical Skills
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              A comprehensive overview of my technical expertise and proficiency levels across different technologies.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6 justify-center">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {skillCategory.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {skillCategory.category}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {skillCategory.items.map((skill, idx) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            I'm always interested in new opportunities and challenging projects. 
            Whether you have a project in mind or just want to say hello, feel free to reach out!
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <div className="flex items-center gap-3 text-gray-600 text-lg">
              <Mail size={24} className="text-blue-600" />
              <span>alisinai902@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 text-lg">
              <MapPin size={24} className="text-blue-600" />
              <span>Based in Afghanistan</span>
            </div>
          </div>
          
          <div className="flex gap-6 justify-center mb-12">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Alisina891"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white border border-gray-200 hover:border-blue-600 rounded-xl transition-all duration-300 shadow-lg"
            >
              <Github size={24} className="text-gray-700" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/ali-sina-ibrahimi-b510a232b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white border border-gray-200 hover:border-blue-600 rounded-xl transition-all duration-300 shadow-lg"
            >
              <Linkedin size={24} className="text-gray-700" />
            </motion.a>
          </div>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:alisinai902@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
          >
            <Mail size={20} />
            Send Message
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="text-xl font-bold text-gray-900">
              Ali Sina Ibrahimi
            </div>
            
            <div className="flex gap-6">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            <a 
              href="/Profile.pdf" 
              download 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
          
          <p className="text-gray-600 border-t border-gray-200 pt-8">
            © {new Date().getFullYear()} Ali Sina Ibrahimi. Crafted with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  )
}