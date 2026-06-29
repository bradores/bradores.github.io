import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiMail, FiPhone } from 'react-icons/fi'

interface ContactModalProps {
  onClose: () => void
}

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    clipPath: 'circle(0% at 50% 50%)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: 'circle(100% at 50% 50%)',
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    clipPath: 'circle(0% at 50% 50%)',
    transition: {
      duration: 0.4,
      ease: 'easeIn' as const,
    },
  },
}

const contentVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
}

const contactItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 + i * 0.1, duration: 0.4 },
  }),
}

export default function ContactModal({ onClose }: ContactModalProps) {
  useEffect(() => {
    document.body.classList.add('of')
    return () => {
      document.body.classList.remove('of')
    }
  }, [])

  const handleClose = () => {
    document.body.classList.remove('of')
    onClose()
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] overflow-x-hidden"
        style={{ background: 'linear-gradient(135deg, #065f46 0%, #047857 50%, #059669 100%)' }}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Close button */}
        <motion.a
          href="#"
          onClick={(e) => { e.preventDefault(); handleClose() }}
          className="absolute right-5 top-5 text-4xl text-white/80 hover:text-white z-[101] no-print transition-opacity duration-200 cursor-pointer"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiX size={32} />
        </motion.a>

        <div className="w-full h-full flex items-center justify-center p-6 md:p-0">
          <motion.div
            className="w-full max-w-4xl bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-2xl border border-white/10"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Left side - Info */}
            <div className="flex-1 text-center md:text-left">
              <motion.p
                className="text-green-200 text-sm font-medium tracking-wide uppercase mb-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                Hello, my name is
              </motion.p>
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.5, ease: 'easeOut' }}
              >
                 Bryan Radores
              </motion.h2>
              <motion.div
                className="flex items-center justify-center md:justify-start gap-2 mb-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
              >
                <span className="w-8 h-0.5 bg-green-300 rounded-full" />
                <span className="text-green-200 font-medium text-sm tracking-wider">Software Engineer</span>
              </motion.div>

              <motion.div
                className="space-y-4"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.45 } } }}
              >
                <motion.p
                  className="text-green-100/80 text-sm font-medium"
                  variants={contactItemVariants}
                  custom={0}
                >
                  Get in touch
                </motion.p>
                {[
                  { icon: <FiMail size={20} />, text: 'bradores@dxform.ph' },
                  { icon: <FiPhone size={20} />, text: '+639660266327' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 text-white/80"
                    variants={contactItemVariants}
                    custom={i + 1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <motion.span
                      className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-green-300"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                    >
                      {item.icon}
                    </motion.span>
                    <span className="text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right side - Avatar/Wechat */}
            <motion.div
              className="flex-shrink-0 flex flex-col items-center gap-4"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
            >
              <motion.div
                className="w-40 h-40 rounded-2xl bg-white/10 p-2"
                style={{ background: "url('/images/cartoon.png') no-repeat center center", backgroundSize: 'contain' }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <motion.div
                className="w-32 h-32 rounded-2xl bg-white/10 p-2"
                style={{ background: "url('/images/wechat.png') no-repeat center center", backgroundSize: 'contain' }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <span className="text-xs text-green-200/60">Cartoon by Jameskelly</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
