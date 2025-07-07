"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Shield, Code, Brain, Network, Video, Search, Cloud, Router } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Acesso Remoto Seguro com MikroTik",
    description:
      "Implementação de solução de acesso remoto utilizando roteador MikroTik com funcionalidade Back To Home, superando limitações de CGNAT sem IP público. Estabeleci VPN estável e segura para gerenciamento remoto da rede, demonstrando expertise em cenários de infraestrutura complexos com recursos avançados de roteamento e tunelamento seguro.",
    tags: ["MikroTik", "VPN", "Back To Home", "CGNAT", "Remote Access", "Network Security"],
    icon: <Router className="w-6 h-6 text-blue-600" />,
    category: "Networking",
  },
  {
    id: 2,
    title: "Laboratório Virtual em Nuvem",
    description:
      "Criação de ambiente de virtualização com VMware ESXi hospedado internacionalmente via Oracle Cloud. Configuração de máquinas virtuais focadas em simulações de segurança, incluindo protocolos de criptografia, firewall, SSH seguro e controle de acesso. Estrutura para testes práticos em ambientes isolados, reforçando experiência em cloud computing e virtualização.",
    tags: ["VMware ESXi", "Oracle Cloud", "Virtualization", "SSH", "Firewall", "Cloud Security"],
    icon: <Cloud className="w-6 h-6 text-purple-600" />,
    category: "Cloud & Virtualization",
  },
  {
    id: 3,
    title: "CryptoNet VPN",
    description:
      "Implementação de uma VPN segura utilizando OpenVPN na Oracle Cloud. O projeto foca em criptografia de dados e proteção de conexões, demonstrando conhecimentos em segurança de redes e infraestrutura em nuvem.",
    tags: ["Ubuntu", "Oracle Cloud", "OpenVPN", "Network Security", "SSH"],
    icon: <Shield className="w-6 h-6 text-red-600" />,
    category: "Segurança",
  },
  {
    id: 4,
    title: "Análise de Tráfego de Rede",
    description:
      "Projeto de monitoramento e análise de tráfego utilizando Wireshark e Nmap. Implementa técnicas de detecção de anomalias, identificação de malware e análise forense de pacotes em ambiente controlado.",
    tags: ["Wireshark", "Nmap", "Kali Linux", "Network Analysis", "Malware Detection"],
    icon: <Search className="w-6 h-6 text-orange-600" />,
    category: "Segurança",
  },
  {
    id: 5,
    title: "Configuração de Infraestrutura Corporativa",
    description:
      "Implementação e configuração de switches Huawei S5720 e roteadores MikroTik RB 3011. Projeto inclui configuração de VLANs, QoS, políticas de segurança e monitoramento de rede em ambiente empresarial.",
    tags: ["Huawei S5720", "MikroTik RB 3011", "VLANs", "QoS", "Network Security"],
    icon: <Network className="w-6 h-6 text-green-600" />,
    category: "Networking",
  },
  {
    id: 6,
    title: "Sistema de Detecção de Phishing",
    description:
      "Desenvolvimento de sistema automatizado para detecção e análise de tentativas de phishing. Utiliza machine learning para identificar padrões suspeitos e implementa alertas em tempo real para proteção proativa.",
    tags: ["Python", "Machine Learning", "Phishing Detection", "Email Security"],
    icon: <Shield className="w-6 h-6 text-red-600" />,
    category: "Segurança",
  },
  {
    id: 7,
    title: "Jogo da Forca",
    description:
      "Aplicação interativa desenvolvida em Python que explora lógica de programação, manipulação de strings e integração com APIs. Demonstra conceitos fundamentais de desenvolvimento e experiência do usuário.",
    tags: ["Python", "API Integration", "Game Logic", "User Interface"],
    icon: <Code className="w-6 h-6 text-blue-600" />,
    category: "Desenvolvimento",
  },
  {
    id: 8,
    title: "Sistema de Reconhecimento Facial",
    description:
      "Sistema inteligente utilizando Python, OpenCV e Machine Learning para detecção e reconhecimento facial. Implementa algoritmos avançados de visão computacional e processamento de imagens.",
    tags: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
    icon: <Brain className="w-6 h-6 text-purple-600" />,
    category: "IA/ML",
  },
  {
    id: 9,
    title: "Analisador de Vídeos YouTube",
    description:
      "Ferramenta automatizada que extrai áudio de vídeos do YouTube, realiza transcrição utilizando IA e gera resumos em formato Markdown. Integra múltiplas tecnologias para processamento de mídia.",
    tags: ["Python", "OpenAI API", "FFmpeg", "Content Analysis"],
    icon: <Video className="w-6 h-6 text-orange-600" />,
    category: "IA/ML",
  },
]

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0)

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Segurança":
        return "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800"
      case "Networking":
        return "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
      case "Cloud & Virtualization":
        return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800"
      case "IA/ML":
        return "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800"
      default:
        return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800"
    }
  }

  return (
    <section id="projects" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h2 className="section-heading">
          <span className="text-primary">for</span>(project <span className="text-primary">in</span> portfolio)
          <span className="text-primary">{"{"}</span> Projetos <span className="text-primary">{"}"}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Confira alguns dos meus trabalhos recentes em cybersecurity, networking, cloud computing e desenvolvimento.
        </p>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <Card className="professional-card w-full max-w-2xl">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    {projects[activeProject].icon}
                    <Badge className={`px-2 py-1 text-xs border ${getCategoryColor(projects[activeProject].category)}`}>
                      {projects[activeProject].category}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold">{projects[activeProject].title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="text-muted-foreground mb-6 leading-relaxed">{projects[activeProject].description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[activeProject].tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="px-2 py-1 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button variant="outline" size="icon" onClick={prevProject} className="rounded-full bg-transparent">
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeProject ? "bg-primary w-5" : "bg-muted"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextProject} className="rounded-full bg-transparent">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Estatísticas dos projetos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <Card className="professional-card p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">9</div>
            <div className="text-sm text-muted-foreground">Projetos</div>
          </Card>
          <Card className="professional-card p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">4</div>
            <div className="text-sm text-muted-foreground">Categorias</div>
          </Card>
          <Card className="professional-card p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Tecnologias</div>
          </Card>
          <Card className="professional-card p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">2+</div>
            <div className="text-sm text-muted-foreground">Anos</div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
