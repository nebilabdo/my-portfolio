"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, ArrowUp } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/12 via-background to-orange-400/12 animate-gradient-bg" />
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-600/8 via-transparent to-background animate-mesh-gradient" />

        {/* Orange dots pattern */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`contact-dot-${i}`}
            className="absolute w-2 h-2 rounded-full bg-orange-500/35"
            animate={{
              opacity: [0.25, 0.7, 0.25],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 3.5 + i * 0.4,
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
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, -100, 0], x: [0, 50, 0] }}
          transition={{ duration: 24, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-orange-500/15 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 100, 0], x: [0, -50, 0] }}
          transition={{ duration: 28, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Wave animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/3 to-transparent"
          animate={{ y: [0, -120, 0] }}
          transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get in{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-foreground/60 mb-4">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto" />
        </motion.div>

        <motion.form
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 mb-12"
        >
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-card border-2 border-orange-500/30 focus:border-orange-500 focus:outline-none transition-colors placeholder:text-foreground/40"
              placeholder="Nebil Abdo"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-card border-2 border-orange-500/30 focus:border-orange-500 focus:outline-none transition-colors placeholder:text-foreground/40"
              placeholder="your@email.com"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-card border-2 border-orange-500/30 focus:border-orange-500 focus:outline-none transition-colors resize-none placeholder:text-foreground/40"
              placeholder="Tell me about your project or idea..."
            />
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 107, 53, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
          >
            {submitted ? (
              <>
                <span>Message Sent!</span>
                <span>✓</span>
              </>
            ) : (
              <>
                <Send size={20} /> Send Message
              </>
            )}
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          

          
        </motion.div>
      </div>
    </section>
  )
}
