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
      ease: 'easeOut',
    },
  }),
}

export default function MyStory() {
  return (
    <div className="w-full">
      {/* Story section */}
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
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My Story
        </motion.h3>
        <motion.div
          className="bg-white rounded-xl p-5 md:p-6 shadow-card border border-gray-100 hover-lift"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -3 }}
        >
          <motion.p
            className="text-gray-700 leading-relaxed mb-4 font-medium text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            "The satisfaction of creating something from nothing is incredibly rewarding, especially when the final product brings real value to the community."
          </motion.p>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            {[
              'Earned my Associate degree in Computer Technology (ACT) from Surigao del Sur State University (now known as North Eastern Mindanao State University).',
              'I now work as a Mid Level Software Developer at DXForm.',
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Portfolio section */}
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
    </div>
  )
}
