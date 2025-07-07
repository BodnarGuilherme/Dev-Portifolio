"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Phone, Heart, Coffee } from "lucide-react"
import { useState } from "react"

const Footer = () => {
  const [coffeeCount, setCoffeeCount] = useState(0)
  const [showCoffeeMessage, setShowCoffeeMessage] = useState(false)

  const socialLinks = [
    { href: "https://github.com/BodnarGuilherme", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/guilherme-bodnar-8a71a2213/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://wa.me/5541995270858", icon: Phone, label: "WhatsApp" },
  ]

  const handleCoffeeClick = () => {
    setCoffeeCount((prev) => prev + 1)
    setShowCoffeeMessage(true)
    setTimeout(() => setShowCoffeeMessage(false), 2000)
  }

  const getCoffeeMessage = () => {
    if (coffeeCount < 3) return "☕ Obrigado pelo café!"
    if (coffeeCount < 6) return "☕☕ Mais energia para codar!"
    if (coffeeCount < 10) return "☕☕☕ Agora sim, vamos hackear!"
    return "🚀 MODO HACKER ATIVADO! ☕×∞"
  }

  return (
    <footer className="py-8 border-t border-border/40 relative">
      {/* Coffee Counter Easter Egg */}
      {showCoffeeMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-full text-sm font-medium border border-amber-200 dark:border-amber-700 z-10"
        >
          {getCoffeeMessage()}
        </motion.div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <motion.p
            className="text-muted-foreground text-sm mb-4 md:mb-0 flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            © 2025 Guilherme Bodnar. Desenvolvido com{" "}
            <motion.span
              className="inline-block"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Heart className="inline-block w-4 h-4 text-red-500 fill-current" />
            </motion.span>{" "}
            e{" "}
            <motion.button
              onClick={handleCoffeeClick}
              className="inline-flex items-center gap-1 hover:text-amber-600 transition-colors cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={`Cafés: ${coffeeCount}`}
            >
              <Coffee className="w-4 h-4" />
              <span className="text-xs">×{coffeeCount}</span>
            </motion.button>{" "}
            usando Next.js e React.
          </motion.p>

          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon group"
                whileHover={{
                  scale: 1.2,
                  y: -3,
                  rotate: [0, -10, 10, 0],
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 400,
                }}
                viewport={{ once: true }}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Subtle wave animation */}
        <motion.div
          className="mt-4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </footer>
  )
}

export default Footer
