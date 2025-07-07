"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Code, Shield, Cloud, Network, Coffee, Clock } from "lucide-react"
import { useEffect, useState } from "react"

interface StatItem {
  icon: React.ReactNode
  label: string
  value: number
  suffix: string
  color: string
  description: string
}

const AnimatedStats = () => {
  const [isVisible, setIsVisible] = useState(false)

  const stats: StatItem[] = [
    {
      icon: <Code className="w-6 h-6" />,
      label: "Linhas de Código",
      value: 50000,
      suffix: "+",
      color: "text-blue-600",
      description: "Escritas em diversos projetos",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      label: "Vulnerabilidades",
      value: 127,
      suffix: "",
      color: "text-red-600",
      description: "Identificadas e corrigidas",
    },
    {
      icon: <Network className="w-6 h-6" />,
      label: "Redes Configuradas",
      value: 15,
      suffix: "+",
      color: "text-green-600",
      description: "Infraestruturas implementadas",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      label: "Projetos Cloud",
      value: 8,
      suffix: "",
      color: "text-purple-600",
      description: "Deployados em produção",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      label: "Xícaras de Café",
      value: 1337,
      suffix: "+",
      color: "text-amber-600",
      description: "Consumidas programando",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Horas de Estudo",
      value: 2500,
      suffix: "+",
      color: "text-indigo-600",
      description: "Dedicadas ao aprendizado",
    },
  ]

  const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      const duration = 2000 // 2 seconds
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, [isVisible, value])

    return (
      <span>
        {displayValue.toLocaleString()}
        {suffix}
      </span>
    )
  }

  return (
    <section className="py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        onViewportEnter={() => setIsVisible(true)}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h2 className="section-heading text-center">
          <span className="text-primary">{"{"}</span> Estatísticas <span className="text-primary">{"}"}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Números que refletem minha jornada e dedicação na área de tecnologia
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="professional-card p-6 text-center group cursor-pointer h-full">
                <motion.div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>

                <motion.div
                  className={`text-3xl font-bold mb-2 ${stat.color}`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </motion.div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{stat.label}</h3>

                <p className="text-sm text-muted-foreground">{stat.description}</p>

                {/* Progress bar animation */}
                <motion.div
                  className="mt-4 h-1 bg-secondary rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`h-full bg-gradient-to-r from-primary to-primary/60`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.7 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievement badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {[
            { label: "Early Adopter", icon: "🚀" },
            { label: "Security Expert", icon: "🛡️" },
            { label: "Cloud Native", icon: "☁️" },
            { label: "Code Ninja", icon: "🥷" },
          ].map((badge, index) => (
            <motion.div
              key={badge.label}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 1 }}
              viewport={{ once: true }}
            >
              <span className="text-lg">{badge.icon}</span>
              <span className="text-sm font-medium">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AnimatedStats
