"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    if (!isMounted) return;

    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      })
    } else {
      // Fallback to top if element not found
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const handleLogoClick = () => {
    if (!isMounted) return;
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isSticky
          ? "bg-background/95 backdrop-blur-xl border-b border-orange-500/40 shadow-2xl py-0"
          : "bg-background/80 backdrop-blur-md border-b border-orange-500/20 py-2"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className={`flex justify-between items-center transition-all duration-500 ${
            isSticky ? "h-14" : "h-16"
          }`}
          animate={{
            height: isSticky ? 56 : 64 // h-14 vs h-16
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={handleLogoClick}
          >
            <div className="flex flex-col">
              <motion.span
  className="
    text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r
    from-black via-orange-600 to-amber-500
    dark:from-orange-200 dark:via-orange-400 dark:to-yellow-300
    bg-clip-text text-transparent font-[Poppins]
    transition-all duration-500
  "
  initial={{ scale: 1 }}
  animate={{ scale: isSticky ? 0.85 : 1 }}
  transition={{ duration: 0.25 }}
>
  Nebil Abdo
</motion.span>

            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                whileHover={{ y: -2 }}
                className="text-sm font-medium text-foreground/70 hover:text-orange-500 transition-colors duration-300 relative group"
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-orange-500/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} className="text-orange-500" /> : <Menu size={20} />}
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu - NO ANIMATIONS, NO ANIMATEPRESENCE */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-orange-500/20">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground/70 hover:text-orange-500 hover:bg-orange-500/10 transition-colors border-l-2 border-transparent hover:border-orange-500"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  )
}