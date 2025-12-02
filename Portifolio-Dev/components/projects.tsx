"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Shield, Code, Brain, Network, Video, Search, Cloud, Router, UserRoundXIcon, Wifi, Lock, AlertTriangle } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Colaboração e Implementação Conjunta de Rede POC-Starlink (PRF)",
    description:
      "Atuação em equipe na estruturação da infraestrutura de rede corporativa. Iniciamos o projeto no Core (Huawei), criando VLANs e rotas para estender o link Starlink até o Wi-Fi da DMZ. Na borda (MikroTik), configuramos o acesso à rede Starlink e implementamos a POC. Em conjunto, definimos as regras de Firewall para liberação de ferramentas específicas e configuramos a redundância de rota default, estabelecendo um sistema de failover automático entre 3 links de internet para garantir alta disponibilidade.",
    tags: ["MikroTik", "Huawei", "Starlink", "Failover", "VLANs", "Firewall", "Teamwork"],
    icon: <Wifi className="w-6 h-6 text-blue-600" />,
    category: "Redes e Infraestrutura",
  },
  {
    id: 2,
    title: "Automação para Gerenciamento de Perfis Temporários (GCPW) na PRF",
    description:
      "Para solucionar o desafio do acúmulo de perfis de usuário temporários na Polícia Rodoviária Federal - PRF, desenvolvi um script PowerShell autônomo que utiliza o Registro do Windows para monitoramento. Implantada via Agendador de Tarefas, a solução garante a remoção completa dos perfis após um prazo definido, mantendo o ambiente de TI seguro e organizado.",
    tags: ["PowerShell", "Google Credential Provider for Windows (GCPW)", "Automação", "Registro do Windows", "Agendador de Tarefas", "Arquitetura de TI"],
    icon: <UserRoundXIcon className="w-6 h-6 text-red-600" />,
    category: "Desenvolvimento e Segurança",
  },
  {
    id: 3,
    title: "Solução de VPN Segura com MikroTik - Back to Home (Sem IP Público)",
    description:
      "Implementação de solução de acesso remoto utilizando roteador MikroTik com funcionalidade Back To Home, superando limitações de CGNAT sem IP público. Estabeleci VPN estável e segura para gerenciamento remoto da rede, demonstrando expertise em cenários de infraestrutura complexos com recursos avançados de roteamento e tunelamento seguro.",
    tags: ["MikroTik", "VPN", "Back To Home", "CGNAT", "Remote Access", "Network Security"],
    icon: <Router className="w-6 h-6 text-green-600" />,
    category: "Networking",
  },
  {
    id: 4,
    title: "Servidor Linux Oracle Cloud - Hospedagem de Aplicações e Tunelamento Seguro",
    description:
      "Implementação de uma instância Linux no Oracle Cloud, provisionada no datacenter internacional de Ashburn (EUA). O projeto envolveu configuração completa do servidor, criação do ambiente para hospedagem do meu Portifólio, ajustes de portas e regras de segurança, além da implementação de uma VPN segura para acesso remoto. A solução garante desempenho, estabilidade e conectividade protegida em ambiente cloud internacional.",
    tags: ["Oracle Cloud", "Linux", "VPN", "SSH", "Firewall", "Cloud Computing", "Hosting"],
    icon: <Cloud className="w-6 h-6 text-purple-600" />,
    category: "Cloud & Virtualization",
  },
  {
    id: 5,
    title: "VPN Enterprise na Oracle Cloud",
    description:
      "Implantação de uma infraestrutura de VPN (Virtual Private Network) em nuvem para tunelamento seguro de dados. O projeto consistiu no provisionamento de uma instância Linux na Oracle Cloud, hardening do servidor (SSH seguro/Firewall) e configuração do OpenVPN com criptografia AES-256. A solução garante privacidade, contorno de restrições de rede (CGNAT) e acesso remoto seguro a serviços internos.",
    tags: ["Oracle Cloud", "OpenVPN", "AES-256 Encryption", "Tunneling", "SSH", "IaaS"],
    icon: <Shield className="w-6 h-6 text-red-600" />,
    category: "Segurança",
  },
  // {
  //   id: 6,
  //   title: "Análise de Tráfego de Rede",
  //   description:
  //     "Projeto de monitoramento e análise de tráfego utilizando Wireshark e Nmap. Implementa técnicas de detecção de anomalias, identificação de malware e análise forense de pacotes em ambiente controlado.",
  //   tags: ["Wireshark", "Nmap", "Kali Linux", "Network Analysis", "Malware Detection"],
  //   icon: <Search className="w-6 h-6 text-red-600" />,
  //   category: "Segurança",
  // },
  {
    id: 7,
    title: "Gerência de Redes - Aprendendo e Estudando em Ambiente Prático (Huawei & MikroTik)",
    description:
      "Laboratório prático focado na interoperabilidade entre diferentes fabricantes e domínio de interfaces de gerenciamento. O projeto envolveu o provisionamento via CLI (SSH/Putty) e GUI (Winbox), configurando a comunicação entre Switches Huawei e Roteadores MikroTik. Foram implementadas segmentações (VLANs), políticas de firewall e rotas de redundância, consolidando o conhecimento em administração de ativos de rede.",
    tags: ["Huawei CLI", "MikroTik", "VLANs", "Firewall", "Winbox", "SSH/Telnet", "Lab Environment"],
    icon: <Network className="w-6 h-6 text-green-600" />,
    category: "Networking",
  },
  {
    id: 8,
    title: "Simulação de Ransomware e Recuperação - (Crypto) Python",
    description:
      "Desenvolvimento de script em Python para emular o comportamento de criptografia em massa (Ransomware) visando o estudo de assinaturas de malware. O projeto utiliza a biblioteca 'Cryptography' (Fernet/AES) para cifragem simétrica de arquivos e engenharia reversa do processo (descriptografia). Executado estritamente em ambiente controlado (Sandbox/VM) para fins acadêmicos e testes de rotinas de backup e recuperação.",
    tags: ["Python", "Cryptography", "Malware Analysis", "Sandbox", "AES", "Ethical Hacking"],
    warning: "⚠ ATENÇÃO: ESTE SCRIPT É APENAS PARA FINS EDUCACIONAIS ⚠",
    icon: <Lock className="w-6 h-6 text-red-600" />,
    category: "Segurança Ofensiva (Red Team)",
  },
  {
    id: 9,
    title: "Aplicação CLI: Lógica Algorítmica e Manipulação de Dados - Jogo Da Forca",
    description:
      "Desenvolvimento de uma aplicação interativa via terminal (CLI) focada em lógica de programação. O projeto implementa estruturas de controle de fluxo (loops/condicionais), manipulação avançada de strings e listas, além de sanitização de inputs do usuário para garantir a integridade da execução e prevenir erros em tempo de execução.",
    tags: ["Python", "Logic Algorithms", "CLI", "Input Handling"],
    icon: <Code className="w-6 h-6 text-blue-600" />,
    category: "Desenvolvimento",
  },
  {
    id: 10,
    title: "Scanner de Portas Customizado (Python Sockets)",
    description:
      "Desenvolvimento de ferramenta simples de reconhecimento de rede (Recon) utilizando a biblioteca nativa Socket do Python. O script implementa varredura TCP Connect para auditar portas abertas em ativos de rede, permitindo diagnósticos rápidos em ambientes onde ferramentas externas (como Nmap) não podem ser instaladas. Demonstra compreensão de manipulação de conexões de baixo nível.",
    tags: ["Python", "Socket API", "TCP/IP", "Scripting"],
    icon: <Code className="w-6 h-6 text-blue-600" />,
    category: "Desenvolvimento ",
  },
  {
    id: 11,
    title: "Analisador de Vídeos YouTube",
    description:
      "Ferramenta CLI (Command Line Interface) para automação de extração de conhecimento. O script orquestra um pipeline que realiza o streaming de áudio via FFmpeg (sem download de vídeo), transcreve o conteúdo com alta fidelidade usando Whisper-1 e gera sínteses estruturadas em Markdown utilizando GPT-4o-mini. Inclui gestão automatizada de arquivos temporários e tratamento de exceções robusto.",
    tags: ["Python", "OpenAI API", "FFmpeg", "Automação"],
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
      case "Desenvolvimento e Segurança":
        return "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800"
      case "Segurança Ofensiva (Red Team)":
      return "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800"
      case "Networking":
        return "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
      case "Cloud & Virtualization":
        return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800"
      case "IA/ML":
        return "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800"
      case "IA/ML "://ROXO
        return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800"
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
          Confira alguns dos meus pojetos recentes em desenvolvimento, networking, cloud computing e segurança.
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
                    {projects[activeProject].warning && (<div className="w-fit mx-auto mb-6 p-3 rounded-lg border border-red-900/50 bg-red-950/30 flex items-center justify-center gap-3 shadow-sm">
                    {/* Ícone Visual */}
                    <AlertTriangle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                    {/* Texto do Aviso */}
                    <p className="text-sm text-red-300 font-medium leading-snug">
                    {/* Removemos os emojis do texto, pois já temos o ícone */}
                    {projects[activeProject].warning.replace(/⚠/g, '').trim()}
                  </p>
                  </div>
                  )}
                  {/* ACIMAAAA O ALERTAAA */}
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
            <div className="text-2xl font-bold text-primary mb-1">+10</div>
            <div className="text-sm text-muted-foreground">Projetos</div>
          </Card>
          <Card className="professional-card p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">5</div>
            <div className="text-sm text-muted-foreground">Categorias</div>
          </Card>
          <Card className="professional-card p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">+6</div>
            <div className="text-sm text-muted-foreground">Tecnologias</div>
          </Card>
          <Card className="professional-card p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">+2</div>
            <div className="text-sm text-muted-foreground">Anos</div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
