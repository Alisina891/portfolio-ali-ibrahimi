'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import AboutMe from './AboutMe'
import TechStack from './TechStack'
import WorkExperience from './WorkExperience'
import ContactForm from './ContactForm'
import ProjectModal from './ProjectModal'
import { Menu, X } from "lucide-react";


export default function Header() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isVisible, setIsVisible] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const canvasRef = useRef(null)



  
useEffect(() => {
  setIsVisible(true)
  startParticleAnimation()
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setDarkMode(true)
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const startParticleAnimation = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: darkMode 
          ? `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, ${Math.random() * 100 + 255}, ${Math.random() * 0.3 + 0.1})`
          : `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, ${Math.random() * 100 + 200}, ${Math.random() * 0.2 + 0.1})`
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({behavior: 'smooth'})
  };

  const projects = [
    {
      id: 1,
      title: "JobShip - AI-Powered Job & Internship Platform",
      description: "A platform to connect job seekers and employers with AI-based matching for jobs, internships, and scholarships.",
      image: "/images/jobship.jpg", // مسیر تصویر پروژه
      link: "https://jobship-project.vercel.app/",
      category: "mobile",
      technologies: ["Next.js", "React", "ASP.NET Core", "SQL Server", "Firebase", "Tailwind CSS"],
      problem: "Job seekers and students lacked a centralized platform to find suitable jobs, internships, and scholarships.",
      solution: "Developed a full-stack platform with AI-powered matching, personalized profiles, resume builder, and admin panel for content management.",
      performance: "Implemented secure authentication, responsive UI, and scalable backend to handle multiple users simultaneously.",
      results: "Enabled efficient job matching, increased engagement of users by 200%, and provided employers with an easy-to-use posting system."
    },

    {
      id: 2,
      title: "Sleeman - Content Management System",
      description: "A content management platform with modern UI and advanced features for a Canadian client",
      image: "/images/sleeman.png",
      link: "https://sleeman-ali-ibrahimi.vercel.app/",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      problem: "Client needed a scalable CMS to manage multiple websites with different content types and user roles.",
      solution: "Built a headless CMS with role-based access control, real-time content updates, and a responsive admin dashboard.",
      performance: "Reduced page load time by 40% through code splitting and optimized database queries.",
      results: "Client can now manage 5+ websites from a single dashboard with 95% less manual work."
    },
    {
      id: 3,
      title: "YouTube Clone",
      description: "Complete YouTube UI replication with core functionalities and responsive design",
      image: "/images/youtube.jpg",
      link: "https://web-youtube-project.vercel.app/",
      category: "web",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript", "React Query"],
      problem: "Creating a performant video streaming platform with real-time interactions and smooth UX.",
      solution: "Implemented virtual scrolling for video lists, optimized video loading with lazy loading, and used Firebase for real-time comments.",
      performance: "Achieved 90+ Lighthouse score through image optimization and efficient state management.",
      results: "Supports 10,000+ concurrent users with seamless video playback and interactions."
    }, 
    {
      id: 4,
      title: "Online Shop (Coming Soon)",
      description: "An e-commerce platform for selling products online with inventory management, shopping cart, and secure payment system. Currently under development and will be added to the portfolio soon.",
      image: "/images/online-shop.png", // مسیر تصویر پروژه (می‌توانی یک placeholder هم استفاده کنی)
      link: "#", // هنوز لینک ندارد
      category: "web",
      technologies: ["React", "Next.js", "ASP.NET Core", "SQL Server", "Stripe", "Tailwind CSS"],
      problem: "Small businesses need an online presence to sell products efficiently.",
      solution: "Developing a full-stack e-commerce solution with responsive UI, secure payments, and inventory tracking.",
      performance: "Optimized for fast loading and scalable to handle multiple users and transactions.",
      results: "To be released soon."
    }

  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const openProjectModal = (project) => {
    setActiveProject(project)
    setShowModal(true)
  }

  return (
    <div className={`w-full flex flex-col items-center overflow-hidden relative min-h-screen transition-colors duration-500 ${
      darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      
      {/* Animated Background */}
      <canvas 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      />
      
      {/* Floating Background Elements */}
      <div className={`absolute top-1/4 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-slow ${
        darkMode ? 'bg-purple-900' : 'bg-purple-300'
      }`}></div>
      <div className={`absolute top-1/3 right-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-medium ${
        darkMode ? 'bg-blue-900' : 'bg-yellow-300'
      }`}></div>
      <div className={`absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-fast ${
        darkMode ? 'bg-pink-900' : 'bg-pink-300'
      }`}></div>

      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-16 right-4 z-50 p-3 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.8)',
          borderColor: darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'
        }}
      >
        {darkMode ? (
          <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      {/* Navigation */}
       <nav className="fixed top-0 z-40 w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* لوگو یا نام */}
          <div className="font-bold text-xl dark:text-white">Ali Sina</div>

          {/* لینک‌ها در حالت Desktop */}
          <div className="hidden md:flex space-x-8">
            {["home", "about", "skills", "portfolio", "experience", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors capitalize"
                >
                  {item}
                </button>
              )
            )}
          </div>

          {/* دکمه‌ی منوی موبایل */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* منوی موبایل */}
      {isOpen && (
        <div className="md:hidden bg-white/80 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col items-center space-y-4 py-4">
            {["home", "about", "skills", "portfolio", "experience", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item);
                    setIsOpen(false); // بستن منو بعد از کلیک
                  }}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors capitalize"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>

      {/* Hero Section */}
      <div id="home" className={`relative z-10 flex flex-col w-full max-w-6xl justify-center items-center text-center lg:flex-row lg:mt-32 lg:gap-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} pt-20`}>
        <div className="lg:w-1/2 lg:mb-36 h-72 flex flex-col justify-center order-2 lg:order-1">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl pt-12 font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent lg:tracking-tight">
              Hi, I&apos;m <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">Ali Sina</span>
            </h1>
            <h2 className="text-gray-600 dark:text-gray-300 text-2xl md:text-3xl mt-5 font-medium lg:mt-2">
              Full Stack Developer & UI/UX Enthusiast
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-6 max-w-lg mx-auto">
              I create digital experiences that are fast, accessible, visually appealing, and responsive.
            </p>
          </div>
          <div className="flex w-full justify-center items-center gap-5 mt-10 mb-10 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <a href='/Profile.pdf' download='/Profile.pdf'>
              <button className="relative overflow-hidden rounded-2xl px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white flex justify-center items-center gap-2 hover:from-purple-500 hover:to-blue-500 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-500 font-medium group">
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </button>
            </a>
            <button 
              className="relative overflow-hidden rounded-2xl border-2 border-blue-500 dark:border-blue-400 px-8 py-4 text-blue-500 dark:text-blue-400 flex justify-center items-center hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-500 font-medium group "
              onClick={() => scrollToSection('portfolio')}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 "></span>
              View Portfolio
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2 max-lg:w-full sm:px-5 order-1 lg:order-2 mb-10 lg:mb-0 animate-float-slow">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-60 animate-pulse-slow"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 dark:border-gray-700/20 backdrop-blur-sm">
              <Image
                src="/images/1.jpg"
                alt="Ali Sina - Web Developer"
                width={500}
                height={500}
                className="w-full max-sm:w-[400px] max-lg:w-[500px] lg:min-w-[450px] transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <AboutMe darkMode={darkMode} />

      {/* Tech Stack Section */}
      <TechStack darkMode={darkMode} />

      {/* Portfolio Section */}
      <div id="portfolio" className="relative z-10 w-full max-w-6xl flex flex-col justify-center items-center mt-28 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center dark:text-white mb-4">
          My <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Portfolio</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl text-lg mb-12">
          A selection of my recent projects that showcase my skills and experience
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'web', 'mobile', 'desktop'].map((filter) => (
            <button
              key={filter}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-110 ${
                activeFilter === filter 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-2xl' 
                  : 'bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 backdrop-blur-sm border border-gray-200 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-600 shadow-2xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className=" flex h-48 overflow-hidden relative justify-center items-center">
                <Image
                  alt={project.title}
                  src={project.image}
                  width={400}
                  height={200}
                  className="w-[250px] transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold dark:text-white mb-3">{project.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies?.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-2xl font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 transform group-hover:scale-105 flex items-center justify-center gap-3 shadow-2xl">
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </a>
                  <button 
                    onClick={() => openProjectModal(project)}
                    className="px-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience Section */}
      <WorkExperience darkMode={darkMode} />

      {/* Contact Section */}
      <ContactForm/>

      {/* Footer */}
      <div className="relative z-10 flex w-full max-w-6xl mt-20 mb-10 px-4">
        <div className="w-full flex flex-col justify-center items-center text-center py-10 border-t border-gray-300 dark:border-gray-600">
          <h2 className="text-2xl font-bold dark:text-white mb-8">Follow Me</h2>
          <div className="flex gap-8 mb-12">
            <a href="https://github.com/Alisina891" target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center group">
                <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-600 group-hover:bg-white dark:group-hover:bg-gray-700 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2">
                  <Image
                    src="/images/github.gif"
                    alt="github"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <p className="font-medium mt-3 dark:text-white group-hover:text-cyan-500 transition-colors">GitHub</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/ali-sina-ibrahimi-b510a232b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center group">
                <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-600 group-hover:bg-white dark:group-hover:bg-gray-700 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2">
                  <Image
                    src="/images/link.svg"
                    alt="linkedin"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <p className="font-medium mt-3 dark:text-white group-hover:text-cyan-500 transition-colors">LinkedIn</p>
              </div>
            </a>
          </div>
          <p className="text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Ali Sina Ibrahimi. All rights reserved.</p>
        </div>
      </div>

      {/* Project Modal */}
      {showModal && activeProject && (
        <ProjectModal 
          project={activeProject} 
          onClose={() => setShowModal(false)}
          darkMode={darkMode}
        />
      )}

      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.8; }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
      `}</style>
    </div>
  )
}