import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiDatabase, FiCpu, FiTool } from 'react-icons/fi'
import { skillCategories } from '../data/portfolio'

const categoryIcons = [FiCode, FiDatabase, FiCpu, FiTool]

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-[#4F46E5] to-[#06B6D4]"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => {
            const Icon = categoryIcons[i]
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:border-[#4F46E5]/30 dark:hover:border-[#4F46E5]/30 transition-all hover:-translate-y-1 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/5 to-[#06B6D4]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-2.5 rounded-xl bg-[#4F46E5]/10 dark:bg-[#4F46E5]/20">
                        <Icon className="w-5 h-5 text-[#4F46E5] dark:text-[#818CF8]" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>
                    {category.skills.map((skill, j) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} index={j} />
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
