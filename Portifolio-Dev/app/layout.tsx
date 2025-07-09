// Arquivo: app/layout.tsx (VERSÃO FINAL E FUNCIONAL)

import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// <<< 1. IMPORTE O SEU CONSOLE AQUI
import DeveloperConsole from "@/components/developer-console"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Guilherme Bodnar | Desenvolvedor",
  description:
    "Portfólio de Guilherme Bodnar - Desenvolvedor e estudante de Análise e Desenvolvimento de Sistemas",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {/* <<< 2. ADICIONE O COMPONENTE DO CONSOLE AQUI */}
        <DeveloperConsole />
        
      </body>
    </html>
  )
}