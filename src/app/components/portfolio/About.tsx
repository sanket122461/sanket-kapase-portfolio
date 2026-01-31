import { motion } from 'motion/react';
import { Code, Palette, TrendingUp, Zap } from 'lucide-react';

export function About() {
  const features = [
    { icon: Code, title: 'Clean Code', desc: 'Writing maintainable & scalable solutions' },
    { icon: Palette, title: 'Creative Design', desc: 'Beautiful & intuitive interfaces' },
    { icon: TrendingUp, title: 'Performance', desc: 'Optimized for speed & efficiency' },
    { icon: Zap, title: 'Innovation', desc: 'Cutting-edge technologies' },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center md:text-left"
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              I'm a <span className="text-purple-400 font-semibold">versatile developer</span> with expertise in 
              <span className="text-cyan-400 font-semibold"> full-stack development</span>, 
              <span className="text-pink-400 font-semibold"> data analysis</span>, and 
              <span className="text-green-400 font-semibold"> UI/UX design</span>. 
              With years of experience building scalable applications, I bring ideas to life through elegant code and stunning visuals.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Passionate about creating impactful digital experiences that solve real-world problems. 
              Always learning, always building, always pushing boundaries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 hover:border-purple-500/50 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 rounded-2xl transition-all" />
                <feature.icon className="w-12 h-12 mb-4 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
