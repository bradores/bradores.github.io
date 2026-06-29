import { motion } from 'framer-motion'
import { skillGroups } from '../data'
import { FiMonitor, FiServer, FiDatabase, FiSettings } from 'react-icons/fi'

const skillRowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
}

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.03,
      duration: 0.25,
      ease: 'easeOut',
    },
  }),
}

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h3
        className="section-title text-lg font-semibold"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skillsets
      </motion.h3>

      <motion.div
        className="bg-white rounded-xl p-5 md:p-6 shadow-card border border-gray-100 hover-lift"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ y: -3 }}
      >
        {skillGroups.map((skill, index) => {
          if (skill.category) {
            return (
              <motion.div
                key={index}
                className="flex items-center mb-4 mt-10 first:mt-0"
                custom={index}
                variants={skillRowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-20px' }}
              >
                <h4 className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                  <motion.span
                    className="w-6 h-6 rounded-lg green-gradient text-white flex items-center justify-center text-xs"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    {skill.category === 'Web Frontend' ? <FiMonitor size={14} /> :
                      skill.category === 'Web Server Side' ? <FiServer size={14} /> :
                      skill.category === 'Database' ? <FiDatabase size={14} /> :
                      <FiSettings size={14} />}
                  </motion.span>
                  {skill.category}
                </h4>
              </motion.div>
            )
          }
          const filled = skill.level
          const empty = 13 - filled
          const dotStartIndex = index * 13
          return (
            <motion.div
              key={index}
              className="flex items-center py-1.5 group"
              custom={index}
              variants={skillRowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20px' }}
              whileHover={{ x: 3, transition: { duration: 0.2 } }}
            >
              <div className="w-[50%] text-sm text-gray-500 flex-shrink-0">
                {skill.name.split(/(\d+)/).map((part, i) =>
                  /\d+/.test(part)
                    ? <span key={i} className="text-xs text-gray-300 ml-0.5 font-mono">{part}</span>
                    : <span key={i}>{part}</span>
                )}
              </div>
              <div className="flex-1 flex items-center gap-0.5">
                {Array.from({ length: filled }).map((_, i) => (
                  <motion.span
                    key={`filled-${i}`}
                    className="skill-dot filled"
                    custom={dotStartIndex + i}
                    variants={dotVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-20px' }}
                    whileHover={{ scale: 1.5, transition: { duration: 0.15 } }}
                  />
                ))}
                {Array.from({ length: empty }).map((_, i) => (
                  <span key={`empty-${i}`} className="skill-dot empty" />
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}
