"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true) // default dark
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check local storage for previous preference
    const savedTheme = localStorage.getItem("theme")
    const html = document.documentElement

    if (savedTheme === "light") {
      html.classList.remove("dark")
      setIsDark(false)
    } else {
      // default to dark
      html.classList.add("dark")
      setIsDark(true)
    }
  }, [])

  const toggleTheme = () => {
    if (!mounted) return

    const html = document.documentElement

    if (isDark) {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  if (!mounted) {
    return <div className="w-10 h-10" />
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-lg hover:bg-orange-500/10 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={20} className="text-orange-500" />
      ) : (
        <Moon size={20} className="text-foreground/70" />
      )}
    </motion.button>
  )
}
