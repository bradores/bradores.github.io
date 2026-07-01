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
    <motion.div
      className="main max-w-[1200px] mx-auto bg-white min-h-screen shadow-lg relative z-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Top decorative accent */}
      <motion.div
        className="h-1 w-full green-gradient"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ transformOrigin: 'left' }}
      />

      <div className="content w-[92%] md:w-[88%] px-[4%] md:px-[6%] py-[4%] md:py-[6%] mx-auto">
        <motion.div variants={sectionVariants}>
          <Header />
        </motion.div>

        {/* Information section */}
        <motion.div
          className="information w-full clearfix flex flex-col gap-8 mt-8"
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
      </div>
    </motion.div>
  )
}
