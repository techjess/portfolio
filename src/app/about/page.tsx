import Link from 'next/link';
import { GraduationCap, Briefcase, Award, Code } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">Jesse G.</Link>
          <div className="flex space-x-6">
            <Link href="/" className="text-slate-300 hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/about" className="text-blue-400 font-medium">About</Link>
            <Link href="/projects" className="text-slate-300 hover:text-blue-400 transition-colors">Projects</Link>
            <Link href="/contact" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
            <p className="text-xl text-slate-300">
              A systems professional evolving into the world of data science and AI
            </p>
          </div>

          <div className="bg-slate-700 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-sm p-8 mb-8 border border-slate-600">
            <h2 className="text-2xl font-bold text-white mb-4">My Journey</h2>
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
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-700 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-slate-600">
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
            </div>

            <div className="bg-slate-700 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-slate-600">
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
            </div>
          </div>

          <div className="bg-slate-700 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-sm p-8 mb-8 border border-slate-600">
            <div className="flex items-center mb-4">
              <Code className="h-8 w-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Data Science & ML</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>Python</li>
                  <li>R</li>
                  <li>Machine Learning</li>
                  <li>Statistical Analysis</li>
                  <li>Data Visualization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Systems & Infrastructure</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>Network Administration</li>
                  <li>System Optimization</li>
                  <li>Linux/Unix Systems</li>
                  <li>Database Management</li>
                  <li>Cloud Platforms</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Development</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>JavaScript/TypeScript</li>
                  <li>SQL</li>
                  <li>Git Version Control</li>
                  <li>API Development</li>
                  <li>Web Technologies</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-700 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-sm p-8 border border-slate-600">
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
          </div>
        </div>
      </main>
    </div>
  );
}