"use client"

import { motion } from "framer-motion"
import { ArrowUp, Mail, Github, Linkedin, Send, Heart, Coffee, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [currentYear] = useState(new Date().getFullYear())

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    { icon: Mail, href: "mailto:nebilbromance@gmail.com", label: "Email", gradient: "from-orange-500 to-orange-600" },
    { icon: Send, href: "https://t.me/nebilzone", label: "Telegram", gradient: "from-orange-500 to-orange-400" },
    { icon: Github, href: "https://github.com/nebilabdo", label: "GitHub", gradient: "from-orange-600 to-orange-500" },
    { icon: Linkedin, href: "https://linkedin.com/in/nebilabdoo", label: "LinkedIn", gradient: "from-orange-500 to-orange-700" },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  const contactInfo = [
    { icon: MapPin, text: "Haramaya University", subtext: "Available Worldwide" },
    { icon: Phone, text: "+251 948 76-9744", subtext: "24/7" },
  ]

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }

  return (
    <footer className="relative py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 via-background to-orange-400/8 animate-gradient-bg" />
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-600/5 via-transparent to-background animate-mesh-gradient" />
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`footer-dot-${i}`}
            className="absolute w-2 h-2 rounded-full bg-orange-500/25"
            animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.3, 1] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
        <motion.div
          className="absolute top-10 left-1/4 w-72 h-72 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, -80, 0], x: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-1/4 w-72 h-72 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 80, 0], x: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/2 to-transparent"
          animate={{ y: [0, -100, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Grid Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.h3
              className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-3 md:mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Nebil Abdo
            </motion.h3>
            <p className="text-foreground/60 mb-4 leading-relaxed text-sm md:text-base">
              Transforming ideas into seamless code. Crafting experiences that inspire. Building interactive projects efficiently.
            </p>
            <div className="flex items-center gap-2 text-sm text-foreground/50">
              <span>Made with</span>
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                <Heart size={16} className="text-orange-500 fill-current" />
              </motion.div>
              <span>&</span>
              <Coffee size={16} className="text-orange-500" />
            </div>
          </motion.div>

          {/* Quick Links Horizontal on mobile */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-3 text-foreground">Quick Links</h4>
            <ul className="flex flex-wrap gap-4 sm:flex-col sm:gap-2">
              {quickLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 3 }}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 text-sm"
                  >
                    <div className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info Horizontal on mobile */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-3 text-foreground">Contact</h4>
            <div className="flex flex-wrap gap-4 sm:flex-col sm:gap-2">
              {contactInfo.map((item, idx) => (
                <motion.div key={idx} className="flex items-center gap-2 text-foreground/60" whileHover={{ scale: 1.02 }}>
                  <item.icon size={18} className="text-orange-500 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">{item.text}</p>
                    <p className="text-xs text-foreground/50">{item.subtext}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-3 text-foreground">Stay Updated</h4>
            <p className="text-foreground/60 mb-2 text-sm">
              Get updates on projects and tech insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg bg-card border-2 border-orange-500/30 focus:border-orange-500 focus:outline-none text-foreground text-sm placeholder:text-foreground/40 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,107,53,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium text-sm hover:shadow-lg flex items-center justify-center transition-shadow"
              >
                Join
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Social & Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 pt-6 border-t border-orange-500/20"
        >
          {/* Social Icons */}
          <motion.div className="flex gap-3 flex-wrap justify-center sm:justify-start">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5, boxShadow: "0 10px 25px rgba(255,107,53,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-card border-2 border-orange-500/30 text-foreground/70 transition-all duration-300 relative overflow-hidden"
                aria-label={link.label}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-xl`} />
                <link.icon size={20} className="relative z-10" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div className="text-center sm:text-right text-xs sm:text-sm text-foreground/50">
            <p>© {currentYear} Nebil Abdo. All rights reserved.</p>
            <p className="text-foreground/40 mt-1">Crafted with passion & attention to detail</p>
          </motion.div>

          {/* Scroll Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5, boxShadow: "0 20px 40px rgba(249,115,22,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg transition-shadow flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
