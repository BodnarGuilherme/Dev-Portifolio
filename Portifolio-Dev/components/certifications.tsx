"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Shield, Code, GitBranch } from "lucide-react"

const certifications = [
  {
    title: "Certificação NSE: Fortinet Training Institute",
    subtitle: "Network Security Associate (NSE 1 & 2)",
    description: "Certificação focada no cenário de ameaças cibernéticas e fundamentos de segurança de redes corporativas.",
    icon: <Shield className="w-8 h-8 text-red-600" />, // Aumentei levemente para w-8 h-8 para dar mais peso ao card
    tags: ["NSE 1", "NSE 2", "Network Security", "Fortinet", "Cybersecurity"],
    color: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/10",
    badgeColor: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700",
  },
  {
    title: "Python 3",
    subtitle: "Luiz Otávio Miranda (Udemy)",
    description: "Formação intensiva cobrindo lógica de programação, orientação a objetos, automação de tarefas e desenvolvimento web.",
    icon: <Code className="w-8 h-8 text-blue-600" />,
    tags: ["Python 3", "Django", "Scripting", "Automação", "Backend"],
    color: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/10",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700",
  },
  {
    title: "Git e GitHub",
    subtitle: "Controle de Versão & DevOps",
    description: "Domínio completo de versionamento de código, fluxos de trabalho (gitflow) e colaboração em projetos open-source.",
    icon: <GitBranch className="w-8 h-8 text-orange-600" />,
    tags: ["Git", "GitHub", "Teamwork", "Version Control"],
    color: "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/10",
    badgeColor:
      "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700",
  },
]

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4" // Adicionei px-4 para evitar colar nas bordas em mobile
      >
        <h2 className="section-heading mb-4"> {/* Adicionei margem em baixo */}
          <span className="text-primary">while</span>(studying)
          <span className="text-primary">{"{"}</span> Certificações & Cursos <span className="text-primary">{"}"}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aprendizado contínuo para validar conhecimentos e acompanhar as tecnologias de mercado.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Aumentei o gap para 8 */}
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }} // Ajustei levemente o hover
              className="h-full" // Garante que o motion div ocupe a altura toda
            >
              <Card className={`h-full flex flex-col professional-card border-2 ${cert.color} group cursor-pointer overflow-hidden`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    {/* Container do Ícone */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="shrink-0 mt-1 p-2 rounded-lg bg-background/60 backdrop-blur-sm border shadow-sm group-hover:animate-pulse"
                    >
                      {cert.icon}
                    </motion.div>
                    
                    {/* Container de Texto (Título e Subtítulo) */}
                    <div className="flex flex-col space-y-1">
                      <CardTitle className="text-lg font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium text-primary/80">
                        {cert.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow flex flex-col justify-between gap-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                  
                  {/* Container das Tags - Fixado no fundo */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-border/50">
                    {cert.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: tagIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.1,
                          y: -2,
                          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-300 cursor-pointer ${cert.badgeColor}`}
                      >
                        {tag}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Efeitos de fundo originais */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
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

export default Certifications