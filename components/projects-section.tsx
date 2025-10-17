"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"

const allProjects = [
  {
    id: 1,
    title: "Ekneb Online Bookstore",
    description: "Modern e-commerce platform with book filtering, user authentication, and secure payments. Features include wishlist, reviews, and admin dashboard.",
    image: "/online-library.png",
    category: "Web",
    links: { code: "https://github.com/nebilabdo/Online-library", demo: "https://online-library-rouge.vercel.app/" },
    tech: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: 2,
    title: "Nibilla Foodies",
    description: "Food delivery app with real-time order tracking, restaurant management, and payment integration. Includes delivery driver tracking and menu management.",
    image: "/nibilla-foodies.png",
    category: "Web",
    links: { 
      code: "https://github.com/nebilabdo/Nibilla-Foodies", 
      demo: "https://nibilla-foodies.vercel.app/" 
    },
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind"]
  },
  {
    id: 3,
    title: "HU Vehicle Management",
    description: "Enterprise system for university fleet management. Features include maintenance scheduling, fuel tracking, driver assignments, and reporting dashboard.",
    image: "/vehicle.png",
    category: "Web",
    links: { code: "https://github.com/nebilabdo/Hu-vehicle-management-system", demo: "https://hu-vehicle-management-system.vercel.app/" },
    tech: ["React", "Express", "MySQL", "Chart.js"]
  },
  {
    id: 4,
    title: "Data Exchange Portal",
    description: "Inter-institutional data sharing platform with secure file transfer, user permissions, and real-time collaboration features for educational institutions.",
    image: "/data-exchange.png",
    category: "Web",
    links: { code: "https://github.com/nebilabdo/Inter-Institutional-portal", demo: "https://dataexchangeportal-b6fb.vercel.app/" },
    tech: ["Next.js", "PostgreSQL", "Auth0", "WebSockets"]
  },
  {
    id: 5,
    title: "Capstone React UI Components",
    description: "Built interactive UI components using React and styled them with Tailwind CSS for responsive and modern layouts. Implemented reusable component library with accessibility features.",
    image: "/capistone.png",
    category: "Web",
    links: { code: "#", demo: "https://react-capstone-project-beta.vercel.app/" },
    tech: ["React", "Tailwind CSS", "JavaScript", "Component Library"]
  },
  {
    id: 6,
    title: "Ripple Analytics Dashboard",
    description: "Beautiful data visualization dashboard with interactive charts, real-time metrics, and customizable widgets for business intelligence and analytics reporting.",
    image: "/ripple-up.png",
    category: "UI",
    links: { code: "#", demo: "https://rippleup.netlify.app/" },
    tech: ["React", "D3.js", "TypeScript", "Material-UI"]
  },
  {
    id: 7,
    title: "WLO Todo App",
    description: "Productive task management application with drag-drop functionality, categories, deadlines, and progress tracking with beautiful UI.",
    image: "/wlo-todo.png",
    category: "Web",
    links: { code: "https://github.com/nebilabdo/wlo-todo", demo: "https://wlo-todo.vercel.app/" },
    tech: ["React", "LocalStorage", "CSS3", "Context API"]
  },
  {
    id: 8,
    title: "Modern Landing Page",
    description: "Responsive landing page with smooth animations, optimized performance, and SEO-friendly structure. Perfect for product showcases.",
    image: "/landing-page.png",
    category: "Web",
    links: { code: "https://github.com/nebilabdo/landing-page", demo: "https://landing-page-lovat-six-99.vercel.app/" },
    tech: ["HTML5", "CSS3", "JavaScript", "GSAP"]
  },
  {
    id: 9,
    title: "Task Manager Pro",
    description: "Advanced task management with team collaboration, time tracking, project milestones, and productivity analytics.",
    image: "/task-manager.png",
    category: "Web",
    links: { code: "https://github.com/nebilabdo/task-manager-main", demo: "https://task-manager-gamma-sand-75.vercel.app/" },
    tech: ["Vue.js", "Node.js", "MongoDB", "Socket.io"]
  },
]

const categories = ["All", "Web", "AI", "UI"]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [showAllProjects, setShowAllProjects] = useState(false)

  const filteredProjects =
    activeCategory === "All" ? allProjects : allProjects.filter((p) => p.category === activeCategory)

  // Show only 6 projects initially, or all if showAllProjects is true
  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6)

  const hasMoreProjects = filteredProjects.length > 6

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-background to-orange-600/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-background to-orange-600/5" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Floating animated blobs */}
        <motion.div
          className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-r from-orange-500/20 to-amber-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -60, 0], x: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-l from-orange-600/15 to-amber-600/10 rounded-full blur-3xl"
          animate={{ y: [0, 70, 0], x: [0, -25, 0] }}
          transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

      
        

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 border border-orange-200/50 dark:border-orange-800/30 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 backdrop-blur-sm flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 flex-shrink-0">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent dark:from-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content - Flex-grow to push buttons to bottom */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech?.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 rounded-md text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons - Always at bottom */}
                  <div className="flex gap-3 mt-auto pt-4">
                    <motion.a
                      href={project.links.code}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-orange-500/20 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600"
                    >
                      <Github size={16} /> Code
                    </motion.a>
                    <motion.a
                      href={project.links.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white shadow-md hover:shadow-lg transition-all text-sm font-medium"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* See All Projects Button */}
        {hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <motion.button
              onClick={() => setShowAllProjects(!showAllProjects)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 hover:from-orange-500/20 hover:to-amber-500/20 text-foreground hover:text-orange-600 dark:hover:text-orange-400 border border-orange-300/50 dark:border-orange-700/50 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300 font-medium group backdrop-blur-sm"
            >
              {showAllProjects ? (
                <>
                  <ChevronUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
                  Show Less Projects
                  <ChevronUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  <ChevronDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
                  See All Projects ({filteredProjects.length})
                  <ChevronDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
            </motion.button>
          </motion.div>
        )}

        {/* Project count indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing {displayedProjects.length} of {filteredProjects.length} projects
            {activeCategory !== "All" && ` in ${activeCategory}`}
          </p>
        </motion.div>
      </div>
    </section>
  )
}