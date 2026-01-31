import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

export function Experience() {
  const timeline = [
    {
      type: 'work',
      icon: Briefcase,
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2023 - Present',
      desc: 'Leading development of enterprise web applications with React, Node.js, and microservices architecture.',
      color: 'from-purple-600 to-pink-600',
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2021 - 2023',
      desc: 'Developed and maintained multiple client projects using modern web technologies and agile methodologies.',
      color: 'from-cyan-600 to-blue-600',
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'BE Electronics And telecommunication',
      company: 'Tech University',
      period: '2020-2025',
      desc: 'Specialized in AI, Machine Learning, and Advanced Web Technologies.',
      color: 'from-green-600 to-emerald-600',
    },
    {
      type: 'award',
      icon: Award,
      title: 'Best Developer Award',
      company: 'Tech Conference 2022',
      period: '2022',
      desc: 'Recognized for innovative solutions in web development and outstanding contributions to open source.',
      color: 'from-orange-600 to-yellow-600',
    },
  ];

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500" />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative mb-16 md:mb-24 md:flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center border-4 border-black`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`ml-24 md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-purple-500/20 hover:border-purple-500/50 backdrop-blur-sm group">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-sm font-semibold mb-4`}>
                    <Calendar size={14} />
                    {item.period}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                    {item.title}
                  </h3>
                  
                  <p className="text-cyan-400 font-semibold mb-3">{item.company}</p>
                  
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {[
            { number: '5+', label: 'Years Experience', color: 'from-purple-500 to-pink-500' },
            { number: '50+', label: 'Projects Completed', color: 'from-cyan-500 to-blue-500' },
            { number: '30+', label: 'Happy Clients', color: 'from-green-500 to-emerald-500' },
            { number: '10+', label: 'Awards Won', color: 'from-orange-500 to-yellow-500' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-purple-500/20 hover:border-purple-500/50 backdrop-blur-sm group"
            >
              <div className={`text-5xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
