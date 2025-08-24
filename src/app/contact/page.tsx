import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">Jesse G.</Link>
          <div className="flex space-x-6">
            <Link href="/" className="text-slate-300 hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/about" className="text-slate-300 hover:text-blue-400 transition-colors">About</Link>
            <Link href="/projects" className="text-slate-300 hover:text-blue-400 transition-colors">Projects</Link>
            <Link href="/contact" className="text-blue-400 font-medium">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Get In Touch</h1>
            <p className="text-xl text-slate-300">
              I'm always open to discussing new opportunities, collaborations, or interesting projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Let's Connect</h2>
                <p className="text-slate-300 mb-6">
                  Whether you're looking to discuss data science opportunities, 
                  need consultation on system infrastructure, or want to collaborate 
                  on an AI project, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-3" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a href="mailto:jesse@cocovision.ai" className="text-blue-400 hover:underline">
                      jesse@cocovision.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-3" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <a href="tel:+1234567890" className="text-blue-400 hover:underline">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-400 mr-3" />
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-slate-300">Available for remote work</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Follow Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/yourprofile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-700 bg-opacity-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-600"
                  >
                    <Linkedin className="h-6 w-6 text-blue-400" />
                  </a>
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-700 bg-opacity-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-600"
                  >
                    <Github className="h-6 w-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-sm p-8 border border-slate-600">
              <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 bg-slate-600 border border-slate-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-400"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 bg-slate-600 border border-slate-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-400"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-200 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 bg-slate-600 border border-slate-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-400"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-3 py-2 bg-slate-600 border border-slate-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-400"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
              
              <p className="text-sm text-slate-400 mt-4 text-center">
                Note: This form is for display purposes. You'll need to implement form handling functionality.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}