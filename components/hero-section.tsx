"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react"

const typingTexts = [
  "Hi I'm Nebil, a passionate programmer",
  "I love learning and building New things",
  "MERN Stack Developer in progress",
  "Always happy to work with others",
  "Let's create something amazing together!",
  "Front-end lover, Back-end explorer",
  "Code. Learn. Repeat",
]

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = typingTexts[textIndex]
    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentText.length) {
            setDisplayText(currentText.substring(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentText.substring(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          } else {
            setIsDeleting(false)
            setTextIndex((prev) => (prev + 1) % typingTexts.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 via-background to-orange-400/10 animate-gradient-bg" />
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-600/8 via-transparent to-background animate-mesh-gradient" />

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-2 h-2 rounded-full bg-orange-500/40"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Floating animated blobs */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
              width: `${300 + i * 50}px`,
              height: `${300 + i * 50}px`,
              background:
                i % 3 === 0
                  ? "linear-gradient(135deg, rgba(255, 107, 53, 0.4), rgba(255, 140, 66, 0.2))"
                  : i % 3 === 1
                    ? "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(168, 85, 247, 0.2))"
                    : "linear-gradient(135deg, rgba(251, 146, 60, 0.3), rgba(249, 115, 22, 0.2))",
            }}
          />
        ))}

        {/* Parallax effect layers */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/3 to-transparent"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-400/20 text-orange-600 dark:text-orange-400 text-sm font-medium border border-orange-500/30 backdrop-blur-sm"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <Sparkles size={16} className="animate-pulse" />
            Welcome to my portfolio
          </motion.span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent">
            Nebil Abdo
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8 h-16 flex items-center justify-center">
          <h3 className="text-xl sm:text-2xl text-center">
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent font-semibold">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h3>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting delightful digital experiences with modern web technologies. Passionate about clean code, beautiful
          design, and creating products that make a difference.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:shadow-2xl transition-all shadow-lg"
          >
            View Projects <ArrowRight size={20} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-orange-500 text-orange-600 dark:text-orange-400 font-semibold hover:bg-orange-500/10 transition-all"
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-6">
          {[
            { icon: Github, href: "https://github.com/nebilabdo", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/nebilabdoo", label: "LinkedIn" },
            { icon: Mail, href: "mailto:nebilbromance@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.25, y: -8, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="p-3 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-400/20 hover:from-orange-500/40 hover:to-orange-400/40 text-foreground/70 hover:text-orange-600 dark:hover:text-orange-400 transition-all border border-orange-500/20 hover:border-orange-500/50 backdrop-blur-sm"
              aria-label={label}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-orange-500/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
