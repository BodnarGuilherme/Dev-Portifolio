"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink, Award, Shield, Cloud, Code } from "lucide-react"

const certificates = [
  {
    id: 1,
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "AZ-900",
    description: "Fundamentos de computação em nuvem e serviços do Microsoft Azure",
    skills: ["Azure", "Cloud Computing", "Virtual Machines", "Storage"],
    icon: <Cloud className="w-6 h-6 text-blue-600" />,
    color: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/10",
    verified: true,
  },
  {
    id: 2,
    title: "Ethical Hacking Essentials",
    issuer: "EC-Council",
    date: "2023",
    credentialId: "EHE-2023",
    description: "Fundamentos de hacking ético e testes de penetração",
    skills: ["Penetration Testing", "Vulnerability Assessment", "Network Security"],
    icon: <Shield className="w-6 h-6 text-red-600" />,
    color: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/10",
    verified: true,
  },
  {
    id: 3,
    title: "Python Programming",
    issuer: "Python Institute",
    date: "2023",
    credentialId: "PCAP-31-03",
    description: "Programação avançada em Python e desenvolvimento de aplicações",
    skills: ["Python", "Object-Oriented Programming", "Data Structures"],
    icon: <Code className="w-6 h-6 text-green-600" />,
    color: "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/10",
    verified: true,
  },
  {
    id: 4,
    title: "Network Security Fundamentals",
    issuer: "Cisco",
    date: "2023",
    credentialId: "CCNA-SEC",
    description: "Fundamentos de segurança de redes e configuração de equipamentos",
    skills: ["Network Security", "Firewall", "VPN", "Routing"],
    icon: <Shield className="w-6 h-6 text-purple-600" />,
    color: "border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-900/10",
    verified: true,
  },
]

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h2 className="section-heading">
          <span className="text-primary">const</span> Certificações <span className="text-primary">= []</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Certificações e qualificações profissionais que validam minha expertise técnica
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className={`h-full professional-card border ${cert.color} group cursor-pointer`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="group-hover:animate-pulse"
                      >
                        {cert.icon}
                      </motion.div>
                      <div>
                        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                          {cert.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground font-medium">{cert.issuer}</p>
                      </div>
                    </div>
                    {cert.verified && (
                      <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-1">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <span className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">Verificado</span>
                      </motion.div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{cert.description}</p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-mono">ID: {cert.credentialId}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-2 py-1 text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    Verificar Certificado
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <Card className="professional-card p-4 text-center">
            <motion.div
              className="text-2xl font-bold text-primary mb-1"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              4
            </motion.div>
            <div className="text-sm text-muted-foreground">Certificações</div>
          </Card>
          <Card className="professional-card p-4 text-center">
            <motion.div
              className="text-2xl font-bold text-primary mb-1"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              100%
            </motion.div>
            <div className="text-sm text-muted-foreground">Verificadas</div>
          </Card>
          <Card className="professional-card p-4 text-center">
            <motion.div
              className="text-2xl font-bold text-primary mb-1"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              3
            </motion.div>
            <div className="text-sm text-muted-foreground">Áreas</div>
          </Card>
          <Card className="professional-card p-4 text-center">
            <motion.div
              className="text-2xl font-bold text-primary mb-1"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              2024
            </motion.div>
            <div className="text-sm text-muted-foreground">Mais Recente</div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Certificates
