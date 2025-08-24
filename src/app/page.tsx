'use client';

import Link from 'next/link';
import { ArrowRight, Mail, MapPin, GraduationCap, Briefcase, Download, Code, Award, ExternalLink, Github } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  content?: string | null;
  imageUrl?: string | null;
  githubUrl?: string | null;
  liveUrl?: string | null;
  tags: string;
  featured: boolean;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

// Animated section component
function AnimatedSection({ children, className = "", delay = 0 }: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Fetch projects
    fetch('/api/admin/projects')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const publishedProjects = data
            .filter(project => project.published)
            .sort((a, b) => {
              if (a.featured && !b.featured) return -1;
              if (!a.featured && b.featured) return 1;
              return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            });
          setProjects(publishedProjects);
        }
      })
      .catch(err => console.error('Error fetching projects:', err));

    // Smooth scrolling setup
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Fixed Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 bg-slate-900 bg-opacity-95 backdrop-blur-sm z-50 border-b border-slate-700"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Jesse G.
            </motion.button>
            <div className="flex space-x-6">
              {navLinks.map(({ id, label }, index) => (
                <motion.button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`transition-colors ${
                    activeSection === id 
                      ? 'text-blue-400 font-medium' 
                      : 'text-slate-300 hover:text-blue-400'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <motion.h1 
                {...fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl font-bold text-white mb-6"
              >
                Network Systems Analyst
                <br />
                <motion.span 
                  className="text-blue-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  Transitioning to Data Science
                </motion.span>
              </motion.h1>
              
              <motion.p 
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
              >
                Bridging the gap between systems infrastructure and machine learning, 
                with a passion for turning data into actionable insights.
              </motion.p>
              
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="flex justify-center space-x-4 flex-wrap gap-4"
              >
                <motion.button 
                  variants={staggerItem}
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
                
                <motion.a 
                  variants={staggerItem}
                  href="mailto:jesse@cocovision.ai" 
                  className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-400 hover:text-white transition-colors flex items-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="mr-2 h-5 w-5" /> Get in Touch
                </motion.a>
                
                <motion.a 
                  variants={staggerItem}
                  href="/cv.pdf" 
                  download="Jesse_G_CV.pdf"
                  className="border border-slate-400 text-slate-300 px-8 py-3 rounded-lg hover:bg-slate-400 hover:text-slate-900 transition-colors flex items-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="mr-2 h-5 w-5" /> Download CV
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid md:grid-cols-3 gap-8"
            >
              <motion.div 
                variants={staggerItem}
                className="bg-slate-700 bg-opacity-50 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-slate-600"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Briefcase className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Current Role</h3>
                <p className="text-slate-300">Network Systems Analyst with expertise in infrastructure management and system optimization.</p>
              </motion.div>
              
              <motion.div 
                variants={staggerItem}
                className="bg-slate-700 bg-opacity-50 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-slate-600"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <GraduationCap className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                <p className="text-slate-300">BS Applied Computing (AI Focus) - University of Arizona</p>
                <p className="text-slate-300 mt-1">MS Engineering (Data Science Track) - UCLA (In Progress)</p>
              </motion.div>
              
              <motion.div 
                variants={staggerItem}
                className="bg-slate-700 bg-opacity-50 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-slate-600"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Focus Areas</h3>
                <p className="text-slate-300">Machine Learning, Data Science, AI Systems, and Network Infrastructure</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
              <p className="text-xl text-slate-300">
                A systems professional evolving into the world of data science and AI
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="bg-slate-700 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-sm p-8 mb-8 border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                My career began in network systems analysis, where I developed a deep understanding of 
                infrastructure, system optimization, and technical problem-solving. This foundation has 
                proven invaluable as I transition into data science and machine learning.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The intersection of systems thinking and data science fascinates me. My experience with 
                network infrastructure provides unique insights into how to build scalable, efficient 
                AI systems that can handle real-world demands.
              </p>
            </AnimatedSection>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 mb-8"
            >
              <motion.div 
                variants={staggerItem}
                className="bg-slate-700 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-slate-600"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <GraduationCap className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-white">MS in Engineering (Data Science Track)</h4>
                    <p className="text-slate-300">University of California, Los Angeles (UCLA)</p>
                    <p className="text-sm text-slate-400">In Progress</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">BS in Applied Computing</h4>
                    <p className="text-slate-300">University of Arizona</p>
                    <p className="text-sm text-slate-400">Emphasis in Artificial Intelligence</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={staggerItem}
                className="bg-slate-700 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-slate-600"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <Briefcase className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Experience</h3>
                <div>
                  <h4 className="font-medium text-white">Network Systems Analyst</h4>
                  <p className="text-slate-300 mb-2">Current Role</p>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• Infrastructure management and optimization</li>
                    <li>• System performance analysis</li>
                    <li>• Network troubleshooting and maintenance</li>
                    <li>• Technical documentation and reporting</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            <AnimatedSection delay={0.4} className="bg-slate-700 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-sm p-8 mb-8 border border-slate-600">
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
              </div>
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-6"
              >
                <motion.div variants={staggerItem}>
                  <h4 className="font-semibold text-white mb-2">Data Science & ML</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>Python</li>
                    <li>R</li>
                    <li>Machine Learning</li>
                    <li>Statistical Analysis</li>
                    <li>Data Visualization</li>
                  </ul>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <h4 className="font-semibold text-white mb-2">Systems & Infrastructure</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>Network Administration</li>
                    <li>System Optimization</li>
                    <li>Linux/Unix Systems</li>
                    <li>Database Management</li>
                    <li>Cloud Platforms</li>
                  </ul>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <h4 className="font-semibold text-white mb-2">Development</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>JavaScript/TypeScript</li>
                    <li>SQL</li>
                    <li>Git Version Control</li>
                    <li>API Development</li>
                    <li>Web Technologies</li>
                  </ul>
                </motion.div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.6} className="bg-slate-700 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-sm p-8 border border-slate-600">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">What Drives Me</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                I'm passionate about the transformative power of data and artificial intelligence. 
                My goal is to bridge the gap between robust system architecture and innovative 
                data science solutions. I believe that understanding both the infrastructure 
                and the algorithms is key to building AI systems that are not only intelligent 
                but also reliable, scalable, and practical for real-world applications.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
              <p className="text-xl text-slate-300">
                A showcase of my work in data science, machine learning, and systems analysis
              </p>
            </AnimatedSection>

            {projects.length === 0 ? (
              <AnimatedSection className="text-center py-12">
                <div className="bg-slate-700 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-sm p-8 max-w-md mx-auto border border-slate-600">
                  <h3 className="text-xl font-semibold text-white mb-2">No Projects Yet</h3>
                  <p className="text-slate-300 mb-4">
                    Projects will appear here once they are added through the admin panel.
                  </p>
                  <Link 
                    href="/admin" 
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Admin Panel
                  </Link>
                </div>
              </AnimatedSection>
            ) : (
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {projects.map((project, index) => (
                  <motion.div 
                    key={project.id}
                    variants={staggerItem}
                    className="bg-slate-700 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-slate-600"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.imageUrl && (
                      <motion.img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                        {project.featured && (
                          <motion.span 
                            className="bg-blue-600 text-blue-100 text-xs px-2 py-1 rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                          >
                            Featured
                          </motion.span>
                        )}
                      </div>
                      <p className="text-slate-300 mb-4">{project.description}</p>
                      
                      {project.tags && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.split(',').map((tag, tagIndex) => (
                            <motion.span 
                              key={tagIndex} 
                              className="bg-slate-600 text-slate-200 text-xs px-2 py-1 rounded"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + tagIndex * 0.05 + 0.3 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              {tag.trim()}
                            </motion.span>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex space-x-3">
                        {project.githubUrl && (
                          <motion.a 
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-slate-300 hover:text-white transition-colors"
                            whileHover={{ scale: 1.1, x: 2 }}
                          >
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </motion.a>
                        )}
                        {project.liveUrl && (
                          <motion.a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                            whileHover={{ scale: 1.1, x: 2 }}
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Live Demo
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
              <p className="text-xl text-slate-300">
                I'm always open to discussing new opportunities, collaborations, or interesting projects
              </p>
            </AnimatedSection>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12"
            >
              <motion.div variants={staggerItem} className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
                  <p className="text-slate-300 mb-6">
                    Whether you're looking to discuss data science opportunities, 
                    need consultation on system infrastructure, or want to collaborate 
                    on an AI project, I'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <Mail className="h-6 w-6 text-blue-400 mr-3" />
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <a href="mailto:jesse@cocovision.ai" className="text-blue-400 hover:underline">
                        jesse@cocovision.ai
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <MapPin className="h-6 w-6 text-blue-400 mr-3" />
                    <div>
                      <p className="font-medium text-white">Location</p>
                      <p className="text-slate-300">Available for remote work</p>
                    </div>
                  </motion.div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Follow Me</h4>
                  <div className="flex space-x-4">
                    <motion.a 
                      href="https://linkedin.com/in/yourprofile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-slate-700 bg-opacity-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-600"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="https://github.com/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-slate-700 bg-opacity-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-600"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-6 w-6 text-white" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={staggerItem}
                className="bg-slate-700 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-sm p-8 border border-slate-600"
              >
                <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 bg-slate-600 border border-slate-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-400 transition-all"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 bg-slate-600 border border-slate-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-400 transition-all"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-200 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-3 py-2 bg-slate-600 border border-slate-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-400 transition-all"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-3 py-2 bg-slate-600 border border-slate-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-400 transition-all"
                      required
                    ></textarea>
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Send Message
                  </motion.button>
                </form>
                
                <p className="text-sm text-slate-400 mt-4 text-center">
                  Note: This form is for display purposes. You'll need to implement form handling functionality.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}