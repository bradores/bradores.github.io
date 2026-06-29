import { motion } from 'framer-motion'
import { timelineItems } from '../data'

const timelineVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

export default function Timeline() {
  return (
    <motion.div
      className="mb-10"
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
        Timeline
      </motion.h3>

      <motion.div
        className="bg-white rounded-xl p-5 md:p-6 shadow-card border border-gray-100 hover-lift"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ y: -3 }}
      >
        <ul>
          {timelineItems.map((item, index) => (
            <motion.li
              key={item.id}
              id={item.id}
              className={`timeline-item relative overflow-hidden pb-6 ${index === 0 ? 'top' : ''} group cursor-pointer ${index < timelineItems.length - 1 ? '' : ''}`}
              custom={index}
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20px' }}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <div className="timeline-dot">
                <b></b>
              </div>
              <div className="pl-9">
                <motion.h4
                  className="text-base font-semibold text-gray-700 group-hover:text-green-600 transition-colors duration-200 leading-snug"
                  whileHover={{ color: '#109d59' }}
                >
                  {item.title}
                </motion.h4>
                <p className="text-sm text-gray-500 mt-0.5">{item.subtitle}</p>
                <p className="text-xs text-gray-400 mt-1 flex items-center gap-1.5">
                  <motion.span
                    className="w-3 h-3 rounded-full bg-green-100 text-green-600 flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  >
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                    </svg>
                  </motion.span>
                  {item.period}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}
