"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Terminal, ChevronRight } from "lucide-react"
import { useTheme } from "next-themes"

interface ConsoleCommand {
  command: string
  output: string[]
  timestamp: string
}

const DeveloperConsole = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<ConsoleCommand[]>([])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const consoleRef = useRef<HTMLDivElement>(null)
  const { theme, setTheme } = useTheme()
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const handleCloseAndClear = () => {
  setIsOpen(false);
  setInput("");
  setHistory([]); // Limpa o histórico de comandos
};
  

  // Comandos disponíveis
  const commands = {
    help: {
      description: "Lista todos os comandos disponíveis",
      execute: () => [
        "🔧 COMANDOS DISPONÍVEIS:",
        "",
        "📋 BÁSICOS:",
        "  help          - Mostra esta ajuda",
        "  clear         - Limpa o console",
        "  info          - Informações do desenvolvedor",
        "  exit          - Fecha o console e limpa",
        "",
        "🎨 INTERFACE:",
        "  theme [dark|light] - Altera tema", // Falta aplicar
        "  rainbow       - Ativa modo arco-íris",
        "  matrix        - Efeito Matrix",
        "  power         - Modo power ativado",
        "",
        "📁 NAVEGAÇÃO:",
        "  ls            - Lista seções do portfólio",
        "  cd <seção>    - Navega para seção",
        "  pwd           - Mostra seção atual",
        "",
        "🔐 CYBERSECURITY:",
        "  nmap          - Simula scan de rede",
        "  wireshark     - Análise de tráfego",
        "  hack          - Modo hacker",
        "  sudo <cmd>    - Comandos de administrador",
        "",
        "🎮 EASTER EGGS:",
        "  konami        - Ativa código Konami",
        "  coffee        - Contador de café",
        "  secret        - Revela segredos",
        "  42            - A resposta para tudo",
        "",
        "💡 Dica: Use TAB para autocompletar comandos",
      ],
    },
    clear: {
      description: "Limpa o console",
      execute: () => {
        setHistory([])
        return []
      },
    },
    info: {
      description: "Informações do desenvolvedor",
      execute: () => [
        "👨‍💻 GUILHERME BODNAR",
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
        "🎓 Estudante: Análise e Desenvolvimento de Sistemas",
        "💼 Cargo: Estagiário em TI - PRF Curitiba/PR",
        "🛡️  Especialidade: Cybersecurity & Network Security",
        "🌍 Localização: Curitiba, Paraná, Brasil",
        "📧 Email: devguibodnar@gmail.com",
        "📱 WhatsApp: +55 (41) 99527-0858",
        "",
        "🔧 Stack Principal:",
        "  • Python, Java, C++, JavaScript",
        "  • Kali Linux, Wireshark, Nmap",
        "  • Huawei S5720, MikroTik RB 3011",
        "  • Azure, Oracle Cloud",
        "",
        "🎯 Foco: Ethical Hacking & Network Security",
      ],
    },
    theme: {
      description: "Altera o tema da aplicação",
      execute: (args: string[]) => {
        const newTheme = args[0]
        if (newTheme === "dark" || newTheme === "light") {
          setTheme(newTheme)
          return [`🎨 Tema alterado para: ${newTheme}`]
        } else if (newTheme === "toggle") {
          setTheme(theme === "dark" ? "light" : "dark")
          return [`🎨 Tema alternado para: ${theme === "dark" ? "light" : "dark"}`]
        }
        return ["❌ Uso: theme [dark|light|toggle]", "💡 Exemplo: theme dark"]
      },
    },
    ls: {
      description: "Lista seções do portfólio",
      execute: () => [
        "📁 ESTRUTURA DO PORTFÓLIO:",
        "",
        "drwxr-xr-x  home/         - Página inicial",
        "drwxr-xr-x  about/        - Sobre mim",
        "drwxr-xr-x  experience/   - Experiência profissional",
        "drwxr-xr-x  projects/     - Projetos desenvolvidos",
        "drwxr-xr-x  skills/       - Habilidades técnicas",
        "drwxr-xr-x  contact/      - Informações de contato",
        "",
        "📊 Total: 6 seções | 9 projetos | 40+ tecnologias",
      ],
    },
    cd: {
      description: "Navega para uma seção",
      execute: (args: string[]) => {
        const section = args[0]
        const validSections = ["home", "about", "experience", "projects", "skills", "contact"]

        if (!section) {
          return ["❌ Uso: cd <seção>", "💡 Seções disponíveis: " + validSections.join(", ")]
        }

        if (validSections.includes(section)) {
          // Navegar para a seção
          const element = document.getElementById(section)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            return [`📍 Navegando para: /${section}`, "✅ Seção carregada com sucesso!"]
          }
        }

        return [`❌ Seção '${section}' não encontrada`, "💡 Use 'ls' para ver seções disponíveis"]
      },
    },
    pwd: {
      description: "Mostra seção atual",
      execute: () => {
        // Detectar seção atual baseada no scroll
        const sections = ["home", "about", "experience", "projects", "skills", "contact"]
        let currentSection = "home"

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = section
              break
            }
          }
        }

        return [`📍 Localização atual: /portfolio/${currentSection}`]
      },
    },
    nmap: {
      description: "Simula scan de rede",
      execute: () => [
        "🔍 INICIANDO NMAP SCAN...",
        "",
        "Starting Nmap 7.94 ( https://nmap.org )",
        "Nmap scan report for portfolio.guilherme-bodnar.dev",
        "Host is up (0.001s latency).",
        "",
        "PORT     STATE SERVICE    VERSION",
        "22/tcp   open  ssh        OpenSSH 8.9",
        "80/tcp   open  http       nginx 1.22.1",
        "443/tcp  open  https      nginx 1.22.1",
        "3000/tcp open  http       Next.js dev server",
        "",
        "🛡️  Firewall: ATIVO",
        "🔐 SSL/TLS: Configurado",
        "⚡ Performance: Otimizado",
        "",
        "✅ Scan completo - Sistema seguro!",
      ],
    },
    wireshark: {
      description: "Simula análise de tráfego",
      execute: () => [
        "🦈 WIRESHARK - ANÁLISE DE TRÁFEGO",
        "",
        "📊 Capturando pacotes...",
        "",
        "Time     Source          Destination     Protocol Info",
        "0.001    192.168.1.100   1.1.1.1        DNS      Query A portfolio.dev",
        "0.002    1.1.1.1         192.168.1.100   DNS      Response A 104.21.x.x",
        "0.003    192.168.1.100   104.21.x.x      TCP      [SYN] Seq=0",
        "0.004    104.21.x.x      192.168.1.100   TCP      [SYN,ACK] Seq=0 Ack=1",
        "0.005    192.168.1.100   104.21.x.x      HTTP     GET /portfolio",
        "0.006    104.21.x.x      192.168.1.100   HTTP     200 OK (text/html)",
        "",
        "🔍 Análise:",
        "  • Conexão HTTPS estabelecida ✅",
        "  • Certificado SSL válido ✅",
        "  • Sem tráfego suspeito ✅",
        "  • Latência: < 5ms ⚡",
      ],
    },
    hack: {
      description: "Ativa modo hacker",
      execute: () => {
        // Ativar efeito matrix
        document.body.classList.add("matrix-mode")
        setTimeout(() => document.body.classList.remove("matrix-mode"), 5000)

        return [
          "🕵️ MODO HACKER ATIVADO",
          "",
          "Accessing mainframe...",
          "Bypassing firewall...",
          "Decrypting data...",
          "",
          "⚠️  ACESSO NEGADO ⚠️",
          "",
          "Apenas brincadeira! 😄",
          "Este é um portfólio, não um sistema real.",
          "",
          "🛡️ Lembre-se: Sempre pratique ethical hacking!",
        ]
      },
    },
    sudo: {
      description: "Comandos de administrador",
      execute: (args: string[]) => {
        const cmd = args.join(" ")
        if (!cmd) {
          return ["❌ sudo: comando não especificado", "💡 Uso: sudo <comando>"]
        }

        return [
          `🔐 [sudo] senha para guilherme:`,
          "Verificando credenciais...",
          "✅ Acesso autorizado!",
          "",
          `Executando: ${cmd}`,
          "⚠️  Comando executado com privilégios de administrador",
          "",
          "🛡️ Lembrete: Com grandes poderes vêm grandes responsabilidades!",
        ]
      },
    },
    matrix: {
      description: "Ativa efeito Matrix",
      execute: () => {
        // Trigger matrix effect
        const event = new CustomEvent("triggerMatrix")
        window.dispatchEvent(event)

        return [
          "🟢 MATRIX MODE ACTIVATED",
          "",
          "Wake up, Neo...",
          "The Matrix has you...",
          "Follow the white rabbit.",
          "",
          "💊 Escolha sua pílula:",
          "🔴 Pílula vermelha - Veja a verdade",
          "🔵 Pílula azul - Continue na ilusão",
        ]
      },
    },
    konami: {
      description: "Ativa código Konami",
      execute: () => {
        // Trigger konami effect
        const event = new CustomEvent("triggerKonami")
        window.dispatchEvent(event)

        return [
          "🎮 KONAMI CODE ACTIVATED!",
          "",
          "↑ ↑ ↓ ↓ ← → ← → B A",
          "",
          "🎉 30 vidas extras concedidas!",
          "⚡ Modo invencível ativado!",
          "🚀 Velocidade máxima desbloqueada!",
        ]
      },
    },
    coffee: {
      description: "Contador de café",
      execute: () => {
        // Trigger coffee counter
        const coffeeBtn = document.querySelector('[title*="Cafés"]') as HTMLElement
        if (coffeeBtn) {
          coffeeBtn.click()
        }

        return [
          "☕ COFFEE.EXE EXECUTADO",
          "",
          "Preparando café...",
          "Adicionando açúcar...",
          "Aquecendo...",
          "",
          "✅ Café pronto!",
          "⚡ +10 energia para programar",
          "🧠 +5 foco para resolver bugs",
          "😊 +100 felicidade",
        ]
      },
    },
    secret: {
      description: "Revela segredos escondidos",
      execute: () => [
        "🤫 SEGREDOS DO PORTFÓLIO:",
        "",
        "🎮 Easter Eggs Disponíveis:",
        "  • Konami Code (↑↑↓↓←→←→BA)",
        "  • Clique 5x no nome principal",
        "  • Clique 7x no logo do header",
        "  • Clique no ícone de café no footer",
        "  • Botão power mode (⚡) no footer",
        "  • Console de desenvolvedor (você está aqui!)",
        "",
        "🔍 Dicas Secretas:",
        "  • Hover na mensagem do footer",
        "  • Experimente comandos 'sudo'",
        "  • Digite '42' no console",
        "  • Use 'hack' para modo matrix",
        "",
        "🏆 Você descobriu todos os segredos!",
      ],
    },
    "42": {
      description: "A resposta para tudo",
      execute: () => [
        "🌌 A RESPOSTA PARA A PERGUNTA FUNDAMENTAL",
        "SOBRE A VIDA, O UNIVERSO E TUDO MAIS:",
        "",
        "██████╗ ██████╗ ",
        "██╔══██╗╚════██╗",
        "██████╔╝ █████╔╝",
        "██╔══██╗██╔═══╝ ",
        "██║  ██║███████╗",
        "╚═╝  ╚═╝╚══════╝",
        "",
        "🤖 'Quarenta e dois' - Deep Thought",
        "📚 Guia do Mochileiro das Galáxias",
        "",
        "💡 Agora você só precisa descobrir qual é a pergunta!",
      ],
    },
    rainbow: {
      description: "Ativa modo arco-íris",
      execute: () => {
        // Trigger rainbow effect
        const event = new CustomEvent("triggerRainbow")
        window.dispatchEvent(event)

        return [
          "🌈 RAINBOW MODE ACTIVATED!",
          "",
          "🔴 Vermelho",
          "🟠 Laranja",
          "🟡 Amarelo",
          "🟢 Verde",
          "🔵 Azul",
          "🟣 Anil",
          "🟪 Violeta",
          "",
          "✨ Cores do arco-íris aplicadas!",
        ]
      },
    },
    power: {
      description: "Ativa power mode",
      execute: () => {
        // Trigger power mode
        document.body.classList.add("power-mode")
        setTimeout(() => document.body.classList.remove("power-mode"), 2000)

        return [
          "⚡ POWER MODE ACTIVATED!",
          "",
          "🔋 Energia: 100%",
          "⚡ Velocidade: MÁXIMA",
          "🔥 Intensidade: EXTREMA",
          "",
          "💪 MODO DESENVOLVEDOR HARDCORE ATIVADO!",
          "🚀 Produtividade aumentada em 300%!",
        ]
      },
    },
    ping: {
      description: "Testa conectividade",
      execute: (args: string[]) => {
        const target = args[0] || "portfolio.dev"
        return [
          `🏓 PING ${target}:`,
          "",
          `PING ${target} (192.168.1.100): 56 data bytes`,
          `64 bytes from ${target}: icmp_seq=0 ttl=64 time=0.123ms`,
          `64 bytes from ${target}: icmp_seq=1 ttl=64 time=0.089ms`,
          `64 bytes from ${target}: icmp_seq=2 ttl=64 time=0.156ms`,
          `64 bytes from ${target}: icmp_seq=3 ttl=64 time=0.098ms`,
          "",
          `--- ${target} ping statistics ---`,
          "4 packets transmitted, 4 received, 0% packet loss",
          "round-trip min/avg/max/stddev = 0.089/0.117/0.156/0.028 ms",
          "",
          "✅ Conectividade: EXCELENTE",
        ]
      },
    },
    exit: {
      description: "Fecha e limpa o console",
      execute: () => {
      handleCloseAndClear();
      return []; // Retorna um array vazio para não imprimir nada
      },
    },
  }

  // Ativar console com Ctrl+.
  useEffect(() => {
  // Função para lidar com eventos do teclado
  const handleKeyDown = (e: KeyboardEvent) => {
    // 1. Atalho principal com a tecla PONTO
    if (e.ctrlKey && e.key === ".") {
      e.preventDefault();
      setIsOpen((prevIsOpen) => !prevIsOpen);
    }

    // 2. Lógica robusta para digitar "console"
    if (!isOpen) {
      if (e.key.length === 1 && e.key.match(/[a-z]/i)) {
        const recentKeys = sessionStorage.getItem("recentKeys") || "";
        const newKeys = (recentKeys + e.key.toLowerCase()).slice(-7);
        sessionStorage.setItem("recentKeys", newKeys);

        if (newKeys === "console") {
          setIsOpen(true);
          sessionStorage.removeItem("recentKeys");
        }
      }
    }
  };

  // 3. Função para lidar com o clique do botão
  const handleToggleEvent = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // Adiciona os "ouvintes" para o teclado e para o evento do botão
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("toggleConsole", handleToggleEvent);

  // Limpa os "ouvintes" quando o componente não estiver mais na tela
  return () => {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("toggleConsole", handleToggleEvent);
  };
}, [isOpen]);

 // Auto-focus input quando abrir
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  
  // useEffect(() => {
  //   const handleKeyDown = (e: KeyboardEvent) => {
  //     if (e.ctrlKey && e.key === ".") {
  //       e.preventDefault()
  //       setIsOpen(!isOpen)
        
  //     }

  //     // Detectar digitação de "console" em qualquer lugar
  //     if (!isOpen) {
  //       const recentKeys = sessionStorage.getItem("recentKeys") || ""
  //       const newKeys = (recentKeys + e.key).slice(-7)
  //       sessionStorage.setItem("recentKeys", newKeys)

  //       if (newKeys === "console") {
  //         setIsOpen(true)
  //         sessionStorage.removeItem("recentKeys")
  //       }
  //     }
  //   }

  //   window.addEventListener("keydown", handleKeyDown)
  //   return () => window.removeEventListener("keydown", handleKeyDown)
  // }, [isOpen])

  // // Auto-focus input quando abrir
  // useEffect(() => {
  //   if (isOpen && inputRef.current) {
  //     inputRef.current.focus()
  //   }
  // }, [isOpen])

  // Scroll para baixo quando adicionar comando
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight
    }
  }, [history])

// Efeito para detectar o teclado virtual usando visualViewport
useEffect(() => {
  const visualViewport = window.visualViewport;
  // Proteção para navegadores mais antigos que não têm esta API
  if (!visualViewport) return;

  const handleResize = () => {
    // Se a altura visível for significativamente menor que a altura da janela,
    // assumimos que o teclado está aberto.
    const isKeyboardOpen = visualViewport.height < window.innerHeight - 100; // 100px é uma tolerância segura
    setIsKeyboardVisible(isKeyboardOpen);
  };

  visualViewport.addEventListener('resize', handleResize);

  // Limpa o listener quando o componente é fechado
  return () => {
    visualViewport.removeEventListener('resize', handleResize);
  };
}, []); // O array vazio [] garante que este efeito rode apenas uma vez


  const executeCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim()
    if (!trimmedCmd) return

    const [commandName, ...args] = trimmedCmd.toLowerCase().split(" ")
    const timestamp = new Date().toLocaleTimeString()

    // Adicionar comando ao histórico
    setCommandHistory((prev) => [...prev, trimmedCmd])
    setHistoryIndex(-1)

    // Adicionar comando executado ao histórico visual
    const newCommand: ConsoleCommand = {
      command: trimmedCmd,
      output: [],
      timestamp,
    }

    setHistory((prev) => [...prev, newCommand])
    setInput("")
    setIsTyping(true)

    // Simular delay de processamento
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Executar comando
    if (commands[commandName as keyof typeof commands]) {
      const output = commands[commandName as keyof typeof commands].execute(args)

      setHistory((prev) => prev.map((item, index) => (index === prev.length - 1 ? { ...item, output } : item)))
    } else {
      setHistory((prev) =>
        prev.map((item, index) =>
          index === prev.length - 1
            ? {
                ...item,
                output: [
                  `❌ Comando '${commandName}' não encontrado`,
                  "💡 Digite 'help' para ver comandos disponíveis",
                ],
              }
            : item,
        ),
      )
    }

    setIsTyping(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(input)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setInput("")
        } else {
          setHistoryIndex(newIndex)
          setInput(commandHistory[newIndex])
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault()
      // Autocompletar comando
      const matches = Object.keys(commands).filter((cmd) => cmd.startsWith(input))
      if (matches.length === 1) {
        setInput(matches[0])
      } else if (matches.length > 1) {
        const newCommand: ConsoleCommand = {
          command: input,
          output: ["💡 Comandos disponíveis:", ...matches.map((cmd) => `  ${cmd}`)],
          timestamp: new Date().toLocaleTimeString(),
        }
        setHistory((prev) => [...prev, newCommand])
      }
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className={`fixed z-50 font-mono overflow-hidden bg-black/95 backdrop-blur-md shadow-2xl border border-green-500/30 rounded-lg text-base md:text-sm bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-[600px] ${isKeyboardVisible ? 'h-[45vh]' : 'h-[55vh]'} md:h-[400px]`}
>
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-green-500/30 bg-green-500/10">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-green-400" />
            <span className="text-green-400 font-semibold">Developer Console</span>
            <span className="text-green-300/60 text-xs">v2.0.1</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-green-400 hover:text-red-400 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Console Content */}
        <div
          ref={consoleRef}
          className="flex-1 p-3 overflow-y-auto bg-black/80 text-green-400"
          style={{ height: "calc(100% - 100px)" }}
        >
          {/* Welcome Message */}
          {history.length === 0 && (
            <div className="mb-4 text-green-300/80">
              <div className="text-green-400 font-bold">🚀 GUILHERME BODNAR - DEVELOPER CONSOLE</div>
              <div className="text-xs mt-1">Versão 2.0.1 | Cybersecurity Edition</div>
              <div className="text-xs mt-2">💡 Digite 'help' para ver comandos disponíveis</div>
              <div className="text-xs">🎮 Ativação: Ctrl + . ou digite 'console' em qualquer lugar</div>
              <div className="border-t border-green-500/20 my-2"></div>
            </div>
          )}

          {/* Command History */}
          {history.map((cmd, index) => (
            <div key={index} className="mb-3">
              <div className="flex items-center gap-2 text-green-400">
                <span className="text-green-500">➜</span>
                <span className="text-blue-400">portfolio</span>
                <span className="text-green-300">~</span>
                <ChevronRight className="w-3 h-3" />
                <span>{cmd.command}</span>
                <span className="text-green-300/50 text-xs ml-auto">{cmd.timestamp}</span>
              </div>
              {cmd.output.map((line, lineIndex) => (
                <div key={lineIndex} className="text-green-300/90 ml-4 whitespace-pre-wrap">
                  {line}
                </div>
              ))}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-center gap-2 text-green-400/60">
              <span>⚡ Processando...</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                <div
                  className="w-1 h-1 bg-green-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-1 h-1 bg-green-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-3 border-t border-green-500/30 bg-green-500/5">
          <div className="flex items-center gap-2">
            <span className="text-green-500">➜</span>
            <span className="text-blue-400">portfolio</span>
            <span className="text-green-300">~</span>
            <ChevronRight className="w-3 h-3 text-green-400" />
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-green-400 outline-none placeholder-green-400/50"
              placeholder="Digite um comando..."
              autoComplete="off"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default DeveloperConsole
