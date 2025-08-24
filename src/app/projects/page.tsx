import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { prisma } from '@/lib/prisma';

async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      where: { published: true },
      orderBy: [
        { featured: 'desc' },
        { createdAt: 'desc' }
      ]
    });
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">Jesse G.</Link>
          <div className="flex space-x-6">
            <Link href="/" className="text-slate-300 hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/about" className="text-slate-300 hover:text-blue-400 transition-colors">About</Link>
            <Link href="/projects" className="text-blue-400 font-medium">Projects</Link>
            <Link href="/contact" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">My Projects</h1>
            <p className="text-xl text-slate-300">
              A showcase of my work in data science, machine learning, and systems analysis
            </p>
          </div>

          {projects.length === 0 ? (
            <div className="text-center py-12">
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
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-slate-700 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-slate-600">
                  {project.imageUrl && (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      {project.featured && (
                        <span className="bg-blue-600 text-blue-100 text-xs px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-slate-300 mb-4">{project.description}</p>
                    
                    {project.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.split(',').map((tag, index) => (
                          <span 
                            key={index} 
                            className="bg-slate-600 text-slate-200 text-xs px-2 py-1 rounded"
                          >
                            {tag.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-slate-300 hover:text-white transition-colors"
                        >
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}