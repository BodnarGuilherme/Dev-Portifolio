"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

const contactItems = [
  {
    icon: <Mail className="h-5 w-5 text-primary" />,
    title: "Email",
    value: "devguibodnar@gmail.com",
    href: "mailto:devguibodnar@gmail.com",
  },
  {
    icon: <Phone className="h-5 w-5 text-primary" />,
    title: "WhatsApp",
    value: "+55 (41) 99527-0858",
    href: "https://wa.me/5541995270858",
  },
  {
    icon: <Linkedin className="h-5 w-5 text-primary" />,
    title: "LinkedIn",
    value: "linkedin.com/in/guilherme-bodnar",
    href: "https://www.linkedin.com/in/guilherme-bodnar-8a71a2213/",
  },
  {
    icon: <Github className="h-5 w-5 text-primary" />,
    title: "GitHub",
    value: "github.com/BodnarGuilherme",
    href: "https://github.com/BodnarGuilherme",
  },
]

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="section-heading">
          <span className="text-primary">function</span> connect()
          <span className="text-primary">{"{"}</span> Contato <span className="text-primary">{"}"}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Vamos trabalhar juntos no seu próximo projeto
        </p>

        <div className="flex justify-center">
          <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.3 }} className="w-full max-w-2xl">
            <Card className="professional-card border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <CardTitle className="text-2xl font-bold text-center">Informações de Contato</CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground mb-8 text-center"
                >
                  Estou disponível para projetos freelance, oportunidades de trabalho e colaborações. Entre em contato
                  para discutirmos como posso ajudar no seu projeto.
                </motion.p>

                <div className="grid gap-6 md:grid-cols-2">
                  {contactItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <motion.a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-primary/10 border border-transparent hover:border-primary/20"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-base group-hover:text-primary transition-colors duration-300">
                            {item.value}
                          </p>
                        </div>
                      </motion.a>
                    </motion.div>
                  ))}
                </div>

                {/* Animação de pulso sutil */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="mt-8 text-center"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Disponível para novos projetos
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
