import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <div className="mb-8">
          <img 
            src="https://res.cloudinary.com/dgu0acngm/image/upload/v1739943217/RahulGurav_g9b8yp.png" 
            alt="Profile Avatar" 
            className="w-[180px] h-[180px] rounded-full mx-auto border-4 border-purple-500 shadow-lg shadow-purple-500/50"
          />
        </div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Rahul Gurav
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Full Stack Developer & AI Enthusiast
        </motion.p>
        
        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="https://github.com/RahulGurav82" target='_blank' className="text-gray-400 hover:text-purple-500 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rahul-gurav-3b8a04331/" target='_blank' className="text-gray-400 hover:text-purple-500 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:guravrahul988@gmail.com" target='_blank' className="text-gray-400 hover:text-purple-500 transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}