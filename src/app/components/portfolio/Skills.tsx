import { motion } from 'motion/react';
import { Code2, Database, Palette, BarChart, Search, Server } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 92 },
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Server,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'PHP', level: 85 },
        { name: 'Python', level: 82 },
        { name: 'Express', level: 90 },
      ],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Database,
      title: 'Database',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Redis', level: 75 },
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      skills: [
        { name: 'Figma', level: 92 },
        { name: 'Adobe XD', level: 85 },
        { name: 'Photoshop', level: 80 },
        { name: 'Illustrator', level: 78 },
      ],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: BarChart,
      title: 'Data Analysis',
      skills: [
        { name: 'Python/Pandas', level: 88 },
        { name: 'Excel', level: 90 },
        { name: 'Power BI', level: 85 },
        { name: 'SQL', level: 92 },
      ],
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: Search,
      title: 'SEO & Marketing',
      skills: [
        { name: 'Google Analytics', level: 88 },
        { name: 'SEO Strategy', level: 85 },
        { name: 'Content Marketing', level: 82 },
        { name: 'Social Media', level: 80 },
      ],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-purple-500/20 hover:border-purple-500/50 backdrop-blur-sm"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + j * 0.05, duration: 0.8 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Skill Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {['React', 'TypeScript', 'Node.js', 'PHP', 'Python', 'MySQL', 'MongoDB', 'AWS', 'Docker', 'Git'].map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full text-sm font-semibold hover:border-purple-500 transition-all cursor-pointer"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
