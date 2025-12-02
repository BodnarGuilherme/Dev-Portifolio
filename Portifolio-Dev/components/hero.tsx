"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { useState, useEffect } from "react"

const Hero = () => {
  const [showCursor, setShowCursor] = useState(true)
  const [konamiCode, setKonamiCode] = useState<string[]>([])
  const [showSecret, setShowSecret] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  const konamiSequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newSequence = [...konamiCode, event.code].slice(-10)
      setKonamiCode(newSequence)

      if (JSON.stringify(newSequence) === JSON.stringify(konamiSequence)) {
        setShowSecret(true)
        setTimeout(() => setShowSecret(false), 5000)
        setKonamiCode([])
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [konamiCode])

  const handleNameClick = () => {
    setClickCount((prev) => prev + 1)
    if (clickCount >= 4) {
      setShowSecret(true)
      setTimeout(() => setShowSecret(false), 3000)
      setClickCount(0)
    }
  }

  return (
    <section id="home" className="py-20 md:py-32 flex items-center min-h-[calc(100vh-4rem)] relative">
      {/* Subtle background grid */}
      <div className="subtle-grid"></div>

      {/* Secret Matrix Effect */}
      {showSecret && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="matrix-rain">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="matrix-column"
                style={{
                  left: `${i * 5}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                {[...Array(20)].map((_, j) => (
                  <span key={j} className="matrix-char">
                    {Math.random() > 0.5 ? "1" : "0"}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              className="bg-black/80 backdrop-blur-md rounded-lg p-6 border border-green-500/50"
            >
              <div className="text-green-400 font-mono text-center">
                <div className="text-2xl mb-2">🎉 EASTER EGG FOUND! 🎉</div>
                <div className="text-sm">Você descobriu o segredo do hacker!</div>
                <div className="text-xs mt-2 opacity-70">
                  {clickCount > 0 ? "Clique no nome 5x" : "Konami Code ativado!"}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto text-center md:text-left relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mb-6 inline-block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Badge className="security-badge px-4 py-2 text-sm font-medium cursor-pointer">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Shield className="w-4 h-4 mr-2" />
                </motion.div>
                <span>Developer & Cybersecurity</span>
              </Badge>
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 relative"
        >
          <span className="text-primary">&lt;</span>
          <motion.span
            className="text-foreground select-none"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={handleNameClick}
            title={`Cliques: ${clickCount}/5`}
          >
            Guilherme Bodnar
          </motion.span>
          <span className="text-primary">/&gt;</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 h-16"
        >
          <TypeAnimation
            sequence={[
              "🔒 Foco em Cibersegurança e Infraestrutura",
              2000,
              "🚓 Estagiário na PRF - Tecnologia e Comunicação",
              2000,
              "💻 Unindo Desenvolvimento e Segurança",
              2000,
              "🛡️ Monitoramento, GLPI e Hardening",
              2000,
              "🕵🏻️ Caçador de Easter Eggs",
              1000,
              "☁️ Projetos em Cloud e Redes",
              2000,
              "🧠 Sempre aprendendo. Sempre explorando.",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0"
        >
        Desenvolvedor & Analista de Infraestrutura. Especializando-se em Cibersegurança e Redes de Alta Disponibilidade.
        Crio soluções que unem a lógica do código com a robustez da infraestrutura corporativa para garantir performance e proteção.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <Link href="#projects">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button size="lg" className="group relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <Code className="mr-2 h-4 w-4 relative z-10" />
                <span className="relative z-10">Ver Projetos</span>
                <motion.div
                  className="ml-2 h-4 w-4 relative z-10"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>
          </Link>
          <Link href="#contact">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button size="lg" variant="outline" className="group bg-transparent">
                <Shield className="mr-2 h-4 w-4" />
                Entre em Contato
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
