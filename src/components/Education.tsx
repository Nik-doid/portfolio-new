import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:border-[#4F46E5]/30 dark:hover:border-[#4F46E5]/30 transition-all hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/5 to-[#06B6D4]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#4F46E5]/10 dark:bg-[#4F46E5]/20 flex-shrink-0">
                    <FiBookOpen className="w-6 h-6 text-[#4F46E5] dark:text-[#818CF8]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#F59E0B]/10 text-[#F59E0B]">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      {edu.institution}
                    </p>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] dark:bg-[#818CF8] flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
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
