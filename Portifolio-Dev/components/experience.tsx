"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, GraduationCap, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    id: 1,
    title: "Estagiário em Tecnologia e Comunicação",
    company: "Superintendência da Polícia Rodoviária Federal (PRF)",
    location: "Curitiba, PR",
    period: "2024 - Presente",
    type: "Estágio",
    description: [
      "Desenvolvimento e manutenção de sistemas internos utilizando tecnologias modernas",
      "Configuração e monitoramento de equipamentos de rede corporativos",
      "Análise de vulnerabilidades e implementação de políticas de segurança",
      "Suporte técnico especializado em infraestrutura de TI",
      "Participação em projetos de modernização tecnológica da instituição",
    ],
    skills: ["Python", "Network Security", "System Administration", "Technical Support"],
    icon: <Building className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />,
    color: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/10",
  },
  {
    id: 2,
    title: "Estudante de Análise e Desenvolvimento de Sistemas",
    company: "Instituição de Ensino Superior",
    location: "Curitiba, PR",
    period: "2021 - 2025 (Previsão)",
    type: "Educação",
    description: [
      "Formação técnica em desenvolvimento de software e sistemas",
      "Especialização em segurança da informação e cybersecurity",
      "Projetos práticos em desenvolvimento web e mobile",
      "Estudos avançados em banco de dados e arquitetura de sistemas",
      "Participação em projetos acadêmicos e competições de programação",
    ],
    skills: ["Software Development", "Database Design", "Web Development", "System Architecture"],
    icon: <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-green-600" />,
    color: "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/10",
  },
  {
    id: 3,
    title: "Projetos Freelance e Pessoais",
    company: "Desenvolvimento Independente",
    location: "Curitiba, PR",
    period: "2023 - Presente",
    type: "Freelance",
    description: [
      "Desenvolvimento de soluções personalizadas para pequenas empresas",
      "Criação de sistemas de segurança e monitoramento de redes",
      "Consultoria em cybersecurity e análise de vulnerabilidades",
      "Implementação de infraestrutura de rede para escritórios",
      "Projetos de automação e análise de dados",
    ],
    skills: ["Full Stack Development", "Network Configuration", "Security Consulting", "Automation"],
    icon: <Building className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />,
    color: "border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-900/10",
  },
]

const Experience = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([1]) // Primeiro card expandido por padrão

  const toggleCard = (id: number) => {
    setExpandedCards((prev) => (prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]))
  }

  return (
    <section id="experience" className="py-12 md:py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h2 className="section-heading text-center">
          <span className="text-primary">while</span>(learning)<span className="text-primary">{"{"}</span> Experiência{" "}
          <span className="text-primary">{"}"}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base px-4">
          Minha jornada profissional e acadêmica em Tecnologia e Cybersecurity
        </p>

        <div className="relative px-4 md:px-0">
          {/* Timeline line - apenas desktop */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>

          <div className="space-y-4 md:space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-20px" }}
                className="relative"
              >
                {/* Timeline dot - apenas desktop */}
                <div className="absolute left-4 md:left-6 top-4 md:top-6 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full border-2 md:border-4 border-background shadow-lg hidden md:block"></div>

                <Card className={`professional-card ml-0 md:ml-16 border ${experience.color} overflow-hidden`}>
                  <CardHeader
                    className="pb-3 md:pb-4 cursor-pointer md:cursor-default"
                    onClick={() => toggleCard(experience.id)}
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-2 md:gap-3 flex-1 min-w-0">
                          <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center">
                            {experience.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-base md:text-xl font-bold mb-1 leading-tight pr-2">
                              {experience.title}
                            </CardTitle>
                            <p className="text-sm md:text-lg font-semibold text-primary mb-2 leading-tight">
                              {experience.company}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-2 flex-shrink-0">
                          <Badge
                            className={`px-2 py-1 text-xs font-medium rounded-full ${
                              experience.type === "Estágio"
                                ? "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700"
                                : experience.type === "Educação"
                                  ? "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700"
                                  : "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700"
                            }`}
                          >
                            {experience.type}
                          </Badge>

                          {/* Botão de expansão - apenas mobile */}
                          <button className="md:hidden p-1 rounded-full hover:bg-primary/10 transition-colors">
                            {expandedCards.includes(experience.id) ? (
                              <ChevronUp className="w-4 h-4 text-primary" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-primary" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                          <span className="leading-tight">{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                          <span className="leading-tight">{experience.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedCards.includes(experience.id) ? "auto" : 0,
                      opacity: expandedCards.includes(experience.id) ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className="md:!h-auto md:!opacity-100 overflow-hidden"
                  >
                    <CardContent className="pt-0 pb-4 md:pb-6">
                      <ul className="space-y-2 mb-4 md:mb-6">
                        {experience.description.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: expandedCards.includes(experience.id) ? 1 : 0 }}
                            transition={{
                              duration: 0.2,
                              delay: expandedCards.includes(experience.id) ? itemIndex * 0.05 : 0,
                            }}
                            className="md:!opacity-100 flex items-start gap-2 text-muted-foreground text-sm md:text-base"
                          >
                            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                              opacity: expandedCards.includes(experience.id) ? 1 : 0,
                              scale: expandedCards.includes(experience.id) ? 1 : 0.8,
                            }}
                            transition={{
                              duration: 0.2,
                              delay: expandedCards.includes(experience.id) ? skillIndex * 0.03 : 0,
                            }}
                            className="md:!opacity-100 md:!scale-100"
                          >
                            <Badge className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full border border-border/50 hover:border-primary/50 transition-colors">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-20px" }}
          className="mt-8 md:mt-12 text-center px-4 md:px-0"
        >
          <Card className="professional-card p-4 md:p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
            <p className="text-base md:text-lg font-medium mb-2 md:mb-4">
              Interessado em colaborar ou saber mais sobre minha experiência?
            </p>
            <p className="text-muted-foreground text-sm md:text-base">
              Estou sempre aberto a novas oportunidades e desafios na área de Tecnologia e Cybersecurity.
            </p>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experience
