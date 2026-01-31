import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 animate-gradient-shift" />
      
      {/* Glitch Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-glitch-1" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-glitch-2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', duration: 1 }}
            className="mb-8 inline-block relative"
          >
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-6xl">
                🚀
              </div>
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse" />
          </motion.div>

          {/* Name with Glitch Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black mb-4 relative"
          >
            <span className="relative inline-block">
              <span className="absolute inset-0 text-purple-500 animate-glitch-text-1">Sanket Kapse</span>
              <span className="absolute inset-0 text-cyan-500 animate-glitch-text-2">Sanket Kapse</span>
              <span className="relative text-white">Sanket Kapse</span>
            </span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl mb-8 h-20"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Data Analyst',
                2000,
                'UI Designer',
                2000,
                'SEO Expert',
                2000,
                'PHP Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-bold"
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Crafting digital experiences with clean code & creative design.
            Transforming ideas into reality through modern web technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold overflow-hidden transition-transform hover:scale-105"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/20 transition-all hover:scale-105 flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-6 justify-center"
          >
            {[
              { icon: Github, href: '#', color: 'hover:text-purple-500' },
              { icon: Linkedin, href: '#', color: 'hover:text-cyan-500' },
              { icon: Mail, href: '#', color: 'hover:text-pink-500' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: 'spring' }}
                className={`p-3 rounded-full border-2 border-gray-700 ${social.color} transition-all`}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-purple-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
