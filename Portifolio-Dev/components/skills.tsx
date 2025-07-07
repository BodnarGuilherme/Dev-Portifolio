"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Network, Monitor, Search, Code, Cloud } from "lucide-react"

const skillCategories = [
  {
    title: "Cybersecurity & Ethical Hacking",
    icon: <Shield className="w-6 h-6 text-red-600" />,
    skills: [
      "Kali Linux",
      "Penetration Testing",
      "Vulnerability Assessment",
      "Malware Analysis",
      "Phishing Detection",
      "Digital Forensics",
      "Incident Response",
      "Security Compliance",
    ],
    color: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/10",
    badgeColor: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700",
  },
  {
    title: "Network Security & Monitoring",
    icon: <Monitor className="w-6 h-6 text-purple-600" />,
    skills: [
      "Wireshark",
      "Nmap",
      "Network Monitoring",
      "Traffic Analysis",
      "Threat Intelligence",
      "SIEM",
      "Log Analysis",
      "Cyber Security Ethics",
    ],
    color: "border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-900/10",
    badgeColor:
      "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700",
  },
  {
    title: "Networking & Infrastructure",
    icon: <Network className="w-6 h-6 text-green-600" />,
    skills: [
      "Huawei S5720-28X-PWR-LI-AC",
      "MikroTik RB 3011",
      "VLANs Configuration",
      "QoS Implementation",
      "Routing Protocols",
      "Network Architecture",
      "Firewall Management",
      "VPN Configuration",
    ],
    color: "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/10",
    badgeColor:
      "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700",
  },
  {
    title: "Linguagens de Programação",
    icon: <Code className="w-6 h-6 text-blue-600" />,
    skills: ["Python", "Java", "C++", "C#", "C", "PHP", "JavaScript", "HTML5", "CSS", "Markdown"],
    color: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/10",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700",
  },
  {
    title: "Ferramentas & Plataformas",
    icon: <Search className="w-6 h-6 text-orange-600" />,
    skills: ["Git", "GitHub", "Visual Studio Code", "GitHub Copilot", "Figma", "Trello", "Canva", "Burp Suite"],
    color: "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/10",
    badgeColor:
      "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700",
  },
  {
    title: "Cloud & Databases",
    icon: <Cloud className="w-6 h-6 text-cyan-600" />,
    skills: ["Azure", "Oracle Cloud", "Microsoft SQL Server", "Firebase", "Linux", "Ubuntu", "Windows Server"],
    color: "border-cyan-200 bg-cyan-50 dark:border-cyan-800 dark:bg-cyan-900/10",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-700",
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="section-heading">
          <span className="text-primary">if</span>(developer.skills)
          <span className="text-primary">{"{"}</span> Habilidades <span className="text-primary">{"}"}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tecnologias, ferramentas e conhecimentos especializados em cybersecurity e desenvolvimento
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className={`h-full professional-card border ${category.color} group cursor-pointer`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="group-hover:animate-pulse"
                    >
                      {category.icon}
                    </motion.div>
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.1,
                          y: -2,
                          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 cursor-pointer ${category.badgeColor}`}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
