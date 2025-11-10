# Landing Page - Ministério de Compaixão

Landing page moderna e responsiva desenvolvida para o **Ministério de Compaixão da Igreja do Nazareno**, com foco em apresentar a missão, história e formas de contato da organização.

## ✨ Funcionalidades Principais

- **📱 Design Responsivo**: Adaptável para desktop, tablet e mobile
- **🎨 Animações Suaves**: Implementadas com Framer Motion para scroll e hover
- **🔗 Navegação Inteligente**: Scroll suave entre seções com indicadores visuais
- **📧 Formulário de Contato**: Validação completa com opções categorizadas
- **🎯 FAQ Interativo**: Sistema de accordion expansível
- **⬆️ Botão Scroll-to-Top**: Navegação flutuante para retorno ao topo
- **🎨 Hover Effects**: Barrinha azul nos links do navbar e micro-interações

## 🚀 Tecnologias Utilizadas

- **React 19.1.1** - Biblioteca JavaScript para construção de interfaces de usuário
- **Vite 7.1.7** - Build tool rápida e moderna para desenvolvimento
- **Tailwind CSS 4.1.17** - Framework CSS utilitário para estilização
- **Framer Motion 12.1.4** - Biblioteca de animações para React
- **Preline 3.2.3** - Biblioteca de componentes UI para Tailwind CSS
- **Lucide React** - Ícones modernos e consistentes
- **ESLint** - Ferramenta de linting para manter a qualidade do código

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## 🔧 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/NazaPontaTECH/landing-page-MNC.git
cd landing-page-MNC/page-mnc
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

### 4. Configure as cores do projeto (opcional)

No arquivo `src/index.css`, você pode personalizar as cores:

```css
:root {
  --color-primary: #2563eb;   // Azul - altere conforme sua identidade visual
  --color-dark: #111827;      // Escuro - altere conforme sua identidade visual
}
```

**Nota:** Este projeto usa **Tailwind CSS v4**, que não requer arquivo `tailwind.config.js`. A configuração é feita diretamente no CSS.

## 📦 Dependências Principais

### **Produção**
- **react** ^19.1.1 - Biblioteca principal
- **react-dom** ^19.1.1 - Renderização DOM
- **framer-motion** - Animações e transições
- **lucide-react** - Biblioteca de ícones
- **preline** ^3.2.3 - Componentes UI

### **Desenvolvimento**  
- **vite** ^7.1.7 - Build tool e servidor dev
- **@vitejs/plugin-react** - Plugin React para Vite
- **tailwindcss** ^4.1.17 - Framework CSS
- **@tailwindcss/vite** - Plugin Vite para Tailwind v4
- **eslint** - Linting de código

## ⚡ Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm run dev`
Executa a aplicação em modo de desenvolvimento.\
Abra [http://localhost:5173](http://localhost:5173) para visualizá-la no navegador.

A página será recarregada automaticamente quando você fizer alterações.\
Você também verá erros de lint no console.

### `npm run build`
Compila a aplicação para produção na pasta `dist`.\
Otimiza o build para melhor performance.

### `npm run preview`
Serve a versão de produção localmente para preview.\
Execute após `npm run build` para testar a versão final.

### `npm run lint`
Executa o ESLint para verificar problemas no código.\
Ajuda a manter a qualidade e consistência do código.

## 📁 Estrutura do Projeto

```
page-mnc/
├── public/                 # Arquivos estáticos
├── src/
│   ├── assets/            # Imagens, ícones e outros recursos
│   │   └── about.jpg      # Imagem da seção sobre
│   ├── components/        # Componentes reutilizáveis
│   │   ├── About.jsx      # Seção sobre com FAQ e estatísticas
│   │   ├── Contact.jsx    # Formulário de contato e informações
│   │   ├── Footer.jsx     # Rodapé com newsletter e links
│   │   ├── Hero.jsx       # Hero section com animações
│   │   ├── Mission.jsx    # Missão, visão e valores
│   │   ├── Navbar.jsx     # Navegação com hover effects
│   │   └── ScrollToTop.jsx # Botão flutuante de volta ao topo
│   ├── hooks/             # Custom hooks
│   │   └── useScrollAnimation.js # Hook para animações de scroll
│   ├── pages/             # Páginas da aplicação
│   │   └── index.jsx      # Página principal
│   ├── index.css          # Estilos globais e configuração do Tailwind CSS v4
│   └── main.jsx           # Ponto de entrada da aplicação
├── index.html             # Template HTML
├── package.json           # Dependências e scripts
├── vite.config.js         # Configuração do Vite
└── eslint.config.js       # Configuração do ESLint
```

## 🎯 Seções da Landing Page

### 🏠 **Hero Section**
- **Background**: Imagem de impacto com overlay
- **CTA**: Botões principais para ação
- **Animações**: Fade-in e scale effects com Framer Motion

### ℹ️ **About Section**
- **História**: Timeline da organização desde 1908
- **Estatísticas**: Cards animados com números de impacto
- **FAQ**: Sistema accordion interativo
- **Imagem**: Visual representativo da missão

### 🎯 **Mission Section**  
- **Missão, Visão e Valores**: Cards hover interativos
- **Ícones**: Lucide React icons para representação visual
- **Gradientes**: Design moderno com cores da marca

### 📞 **Contact Section**
- **Cards de Contato**: Telefone, email e endereço
- **Formulário Completo**: Validação com campos obrigatórios
- **Categorização**: Dropdown com tipos de contato
- **Horários**: Informações de atendimento

### 🔗 **Footer**
- **Links Rápidos**: Navegação interna
- **Newsletter**: Cadastro com validação
- **Informações**: Copyright e políticas

### 🚀 **Funcionalidades Especiais**
- **Scroll Suave**: Navegação fluida entre seções
- **Animações**: Elementos surgem ao fazer scroll
- **Hover Effects**: Micro-interações nos links e botões
- **Botão Floating**: Scroll-to-top sempre visível

## 🎨 Estilização

O projeto utiliza **Tailwind CSS v4** como framework principal de estilização:

- **Tailwind CSS v4**: Framework CSS utilitário com nova arquitetura
- **Preline 3.2.3**: Biblioteca de componentes pré-construídos
- **Configuração via CSS**: Cores e tema personalizados diretamente no CSS

**Principais diferenças do Tailwind CSS v4:**
- ❌ Não precisa de arquivo `tailwind.config.js`
- ✅ Configuração feita via `@import "tailwindcss"` no CSS
- ✅ Cores customizadas usando CSS custom properties
- ✅ Plugin do Vite para integração automática

### Configuração de cores personalizadas

```css
/* src/index.css */
:root {
  --color-primary: #2563eb;
  --color-dark: #111827;
}

.bg-primary { background-color: var(--color-primary); }
.text-primary { color: var(--color-primary); }
```

### Exemplo de uso do Tailwind

```jsx
<button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
  Botão Personalizado
</button>
```

## 🔍 Configuração do ESLint

O projeto inclui configuração do ESLint com:

- Regras do React
- React Hooks rules
- React Refresh plugin
- Configuração moderna do ESLint 9

## 📱 Componentes e Animações

### 🎨 **Sistema de Animações**
Implementado com **Framer Motion** para uma experiência de usuário fluida e moderna:

- **Scroll-triggered Animations**: Elementos aparecem ao entrar na viewport
- **Stagger Effects**: Animações sequenciais para grupos de elementos  
- **Hover Interactions**: Micro-animações em botões e cards
- **Smooth Transitions**: Transições suaves com spring physics
- **Performance Optimized**: Animações otimizadas para mobile

### 🧩 **Componentes Principais**

**Navbar**
- Navegação fixa com scroll suave
- Hover effects com barrinha azul animada
- Menu mobile responsivo (Preline dropdown)
- Logo com ícone de coração

**Hero**  
- Background responsivo com overlay
- Animações escalonadas (stagger)
- CTAs com hover effects
- Integração com scroll suave

**About**
- Cards de estatísticas animados
- FAQ accordion interativo
- Linha do tempo da história
- Imagens com efeitos parallax

**Mission**
- Cards hover com scale effects
- Ícones Lucide React 
- Gradientes modernos
- Animações de entrada personalizadas

**Contact**
- Formulário com validação completa
- Cards informativos animados
- Seletor de assunto categorizado
- Horários de funcionamento

**Footer**
- Newsletter com validação
- Links organizados em colunas
- Animações fade-in
- Informações de contato

**ScrollToTop**
- Botão flutuante sempre visível
- Animações de entrada suaves  
- Ícone bounce em hover
- Detecção inteligente de scroll

### 🎯 **Custom Hook - useScrollAnimation**
Hook personalizado que fornece variantes de animação reutilizáveis:

```javascript
const { staggerContainer, fadeInUp, fadeInLeft, staggerChild } = useScrollAnimation();
```

**Variantes Disponíveis:**
- `fadeInUp`: Elemento surge de baixo para cima
- `fadeInLeft`: Elemento surge da esquerda  
- `staggerContainer`: Container para animações sequenciais
- `staggerChild`: Elementos filhos com delay escalonado

## 🚀 Deploy

### Vercel (Recomendado)
1. Instale a CLI da Vercel: `npm i -g vercel`
2. Execute: `vercel`
3. Siga as instruções

### Netlify
1. Execute: `npm run build`
2. Faça upload da pasta `dist` no Netlify

### Outros serviços
A pasta `dist` gerada pelo comando `npm run build` pode ser servida por qualquer servidor web estático.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. Verifique se todas as dependências estão instaladas corretamente
2. Certifique-se de estar usando Node.js 16+
3. Limpe o cache: `rm -rf node_modules package-lock.json && npm install`
4. **Importante**: Este projeto usa **Tailwind CSS v4** - não tente criar `tailwind.config.js`
5. Abra uma issue no repositório

### Problemas Comuns

- **Erro "could not determine executable to run"**: Não execute `npx tailwindcss init` no Tailwind CSS v4
- **Estilos não carregam**: Verifique se o `@import "tailwindcss"` está no `src/index.css`
- **Componentes Preline não funcionam**: Verifique se o script está carregado no `index.html`
- **Animações não aparecem**: Certifique-se que o Framer Motion está instalado corretamente
- **Scroll suave não funciona**: Verifique se os IDs das seções estão corretos

### Performance Tips

- **Animações**: As animações são otimizadas para performance, mas podem ser desabilitadas em `prefers-reduced-motion`
- **Imagens**: Use formatos modernos (WebP/AVIF) para melhor performance
- **Build**: Execute `npm run build` para versão otimizada de produção

## 📚 Recursos Úteis

- [Documentação do React](https://react.dev/)
- [Documentação do Vite](https://vitejs.dev/)
- [Documentação do Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://framer.com/motion/)
- [Preline Components](https://preline.co/)
- [Lucide React Icons](https://lucide.dev/)
- [ESLint Rules](https://eslint.org/docs/rules/)

---

## 📄 Sobre o Projeto

Esta landing page foi desenvolvida para apresentar de forma moderna e profissional a missão do **Ministério de Compaixão da Igreja do Nazareno**. 

O projeto demonstra o uso de tecnologias modernas de desenvolvimento web, incluindo React 19, Tailwind CSS v4 e Framer Motion, resultando em uma experiência de usuário fluida e responsiva.

**Desenvolvido com ❤️ para servir a comunidade.**
