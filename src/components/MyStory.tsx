import { motion } from 'framer-motion'

export default function MyStory() {
  return (
    <div className="w-full">
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
            "Ideas are cheap. Execution is everything — and there's nothing quite like the feeling of finally shipping."
          </motion.p>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            {[
              'Continuous learning is core to how I work — I am always exploring new technologies and refining my approach to build more efficient, maintainable software.',
              'I am currently a Full Stack Software Developer at Digital Transformation, where every project is a chance to sharpen my skills and contribute to work that genuinely matters.',
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
    </div>
  )
}
