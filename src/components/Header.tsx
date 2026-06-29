import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiMail } from 'react-icons/fi'
import ContactModal from './ContactModal'

export default function Header() {
  const [showContact, setShowContact] = useState(false)

  return (
    <>
      <div className="header pb-6 md:pb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0">
          {/* Avatar */}
          <motion.div
            className="relative w-[160px] h-[160px] flex-shrink-0 group"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', type: 'spring', stiffness: 200 }}
          >
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setShowContact(true) }}
              className="avatar-pic block w-[160px] h-[160px] rounded-full border-2 border-green-200 overflow-hidden cursor-pointer shadow-md group-hover:shadow-lg transition-all duration-300"
            >
            </a>
            <motion.span
              className="absolute -top-1 -right-1 w-9 h-9 rounded-full green-gradient text-white flex items-center justify-center text-xs font-bold shadow-md"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4, type: 'spring', stiffness: 300 }}
              whileHover={{ scale: 1.15, rotate: 5 }}
            >
              Bry
            </motion.span>
            {/* Decorative ring */}
            <motion.div
              className="absolute -inset-1 rounded-full border-2 border-green-200/50"
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
          </motion.div>

          {/* Base info */}
          <div className="flex-1 md:pl-10 text-center md:text-left">
            <motion.p
              className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hello, my name is
            </motion.p>
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            >
              Bryan Radores
            </motion.h1>
            <motion.div
              className="flex items-center justify-center md:justify-start gap-2 mb-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            >
              <span className="w-8 h-0.5 green-gradient rounded-full" />
              <span className="text-green-600 font-semibold text-sm md:text-base tracking-[0.2em] uppercase">Software Developer</span>
              <span className="w-8 h-0.5 green-gradient rounded-full" />
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
              }}
            >
              <motion.span
                className="flex items-center gap-2 text-gray-500 text-sm"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <span className="w-7 h-7 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                  <FiMapPin size={16} />
                </span>
                Lianga, Surigao del Sur, Philippines
              </motion.span>
              <motion.a
                href="#"
                onClick={(e) => { e.preventDefault(); setShowContact(true) }}
                className="flex items-center gap-2 text-gray-500 hover:text-green-600 text-sm transition-colors duration-200 group cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="w-7 h-7 rounded-full bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                  <FiMail size={16} />
                </span>
                bradores@dxform.ph
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </>
  )
}
