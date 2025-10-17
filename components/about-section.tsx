"use client"
import { motion } from "framer-motion"
import { Download, Briefcase } from "lucide-react"

export function AboutSection() {
  const skillBadges = [
    {
      label: "Frontend Developer",
      color: "from-orange-500 to-orange-600",
      position: "top-0 left-1/2 -translate-x-1/2 -translate-y-16",
    },
    {
      label: "UI/UX Designer",
      color: "from-orange-600 to-red-500",
      position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-16",
    },
    {
      label: "MERN Stack",
      color: "from-orange-400 to-orange-600",
      position: "top-1/2 right-0 translate-x-20 -translate-y-1/2",
    },
    {
      label: "Prompt Engineer",
      color: "from-orange-500 to-amber-500",
      position: "top-1/2 left-0 -translate-x-20 -translate-y-1/2",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-background to-orange-600/5 animate-gradient-bg" />
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-500/3 via-transparent to-background animate-mesh-gradient" />

        {/* Floating blobs with orange tones */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-600/15 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
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
            About <span className="text-gradient">Me</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative flex justify-center items-center mx-auto">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-4 border-orange-500/50 backdrop-blur-sm shadow-2xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/image.png"
                  alt="Nebil Abdo"
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: "center 30%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent rounded-full" />
              </motion.div>

              {skillBadges.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  className={`absolute ${skill.position} w-max`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  animate={{
                    y: [0, -8 - index * 3, 0],
                    x: [0, 3 - index * 2, 0],
                    rotate: [0, 2 - index, 0],
                  }}
                  transition={{
                    duration: 3.5 + index * 0.4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.25,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${skill.color} text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/40 shadow-lg hover:shadow-2xl transition-all cursor-pointer`}
                    whileHover={{
                      boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)",
                      y: -5,
                    }}
                  >
                    {skill.label}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="space-y-3 flex flex-col justify-center h-full text-center md:text-left"
          >
            <motion.div variants={itemVariants} className="space-y-4">
  <h3 className="text-3xl sm:text-4xl font-extrabold text-gradient tracking-tight leading-snug font-[Poppins]">
    Turning Ideas into Code. Code into Experiences.
  </h3>
  <p className="text-base sm:text-lg text-foreground/80 leading-relaxed font-[Inter]">
    I'm <span className="font-semibold text-orange-600">Nebil</span>, a passionate frontend developer from Ethiopia. 
    I build fast, modern, and responsive web experiences using 
    <span className="font-semibold"> React, Next.js,</span> and <span className="font-semibold">Tailwind CSS</span>. 
    I love turning creative ideas into smooth digital solutions that people enjoy using.
  </p>
</motion.div>

<motion.div variants={itemVariants} className="space-y-3">
  <h4 className="text-lg font-bold text-foreground font-[Poppins]">My Journey</h4>
  <p className="text-base text-foreground/80 leading-relaxed font-[Inter]">
    Curiosity led me into coding, and now I focus on clean, high-quality projects 
    with great design and user experience. I keep learning, improving, 
    and creating things that make a real impact.
  </p>
</motion.div>

<motion.div variants={itemVariants} className="space-y-3">
  <h4 className="text-lg font-bold text-foreground font-[Poppins]">Beyond Code</h4>
  <p className="text-base text-foreground/80 leading-relaxed font-[Inter]">
    When I’m not coding, I explore design trends, contribute to open source, 
    and share ideas with the developer community. 
    I believe teamwork and creativity build the best products.
  </p>
</motion.div>



            

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start"
            >
              <motion.a
                href="/cv.pdf"
                whileHover={{ scale: 1.08, y: -3, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold hover:shadow-2xl transition-all shadow-lg text-sm"
              >
                <Download size={18} /> Download CV
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector("#contact")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
                whileHover={{ scale: 1.08, y: -3, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-orange-500 text-orange-500 font-bold hover:bg-orange-500/10 transition-all text-sm"
              >
                <Briefcase size={18} /> Hire Me
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}