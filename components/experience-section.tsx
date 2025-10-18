"use client"
import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Calendar, MapPin, Star, Rocket, Target } from "lucide-react"

const timeline = [
  {
    type: "experience",
    title: "Frontend Developer",
    company: "Self-Employed",
    period: "2023 - Present",
    duration: "1+ years",
    location: "Remote & Local",
    description:
      "Building modern web applications for clients and personal projects. Creating interactive websites, managing end-to-end development, and continuously learning new technologies.",
    icon: Briefcase,
    technologies: ["HTML", "CSS", "SASS", "JavaScript", "React", "Next.js", "Tailwind"],
    achievements: [
      "Delivered 5+ client projects independently",
      "Developed and launched personal projects like Nibilla Foodies",
      "Improved UI/UX performance and responsiveness across projects",
    ],
  },
  {
    type: "education",
    title: "BSc in Computer Science",
    company: "Haramaya University",
    period: "2022 - 2026(present)",
    duration: "4 years",
    location: "Ethiopia",
    description:
      "Specialized in software development and web technologies. Completed capstone project on AI-powered learning platform.",
    icon: GraduationCap,
    technologies: ["Java", "Python", "SQL", "Algorithms"],
    achievements: ["GPA: 3.8/4.0", "Dean's List", "Tech Club President"],
  },
  {
    type: "experience",
    title: "Web Development Intern",
    company: "Mesob",
    period: "2022 - 2023",
    duration: "1 year",
    location: "Addis Ababa",
    description:
      "Developed responsive web applications using React and Next.js. Collaborated with design team to implement UI/UX improvements.",
    icon: Briefcase,
    technologies: ["React", "Next.js", "CSS3", "Figma"],
    achievements: ["Built 10+ components", "Reduced load time by 30%", "Improved UX scores"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Amazing Background */}
      <div className="absolute inset-0 -z-10">
        {/* Base Gradient Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-background to-amber-600/10 animate-gradient-bg" />
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-400/5 via-transparent to-amber-500/8 animate-mesh-gradient" />

        {/* Animated Radial Gradients */}
        <motion.div
          className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-br from-orange-500/20 to-amber-400/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 -right-10 w-80 h-80 bg-gradient-to-bl from-amber-500/18 to-orange-600/12 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.4, 0.6, 0.4],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Main Floating Blobs - Enhanced */}
        <motion.div
          className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-bl from-orange-500/20 to-amber-400/10 rounded-full blur-3xl"
          animate={{
            y: [0, -60, 0],
            x: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-amber-600/15 to-orange-500/12 rounded-full blur-3xl"
          animate={{
            y: [0, 70, 0],
            x: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-br from-orange-400/15 to-amber-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 35,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,oklch(0.65_0.22_47.15)_1px,transparent_0)] bg-[length:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_95%,oklch(0.65_0.22_47.15)_95%),linear-gradient(0deg,transparent_95%,oklch(0.65_0.22_47.15)_95%)] bg-[length:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        </div>

        {/* Enhanced Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-orange-500/30 to-amber-500/25"
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 2, 1],
              y: [0, -15 - Math.random() * 20, 0],
              x: [0, (Math.random() - 0.5) * 10, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Large Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 rounded-full bg-orange-400/20 blur-sm"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.3, 0.7, 0.3],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-32 right-32 w-3 h-3 rounded-full bg-amber-500/25 blur-sm"
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.4, 0.8, 0.4],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Subtle Shine Effect */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Journey &{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Growth</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line with Enhanced Gradient - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2 bg-gradient-to-b from-orange-400 via-orange-500 to-amber-500 shadow-lg shadow-orange-500/20" />

          {/* Timeline Items - True overlapping on desktop, sequential on mobile */}
          <div className="relative">
            {timeline.map((item, index) => {
              const Icon = item.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative flex ${
                    isEven ? "lg:justify-start" : "lg:justify-end"
                  } justify-start ${index > 0 ? "mt-6 lg:-mt-28" : ""}`}
                  style={{
                    zIndex: timeline.length - index,
                  }}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-[45%] ${isEven ? "lg:pr-8" : "lg:pl-8"}`}>
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        y: -3,
                        transition: { duration: 0.2 },
                      }}
                      className="group relative"
                    >
                      {/* Enhanced Card Glow Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300" />

                      {/* Amazing Dark Mode Card Background */}
                      <div
                        className="relative p-6 rounded-xl 
                        /* Light Mode */
                        bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm border border-white/60 shadow-lg
                        /* Dark Mode - Matching Amazing Gradient Backgrounds */
                        dark:bg-gradient-to-br dark:from-gray-900/90 dark:via-gray-800/85 dark:to-gray-900/90
                        dark:border-gray-700/50 dark:backdrop-blur-md
                        dark:shadow-2xl dark:shadow-orange-500/5
                        hover:shadow-xl dark:hover:shadow-orange-500/10
                        transition-all duration-300
                        /* Dark Mode Inner Glow Effect */
                        dark:before:absolute dark:before:inset-0 dark:before:rounded-xl 
                        dark:before:bg-gradient-to-br dark:before:from-orange-500/10 dark:before:via-amber-500/5 dark:before:to-orange-600/8
                        dark:before:pointer-events-none dark:before:opacity-50
                        /* Subtle border glow */
                        dark:after:absolute dark:after:inset-0 dark:after:rounded-xl 
                        dark:after:bg-gradient-to-r dark:after:from-orange-500/20 dark:after:to-amber-500/15
                        dark:after:pointer-events-none dark:after:opacity-0 dark:group-hover:after:opacity-100
                        dark:after:blur-sm dark:after:transition-opacity dark:after:duration-300"
                      >
                        {/* Compact Header */}
                        <div className="flex flex-wrap items-center gap-2 mb-3 relative z-10">
                          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-semibold shadow-lg shadow-orange-500/25 flex items-center gap-1">
                            {item.type === "experience" ? <Briefcase size={12} /> : <GraduationCap size={12} />}
                            {item.type === "experience" ? "EXP" : "EDU"}
                          </span>

                          <span className="flex items-center gap-1 text-xs text-foreground/50 bg-white/40 dark:bg-gray-800/60 px-2 py-1 rounded-full border border-white/30 dark:border-gray-700/50 backdrop-blur-sm">
                            <Calendar size={12} />
                            {item.duration}
                          </span>
                        </div>

                        {/* Title & Company */}
                        <div className="mb-4 relative z-10">
                          <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-300 dark:to-amber-300 bg-clip-text text-transparent">
                            {item.title}
                          </h3>
                          <p className="text-base font-semibold text-foreground/80 dark:text-gray-200/90">
                            {item.company}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin size={12} className="text-foreground/40 dark:text-gray-500" />
                            <p className="text-sm text-foreground/50 dark:text-gray-400">
                              {item.period} • {item.location}
                            </p>
                          </div>
                        </div>

                        {/* Compact Description */}
                        <p className="text-foreground/70 dark:text-gray-300/90 mb-4 leading-relaxed text-sm relative z-10">
                          {item.description}
                        </p>

                        {/* Compact Technologies */}
                        <div className="mb-4 relative z-10">
                          <div className="flex items-center gap-1 mb-2">
                            <Target size={14} className="text-orange-500 dark:text-orange-400" />
                            <span className="text-sm font-semibold text-foreground/70 dark:text-gray-300">
                              Tech Stack
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.technologies.slice(0, 4).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 text-xs bg-gradient-to-r from-orange-500/15 to-amber-500/10 text-orange-700 dark:text-orange-300 rounded-md font-medium border border-orange-500/20 dark:border-orange-500/30 backdrop-blur-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Compact Achievements */}
                        <div className="relative z-10">
                          <div className="flex items-center gap-1 mb-2">
                            <Star size={14} className="text-amber-500 dark:text-amber-400" />
                            <span className="text-sm font-semibold text-foreground/70 dark:text-gray-300">
                              Highlights
                            </span>
                          </div>
                          <div className="space-y-1">
                            {item.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                              <div
                                key={achievementIndex}
                                className="flex items-center gap-2 text-xs text-foreground/60 dark:text-gray-400"
                              >
                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex-shrink-0" />
                                <span>{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Dot - Hidden on mobile, shown on desktop */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-20">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-lg border-2 border-white dark:border-gray-900 shadow-orange-500/30"
                    >
                      <Icon size={18} />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold text-sm shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/40 transition-all duration-300 cursor-pointer border border-orange-400/30"
          >
            <Rocket size={18} />
            View Full Portfolio
            <Star size={16} className="opacity-80" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
