import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiUsers, FiAward, FiBriefcase } from 'react-icons/fi'
import { personalInfo, stats } from '../data/portfolio'

const statIcons = [FiCode, FiUsers, FiBriefcase, FiAward]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
      {isInView ? value : 0}
      {suffix}
    </span>
  )
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] rounded-full mx-auto" />
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Backend Developer & AI Enthusiast
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              I'm a passionate backend developer with hands-on experience in building robust,
              scalable web applications using Python, PHP, Django, FastAPI, and CodeIgniter.
              Currently working at Classic Tech, I specialize in legacy system maintenance and
              modern API integrations.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              I'm deeply interested in AI and machine learning technologies, with practical
              experience in building RAG systems using LangChain, Gemini API, and vector
              databases. I love exploring new technologies and applying them to solve
              real-world problems.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Python', 'Django', 'FastAPI', 'CodeIgniter', 'LangChain', 'PostgreSQL'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-[#4F46E5]/10 text-[#4F46E5] dark:text-[#818CF8] border border-[#4F46E5]/20"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => {
              const Icon = statIcons[i]
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/5 to-[#06B6D4]/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:border-[#4F46E5]/30 dark:hover:border-[#4F46E5]/30 transition-all hover:-translate-y-1">
                    <Icon className="w-8 h-8 text-[#4F46E5] dark:text-[#818CF8] mb-3" />
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
