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
            className="relative w-[172px] h-[172px] flex-shrink-0 group flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', type: 'spring', stiffness: 200 }}
          >
            {/* Gradient ring */}
            <div className="absolute -inset-1 rounded-full green-gradient opacity-80" />
            {/* Decorative dashed ring */}
            <motion.div
              className="absolute -inset-2 rounded-full border-2 border-dashed border-green-200/60"
              initial={{ opacity: 0, scale: 1.2, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            />
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setShowContact(true) }}
              className="avatar-pic relative block w-[160px] h-[160px] rounded-full border-4 border-white overflow-hidden cursor-pointer shadow-lg group-hover:shadow-xl transition-all duration-300"
            >
            </a>
            {/* Availability status dot */}
            <span
              className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-green-500 border-2 border-white shadow-sm"
              title="Open to opportunities"
            />
            <motion.span
              className="absolute -top-1 -right-1 w-9 h-9 rounded-full green-gradient text-white flex items-center justify-center text-xs font-bold shadow-md"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4, type: 'spring', stiffness: 300 }}
              whileHover={{ scale: 1.15, rotate: 5 }}
            >
              Bry
            </motion.span>
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-2"
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
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-3"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
              }}
            >
              <motion.span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-medium"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <FiMapPin size={15} className="text-green-600" />
                Lianga, Surigao del Sur
              </motion.span>
              <motion.a
                href="#"
                onClick={(e) => { e.preventDefault(); setShowContact(true) }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-50 text-green-700 hover:bg-green-100 text-sm font-medium transition-colors duration-200 group cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiMail size={15} className="text-green-600" />
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
