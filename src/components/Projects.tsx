import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Analytics Platform',
    description: 'A machine learning platform that analyzes user behavior and provides actionable insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500',
    tech: ['React', 'Python', 'TensorFlow', 'AWS'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'E-Commerce Solution',
    description: 'A full-featured e-commerce platform with real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=500',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Centralized dashboard for managing multiple social media accounts.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500',
    tech: ['Vue.js', 'Express', 'PostgreSQL', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com'
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-black" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Featured Projects
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="text-gray-400 hover:text-purple-500 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="text-gray-400 hover:text-purple-500 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}