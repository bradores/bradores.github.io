import { motion } from 'framer-motion'
import { portfolioItems } from '../data'
import { FiFileText } from 'react-icons/fi'

const portfolioVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  }),
}

export default function Portfolio() {
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
        Portfolio
      </motion.h3>
      <div className="space-y-3">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            className="modern-card p-4 md:p-5 border border-gray-100 cursor-pointer group"
            custom={index}
            variants={portfolioVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.99 }}
          >
            <h4 className="text-sm font-semibold text-gray-700 group-hover:text-green-600 transition-colors duration-200 flex items-start gap-2.5">
              <motion.span
                className="w-6 h-6 rounded-lg green-gradient text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <FiFileText size={14} />
              </motion.span>
              <span>
                {item.title}
                <span className="block text-xs font-normal text-gray-400 mt-0.5">{item.tech}</span>
              </span>
            </h4>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed pl-8">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
