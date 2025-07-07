"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Header = () => {
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["home", "about", "experience", "projects", "skills", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  const socialLinks = [
    { href: "https://github.com/BodnarGuilherme", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/guilherme-bodnar-8a71a2213/", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:devguibodnar@gmail.com", icon: Mail, label: "Email" },
    { href: "https://wa.me/5541995270858", icon: Phone, label: "WhatsApp" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-2 font-bold text-xl group">
              <motion.span
                className="text-primary"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                &lt;
              </motion.span>
              <motion.span whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                BodnarGui
              </motion.span>
              <motion.span
                className="text-primary"
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                /&gt;
              </motion.span>
            </Link>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex space-x-6"
          >
            {["home", "about", "experience", "projects", "skills", "contact"].map((section, index) => (
              <motion.div
                key={section}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link href={`#${section}`} className={`nav-link relative ${activeSection === section ? "active" : ""}`}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="hidden md:flex space-x-2">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="social-icon"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full relative overflow-hidden"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: theme === "dark" ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
              </Button>
            </motion.div>

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Menu size={20} />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-8">
                    <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
                      <span className="text-primary">&lt;</span>
                      <span>BodnarGui</span>
                      <span className="text-primary">/&gt;</span>
                    </Link>
                  </div>

                  <nav className="flex flex-col space-y-6 text-lg">
                    {["home", "about", "experience", "projects", "skills", "contact"].map((section, index) => (
                      <motion.div
                        key={section}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <Link href={`#${section}`} className="hover:text-primary transition-colors">
                          {section.charAt(0).toUpperCase() + section.slice(1)}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  <div className="mt-auto mb-8">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-muted-foreground mb-4"
                    >
                      Conecte-se comigo
                    </motion.p>
                    <div className="flex space-x-4">
                      {socialLinks.map((link, index) => (
                        <motion.a
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="social-icon"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        >
                          <link.icon size={18} />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </motion.div>
        </div>
      </div>
    </header>
  )
}

export default Header
