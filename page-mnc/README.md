# Landing Page MNC

Este projeto é uma landing page desenvolvida com React, Vite e Tailwind CSS para a empresa MNC.

## 🚀 Tecnologias Utilizadas

- **React 19.1.1** - Biblioteca JavaScript para construção de interfaces de usuário
- **Vite 7.1.7** - Build tool rápida e moderna para desenvolvimento
- **Tailwind CSS 4.1.17** - Framework CSS utilitário para estilização
- **Preline 3.2.3** - Biblioteca de componentes UI para Tailwind CSS
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

### 3. Configure as cores do projeto
No arquivo `tailwind.config.js`, você pode personalizar as cores primária e secundária:

```javascript
theme: {
  extend: {
    colors: {
      primary: "#1E3A8A",   // Azul - altere conforme sua identidade visual
      secondary: "#FBBF24", // Amarelo - altere conforme sua identidade visual
    },
  },
}
```

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
│   ├── components/        # Componentes reutilizáveis
│   │   └── Button/        # Componente de botão
│   │       └── index.jsx
│   ├── pages/             # Páginas da aplicação
│   │   └── index.jsx      # Página principal
│   ├── index.css          # Estilos globais e imports do Tailwind
│   └── main.jsx           # Ponto de entrada da aplicação
├── index.html             # Template HTML
├── package.json           # Dependências e scripts
├── tailwind.config.js     # Configuração do Tailwind CSS
├── vite.config.js         # Configuração do Vite
└── eslint.config.js       # Configuração do ESLint
```

## 🎨 Estilização

O projeto utiliza **Tailwind CSS** como framework principal de estilização:

- **Tailwind CSS v4**: Framework CSS utilitário
- **Preline**: Biblioteca de componentes pré-construídos
- **Configuração customizada**: Cores e tema personalizados

### Exemplo de uso do Tailwind:
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

## 📱 Componentes

O projeto é organizado com componentes reutilizáveis:

- **Button**: Componente de botão customizado
- **Pages**: Estrutura de páginas
- Arquitetura modular para fácil manutenção

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
4. Abra uma issue no repositório

## 📚 Recursos Úteis

- [Documentação do React](https://react.dev/)
- [Documentação do Vite](https://vitejs.dev/)
- [Documentação do Tailwind CSS](https://tailwindcss.com/)
- [Preline Components](https://preline.co/)
- [ESLint Rules](https://eslint.org/docs/rules/)
