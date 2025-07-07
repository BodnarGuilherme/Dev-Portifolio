"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Code, Shield, Cloud, Network, Monitor } from "lucide-react"

const About = () => {
  const developmentSkills = ["Python", "Java", "C++", "JavaScript", "HTML5", "CSS", "C#", "PHP", "Next.js", "React"]

  const networkingSkills = [
    "Huawei S5720-28X-PWR-LI-AC",
    "MikroTik RB 3011",
    "Configuração de Switches",
    "Roteamento Avançado",
    "VLANs",
    "QoS",
  ]

  const securitySkills = [
    "Kali Linux",
    "Wireshark",
    "Nmap",
    "Análise de Malware",
    "Phishing Detection",
    "Vulnerability Assessment",
    "Penetration Testing",
    "Security Auditing",
  ]

  const ethicsMonitoringSkills = [
    "Cyber Security Ethics",
    "Network Monitoring",
    "Incident Response",
    "Threat Intelligence",
    "Security Compliance",
    "Digital Forensics",
  ]

  const cloudSkills = ["Azure", "Oracle Cloud", "GitHub", "SQL Server", "Firebase"]

  return (
    <section id="about" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h2 className="section-heading">
          <span className="text-primary">{"<"}</span>Sobre Mim<span className="text-primary">{"/>"}</span>
        </h2>

        <Card className="professional-card p-6 md:p-8 mb-8">
          <div className="space-y-6 text-lg">
            <p className="leading-relaxed">
              Sou estudante de <strong>Análise e Desenvolvimento de Sistemas</strong>, com previsão de conclusão em
              2025, e entusiasta em <strong>Cybersecurity</strong> e Infraestrutura de Redes. Aos 21 anos, atuo como
              estagiário na Superintendência da Polícia Rodoviária Federal (PRF) em Curitiba/PR, na Divisão de
              Tecnologia e Comunicação.
            </p>

            <p className="leading-relaxed">
              Possuo experiência prática em <span className="text-primary font-semibold">Desenvolvimento de Sistemas</span>,{" "}
              <span className="text-primary font-semibold">Criação e Configuração de VPN</span>, (inclusive em cenários complexos como CGNAT),
              configurações de equipamentos de Rede corporativos e análise de vulnerabilidades. Estou me especializando em{" "}
              <strong>Cyber Security Ethics</strong>, monitoramento de redes e resposta a incidentes de segurança.
            </p>

            <p className="leading-relaxed">
              Meu foco está em desenvolver soluções seguras, implementar políticas de segurança robustas e manter a
              integridade de sistemas críticos, sempre seguindo as melhores práticas éticas da área de Cibersegurança.
            </p>
          </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="professional-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-semibold">Desenvolvimento</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {developmentSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Badge className="px-3 py-1.5 text-sm bg-blue-100 text-blue-800 border border-blue-200 rounded-full transition-all duration-300 hover:bg-blue-200 hover:border-blue-300 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-900/50">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>

          <Card className="professional-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Network className="w-5 h-5 text-green-600" />
              <h3 className="text-xl font-semibold">Networking & Infraestrutura</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {networkingSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Badge className="px-3 py-1.5 text-sm bg-green-100 text-green-800 border border-green-200 rounded-full transition-all duration-300 hover:bg-green-200 hover:border-green-300 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700 dark:hover:bg-green-900/50">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>

          <Card className="professional-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-red-600" />
              <h3 className="text-xl font-semibold">Cybersecurity & Ferramentas</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {securitySkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Badge className="px-3 py-1.5 text-sm bg-red-100 text-red-800 border border-red-200 rounded-full transition-all duration-300 hover:bg-red-200 hover:border-red-300 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700 dark:hover:bg-red-900/50">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>

          <Card className="professional-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Monitor className="w-5 h-5 text-purple-600" />
              <h3 className="text-xl font-semibold">Ética & Monitoramento</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {ethicsMonitoringSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Badge className="px-3 py-1.5 text-sm bg-purple-100 text-purple-800 border border-purple-200 rounded-full transition-all duration-300 hover:bg-purple-200 hover:border-purple-300 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700 dark:hover:bg-purple-900/50">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>

          <Card className="professional-card p-6 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Cloud className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-semibold">Cloud & Ferramentas</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cloudSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Badge className="px-3 py-1.5 text-sm bg-cyan-100 text-cyan-800 border border-cyan-200 rounded-full transition-all duration-300 hover:bg-cyan-200 hover:border-cyan-300 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-700 dark:hover:bg-cyan-900/50">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </motion.div>
    </section>
  )
}

export default About
