"use client"
import { motion } from "framer-motion"
import { Code2, Server, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "REST APIs"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Figma", "Vercel", "VS Code", "Postman", "Docker"],
    color: "from-purple-500 to-indigo-500",
  },
]

export function SkillsSection() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 via-background to-orange-400/8 animate-gradient-bg" />
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-600/5 via-transparent to-background animate-mesh-gradient" />

        {/* Orange dots pattern */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`skill-dot-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-orange-500/30"
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                {/* Circular skill container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative w-40 h-40 mb-6 rounded-full bg-gradient-to-br from-card to-card/50 border-2 border-orange-500/30 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all"
                >
                  {/* Animated background circle */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/10 to-orange-400/10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />

                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                      className="p-3 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-400/20 border border-orange-500/30 mb-2"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <IconComponent size={32} className="text-orange-600 dark:text-orange-400" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-center text-orange-600 dark:text-orange-400">
                      {category.title}
                    </h3>
                  </div>
                </motion.div>

                {/* Skills grid below circle */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2 justify-center"
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={itemVariants}
                      whileHover={{ scale: 1.15, y: -5, rotate: 2 }}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/15 to-orange-400/15 text-foreground font-medium text-xs border border-orange-500/30 hover:border-orange-500/60 transition-all cursor-default backdrop-blur-sm"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
