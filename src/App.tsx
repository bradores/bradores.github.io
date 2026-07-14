import { motion } from 'framer-motion'
import Header from './components/Header'
import MyStory from './components/MyStory'
import Timeline from './components/Timeline'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

export default function App() {
  return (
    <>
      {/* Ambient background decoration */}
      <div className="bg-blob bg-blob-1" aria-hidden="true" />
      <div className="bg-blob bg-blob-2" aria-hidden="true" />
      <div className="bg-blob bg-blob-3" aria-hidden="true" />

      <motion.div
        className="main max-w-[960px] mx-auto bg-white min-h-screen shadow-xl relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Top decorative accent */}
        <motion.div
          className="h-1.5 w-full green-gradient"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
        />

        <div className="content w-[94%] md:w-[90%] mx-auto px-5 md:px-9 py-10 md:py-14">
          <motion.div variants={sectionVariants}>
            <Header />
          </motion.div>

          {/* Information section */}
          <motion.div
            className="information w-full clearfix flex flex-col gap-10 md:gap-12 mt-10 md:mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.div variants={sectionVariants}>
              <MyStory />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <Timeline />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <Portfolio />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <Skills />
            </motion.div>
          </motion.div>

          {/* Footer */}
          <footer className="mt-12 md:mt-16 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Bryan Radores
            </p>
          </footer>
        </div>
      </motion.div>
    </>
  )
}
