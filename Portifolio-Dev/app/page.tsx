"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import DeveloperConsole from "@/components/developer-console"
import { useTheme } from "next-themes"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)

    // Listen for custom events from console commands
    const handleTriggerMatrix = () => {
      document.body.classList.add("matrix-mode")
      setTimeout(() => document.body.classList.remove("matrix-mode"), 5000)
    }

    const handleTriggerKonami = () => {
      // Trigger the same effect as the konami code in hero
      const event = new CustomEvent("konamiActivated")
      window.dispatchEvent(event)
    }

    const handleTriggerRainbow = () => {
      document.body.classList.add("rainbow-mode")
      setTimeout(() => document.body.classList.remove("rainbow-mode"), 3000)
    }

    window.addEventListener("triggerMatrix", handleTriggerMatrix)
    window.addEventListener("triggerKonami", handleTriggerKonami)
    window.addEventListener("triggerRainbow", handleTriggerRainbow)

    return () => {
      window.removeEventListener("triggerMatrix", handleTriggerMatrix)
      window.removeEventListener("triggerKonami", handleTriggerKonami)
      window.removeEventListener("triggerRainbow", handleTriggerRainbow)
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="subtle-grid"></div>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <DeveloperConsole />
    </div>
  )
}
