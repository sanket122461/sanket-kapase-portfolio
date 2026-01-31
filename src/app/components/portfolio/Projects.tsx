import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Eye } from 'lucide-react';

export function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = ['all', 'web', 'mobile', 'design', 'data'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      desc: 'Full-stack e-commerce with React, Node.js, and Stripe integration',
      category: 'web',
      image: '🛒',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      color: 'from-purple-600 to-pink-600',
    },
    {
      id: 2,
      title: 'Data Analytics Dashboard',
      desc: 'Real-time analytics platform with interactive visualizations',
      category: 'data',
      image: '📊',
      tech: ['Python', 'Pandas', 'D3.js', 'Flask'],
      color: 'from-cyan-600 to-blue-600',
    },
    {
      id: 3,
      title: 'Mobile Fitness App',
      desc: 'React Native fitness tracking app with AI recommendations',
      category: 'mobile',
      image: '💪',
      tech: ['React Native', 'Firebase', 'TensorFlow'],
      color: 'from-green-600 to-emerald-600',
    },
    {
      id: 4,
      title: 'Portfolio Design System',
      desc: 'Complete design system with Figma and component library',
      category: 'design',
      image: '🎨',
      tech: ['Typescript', 'React', 'Nodejs', 'Tailwind'],
      color: 'from-pink-600 to-rose-600',
    },
    {
      id: 5,
      title: 'AI Chatbot Platform',
      desc: 'Intelligent chatbot with NLP and machine learning',
      category: 'web',
      image: '🤖',
      tech: ['Python', 'TensorFlow', 'React', 'WebSocket'],
      color: 'from-indigo-600 to-purple-600',
    },
    {
      id: 6,
      title: 'SEO Optimization Tool',
      desc: 'Automated SEO analysis and optimization recommendations',
      category: 'data',
      image: '🚀',
      tech: ['PHP', 'Laravel', 'Vue.js', 'MySQL'],
      color: 'from-orange-600 to-yellow-600',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-900/10 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold capitalize transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project.id)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Project Card */}
                <div className="relative h-96 bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 group-hover:border-purple-500/50 transition-all">
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
                  
                  {/* Project Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-9xl opacity-20 group-hover:opacity-40 transition-opacity"
                    >
                      {project.image}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.desc}</p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg text-sm font-semibold"
                      >
                        <Eye size={16} />
                        View
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-sm font-semibold"
                      >
                        <Github size={16} />
                        Code
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold inline-flex items-center gap-2"
          >
            View All Projects
            <ExternalLink size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
