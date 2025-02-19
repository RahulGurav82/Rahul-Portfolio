import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Globe, Layout, Server, Smartphone, X } from 'lucide-react';
import { useState } from 'react';

const technologies = [
  {
    name: 'Frontend',
    icon: Layout,
    skills: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'WebGL', 'Three.js']
  },
  {
    name: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Python', 'Java', 'Go', 'GraphQL', 'REST APIs', 'Microservices', 'WebSockets']
  },
  {
    name: 'Mobile',
    icon: Smartphone,
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS', 'Android', 'PWA', 'Capacitor']
  },
  {
    name: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Firebase', 'Supabase', 'MySQL', 'DynamoDB']
  },
  {
    name: 'API',
    icon: Globe,
    skills: ['REST', 'GraphQL', 'WebSockets', 'gRPC', 'OAuth', 'JWT', 'API Gateway', 'Swagger']
  },
  {
    name: 'DevOps',
    icon: Code2,
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'GitHub Actions', 'Monitoring', 'Linux']
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const selectedTechnology = technologies.find(t => t.name === selectedTech);

  return (
    <>
      <section className="py-20 bg-gray-900" id="about">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              About Me
            </h2>
            
            <p className="text-gray-300 text-lg mb-12 text-center">
              I'm a passionate full-stack developer with 5+ years of experience building modern web applications. 
              I specialize in creating scalable, user-friendly solutions using cutting-edge technologies.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col items-center p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                    selectedTech === tech.name 
                      ? 'bg-purple-500/20 ring-2 ring-purple-500' 
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                  onClick={() => setSelectedTech(selectedTech === tech.name ? null : tech.name)}
                >
                  <tech.icon className={`w-12 h-12 mb-4 transition-colors duration-300 ${
                    selectedTech === tech.name ? 'text-purple-400' : 'text-purple-500'
                  }`} />
                  <h3 className="text-lg font-semibold text-gray-200">{tech.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedTech && selectedTechnology && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black"
              onClick={() => setSelectedTech(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="bg-gray-800 rounded-xl p-8 max-w-2xl w-full mx-4 pointer-events-auto relative overflow-hidden">
                <button
                  onClick={() => setSelectedTech(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="flex items-center space-x-4 mb-6">
                  <selectedTechnology.icon className="w-8 h-8 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">
                    {selectedTech} Technologies
                  </h3>
                </div>

                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05
                      }
                    }
                  }}
                  className="flex flex-wrap gap-3"
                >
                  {selectedTechnology.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      className="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-full text-sm font-medium hover:bg-purple-500/20 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}