# 🌐 Portfolio Profissional - Guilherme Bodnar

Este é o repositório do meu site pessoal e portfólio profissional, acessível em [guilhermebodnar.com.br](https://www.guilhermebodnar.com.br).

O projeto foi desenvolvido para apresentar minha trajetória, projetos e habilidades de forma interativa e moderna. Além do front-end, este repositório demonstra conhecimentos em **DevOps** e infraestrutura, com deploy realizado em uma instância Linux gerenciada manualmente.

## 🚀 Tecnologias Utilizadas

### Front-end
- **Next.js 14:** Framework React utilizando App Router para alta performance e SEO.
- **TypeScript:** Para tipagem estática e segurança no código.
- **Tailwind CSS:** Estilização responsiva e moderna.
- **React Icons / Lucide:** Biblioteca de ícones.
- **Framer Motion:** (Se tiver animações) Para transições suaves e interatividade.

### Infraestrutura & Deploy
- **VPS Linux (Ubuntu):** Hospedagem em instância cloud.
- **Nginx:** Servidor web atuando como Proxy Reverso.
- **PM2:** Gerenciador de processos para manter a aplicação Node.js online 24/7.
- **Certbot/SSL:** Configuração de HTTPS seguro.

---

## ⚙️ Funcionalidades

- **Design Responsivo:** Adaptado para Mobile, Tablet e Desktop.
- **Seções Dinâmicas:** "Sobre", "Experiência", "Projetos" e "Certificações".
- **Performance:** Otimização de imagens e carregamento via Next.js.
- **Formulário de Contato:** Integração direta (mailto ou API).

---

## 🔧 Como Executar Localmente

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/BodnarGuilherme/Dev-Portifolio.git](https://github.com/BodnarGuilherme/Dev-Portifolio.git)
   ```
   
2. **Entre na pasta:**
   ```bash
   cd Dev-Portifolio
   ```
3. **Instale as dependências:**
   ```bash
   npm install --legacy-peer-deps
   ```
4. **Rode o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
Acesse <tt>http://localhost:3000</tt> no seu navegador.

## ☁️ Deploy (Produção)
O deploy é realizado em uma instância Ubuntu seguindo estes passos:

1. **Build da aplicação:**
   ```bash
   npm run build
   ```
2. **Gerenciamento de Processo (PM2):**
   ```bash
   pm2 start npm --name "portfolio" -- start
   ```
3. **Configuração Nginx:** O Nginx redireciona o tráfego da porta 80/443 para a porta 3000 interna do Next.js.

   <br>
   <div align="center"> Desenvolvido por <a href="https://github.com/bodnarguilherme">Guilherme Bodnar</a> </div>
