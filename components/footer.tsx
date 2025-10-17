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
    { 
      icon: Mail, 
      href: "mailto:nebilbromance@gmail.com", 
      label: "Email", 
      color: "hover:text-orange-500",
      gradient: "from-orange-500 to-orange-600"
    },
    { 
      icon: Send, 
      href: "https://t.me/nebilzone", 
      label: "Telegram", 
      color: "hover:text-orange-500",
      gradient: "from-orange-500 to-orange-400"
    },
    { 
      icon: Github, 
      href: "https://github.com/nebilabdo", 
      label: "GitHub", 
      color: "hover:text-orange-500",
      gradient: "from-orange-600 to-orange-500"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/nebilabdoo", 
      label: "LinkedIn", 
      color: "hover:text-orange-500",
      gradient: "from-orange-500 to-orange-700"
    },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <footer className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background - Matching ContactSection */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 via-background to-orange-400/8 animate-gradient-bg" />
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-600/5 via-transparent to-background animate-mesh-gradient" />

        {/* Orange dots pattern - matching ContactSection */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`footer-dot-${i}`}
            className="absolute w-2 h-2 rounded-full bg-orange-500/25"
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Floating animated blobs - matching ContactSection */}
        <motion.div
          className="absolute top-10 left-1/4 w-80 h-80 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, -80, 0], x: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 80, 0], x: [0, -40, 0] }}
          transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Wave animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/2 to-transparent"
          animate={{ y: [0, -100, 0] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.h3 
              className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Nebil Abdo
            </motion.h3>
            <p className="text-foreground/60 mb-6 leading-relaxed">
              Transforming ideas into seamless code. Crafting experiences that inspire.
              Designing clean solutions. Building interactive projects. Making the web better, one line at a time.
            </p>
            <div className="flex items-center gap-2 text-sm text-foreground/50">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={16} className="text-orange-500 fill-current" />
              </motion.div>
              <span>&</span>
              <Coffee size={16} className="text-orange-500" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <a 
                    href={link.href}
                    className="text-foreground/60 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-6 text-foreground">Get In Touch</h4>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3 text-foreground/60"
                  whileHover={{ scale: 1.02 }}
                >
                  <item.icon size={18} className="mt-0.5 text-orange-500 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{item.text}</p>
                    <p className="text-sm text-foreground/50">{item.subtext}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-6 text-foreground">Stay Updated</h4>
            <p className="text-foreground/60 mb-4 text-sm">
              Get the latest updates on my projects and tech insights.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-lg bg-card border-2 border-orange-500/30 focus:border-orange-500 focus:outline-none transition-colors placeholder:text-foreground/40 text-foreground"
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 107, 53, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium text-sm hover:shadow-lg transition-shadow flex items-center gap-2"
              >
                Join
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links & Scroll Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-8 border-t border-orange-500/20"
        >
          {/* Social Icons */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  boxShadow: "0 10px 25px rgba(255, 107, 53, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-xl bg-card border-2 border-orange-500/30 text-foreground/70 ${link.color} transition-all duration-300 hover:shadow-lg hover:border-orange-500/60 group relative overflow-hidden`}
                aria-label={link.label}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />
                <link.icon size={20} className="relative z-10" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-right"
          >
            <p className="text-foreground/50 text-sm">
              © {currentYear} Nebil Abdo. All rights reserved.
            </p>
            <p className="text-foreground/40 text-xs mt-1">
              Crafted with passion and attention to detail
            </p>
          </motion.div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ 
              scale: 1.1, 
              y: -5, 
              boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)" 
            }}
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