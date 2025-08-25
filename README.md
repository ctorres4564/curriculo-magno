
# Currículo Digital - Magno Torres Carvalho

## 📋 Sobre o Projeto

Este é um currículo digital interativo e responsivo desenvolvido especificamente para **Magno Torres Carvalho**, Engenheiro Mecânico e Doutor em Ciência dos Materiais. O projeto foi criado como uma versão web moderna e profissional do currículo em PDF original.

## ✨ Características Principais

### 🎨 Design & Visual
- **Design Clássico e Profissional**: Layout limpo com tipografia moderna (Inter)
- **Sistema de Cores Harmoniosas**: Paleta azul profissional com boa hierarquia visual
- **Ícones FontAwesome**: Elementos visuais que complementam o conteúdo
- **Animações Suaves**: Transições e efeitos hover elegantes

### 🌙 Funcionalidades Interativas
- **Modo Escuro/Claro**: Toggle completo entre temas com persistência
- **Seções Expansíveis**: Cada seção pode ser expandida/colapsada individualmente
- **Animações de Scroll**: Elementos aparecem suavemente ao rolar a página
- **Barras de Progresso**: Visualização animada do nível de idiomas

### 📱 Responsividade
- **Mobile-First**: Design otimizado para dispositivos móveis
- **Breakpoints Adaptativos**: Layout se ajusta para tablet e desktop
- **Touch-Friendly**: Interface otimizada para toque em dispositivos móveis

### ♿ Acessibilidade
- **Suporte a Teclado**: Navegação completa via teclado
- **ARIA Labels**: Marcação semântica para leitores de tela
- **Alto Contraste**: Suporte a modo de alto contraste
- **Foco Visível**: Indicadores claros de foco

### ⚡ Performance
- **Código Otimizado**: JavaScript modular e eficiente
- **Lazy Loading**: Carregamento sob demanda de elementos
- **Debouncing**: Otimização de eventos de redimensionamento
- **LocalStorage**: Persistência de preferências do usuário

## 🚀 Como Usar

### Execução Local
```bash
# Navegar para o diretório
cd curriculo_magno

# Servir os arquivos (Python 3)
python3 -m http.server 8080

# Ou usar qualquer servidor web local
# Acessar: http://localhost:8080
```

### Hospedagem
Os arquivos podem ser hospedados em qualquer servidor web estático:
- GitHub Pages
- Netlify
- Vercel
- Apache/Nginx

## 📁 Estrutura do Projeto

```
curriculo_magno/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos e temas
├── js/
│   └── script.js       # Funcionalidades interativas
└── README.md          # Documentação
```

## 🎯 Funcionalidades Detalhadas

### 1. Sistema de Temas
- **Toggle Visual**: Botão flutuante no canto superior direito
- **Preferência do Sistema**: Detecta automaticamente o tema preferido
- **Persistência**: Lembra a escolha do usuário
- **Atalho de Teclado**: `Ctrl/Cmd + Shift + T`

### 2. Seções Interativas
- **Perfil Profissional**: Resumo executivo expandível
- **Experiência Profissional**: Timeline detalhada com hover effects
- **Formação Acadêmica**: Histórico educacional com ênfases
- **Qualificações**: Tags organizadas por categoria
- **Idiomas**: Barras de progresso visuais

### 3. Navegação
- **Scroll Suave**: Transições suaves entre seções
- **Esc para Fechar**: Tecla Esc colapsa todas as seções
- **Tab Navigation**: Navegação completa por teclado

### 4. Animações
- **Fade In Up**: Seções aparecem suavemente
- **Hover Effects**: Efeitos sutis em cards e botões
- **Micro-interações**: Feedback visual em todos os elementos

## 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com Custom Properties
- **JavaScript ES6+**: Funcionalidades interativas
- **FontAwesome 6**: Biblioteca de ícones
- **Google Fonts**: Tipografia Inter

## 🔧 Personalização

### Cores
As cores podem ser facilmente alteradas editando as variáveis CSS em `:root`:

```css
:root {
  --accent-primary: #3b82f6;    /* Cor principal */
  --accent-secondary: #1d4ed8;  /* Cor secundária */
  /* ... outras variáveis */
}
```

### Conteúdo
Todas as informações estão no arquivo `index.html` e podem ser facilmente editadas:
- Dados pessoais no header
- Experiências profissionais
- Formação acadêmica
- Qualificações e habilidades

### Estilos
O arquivo `css/style.css` está bem organizado com comentários para facilitar modificações:
- Reset e base styles
- Sistema de temas
- Componentes específicos
- Media queries responsivas

## 📊 Informações do Currículo

**Magno Torres Carvalho**
- **Profissão**: Engenheiro Mecânico | Doutor em Ciência dos Materiais
- **Localização**: Duque de Caxias, Rio de Janeiro
- **Experiência**: 6+ anos em P&D e gestão de qualidade
- **Especialização**: Materiais compósitos e caracterização de materiais

### Destaques da Carreira
- **Pesquisador na UCSD** (2024-2025) - Califórnia, EUA
- **Analista Sênior na Brastêmpera** (2022-2024)
- **Doutorado em andamento no IME** com período sanduíche na UCSD
- **Certificações**: ISO 9001, API-6A, CQI-9, FMEA, APQP/PPAP

## 🎨 Screenshots

### Modo Claro (Padrão)
- Design limpo com fundo branco
- Texto escuro para boa legibilidade
- Seções com fundo levemente acinzentado

### Modo Escuro
- Tema escuro moderno
- Contraste otimizado
- Cores de destaque ajustadas

### Responsividade
- Layout adaptativo para mobile
- Menu colapsável em telas menores
- Touch gestures otimizados

## 🌟 Melhorias Futuras Sugeridas

1. **Integração com APIs**: LinkedIn, GitHub
2. **Download em PDF**: Geração automática
3. **Múltiplos Idiomas**: Internacionalização
4. **Analytics**: Rastreamento de visitas
5. **Animações Avançadas**: Parallax scrolling
6. **PWA**: Funcionalidades de Progressive Web App

## 📞 Contato

Para dúvidas sobre a implementação ou modificações:
- **Email**: magnotorres7@ime.eb.br
- **LinkedIn**: [Magno Torres](https://www.linkedin.com/in/Magno-Torres)
- **Telefone**: +55 (21) 970698004

---

**Desenvolvido com ❤️ usando tecnologias web modernas**

*Última atualização: Agosto 2024*
