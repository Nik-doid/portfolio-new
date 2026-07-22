import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'

const roles = ['Backend Developer', 'API Architect', 'AI Enthusiast', 'Python Developer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 80)
    } else if (!deleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 40)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.pushState(null, '', href)
    }
  }

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#4F46E5]/5 via-transparent to-transparent dark:from-[#4F46E5]/10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-white/5 text-sm text-gray-600 dark:text-gray-300 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-lg shadow-green-500/50 animate-pulse" />
              Open to remote opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-4 h-8"
            >
              <span>{displayText}</span>
              <span className="inline-block w-0.5 h-6 ml-1 bg-[#4F46E5] animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-8 leading-relaxed"
            >
              {personalInfo.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, '#projects')}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] hover:shadow-lg hover:shadow-[#4F46E5]/30 transition-all hover:-translate-y-0.5"
              >
                View Projects
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={personalInfo.resumeUrl}
                download
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-gray-700 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-[#4F46E5] dark:hover:border-[#4F46E5] hover:text-[#4F46E5] dark:hover:text-[#4F46E5] transition-all hover:-translate-y-0.5"
              >
                <FiDownload className="group-hover:-translate-y-0.5 transition-transform" />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 mt-8"
            >
              <span className="text-sm text-gray-500 dark:text-gray-500">Connect:</span>
              {[
                { href: personalInfo.social.github, icon: FiGithub, label: 'GitHub' },
                { href: personalInfo.social.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
                { href: personalInfo.social.email, icon: FiMail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full text-gray-500 dark:text-gray-400 hover:text-[#4F46E5] dark:hover:text-[#818CF8] hover:bg-[#4F46E5]/10 dark:hover:bg-[#818CF8]/10 transition-all"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] rounded-3xl blur-3xl opacity-20 animate-pulse" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-2xl bg-gradient-to-br from-[#4F46E5]/10 to-[#06B6D4]/10 dark:from-[#4F46E5]/20 dark:to-[#06B6D4]/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] flex items-center justify-center text-white text-3xl font-bold mb-3">
                    NS
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{personalInfo.title}</p>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#E67E22] flex items-center justify-center text-white font-bold text-lg shadow-lg"
              >
                {new Date().getFullYear() - 2022}+
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
