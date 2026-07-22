import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'
import { experiences } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] rounded-full mx-auto" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#4F46E5] via-[#06B6D4] to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.position}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              <div className="absolute left-4 top-1 w-9 h-9 rounded-full bg-white dark:bg-[#0F172A] border-2 border-[#4F46E5] dark:border-[#818CF8] flex items-center justify-center z-10">
                <FiBriefcase className="w-4 h-4 text-[#4F46E5] dark:text-[#818CF8]" />
              </div>

              <div className="group">
                <div className="relative p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:border-[#4F46E5]/30 dark:hover:border-[#4F46E5]/30 transition-all hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/5 to-[#06B6D4]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#4F46E5]/10 dark:bg-[#4F46E5]/20 text-[#4F46E5] dark:text-[#818CF8]">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-[#4F46E5] dark:text-[#818CF8] mb-3">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
