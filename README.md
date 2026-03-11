# Portfolio — Isis Beatriz de Alencastro

Portfólio profissional em HTML, CSS e JavaScript, apresentando serviços, projetos e formas de contato de **Isis Beatriz de Alencastro** — estudante de Ciência da Computação com foco em automação com IA, desenvolvimento web e marketing digital.

---

## Sobre o projeto

Site estático responsivo que funciona como cartão de visitas digital, reunindo:

- **Apresentação** com efeito de digitação (auto-typing) das áreas de atuação
- **Sobre mim** com dados pessoais, formação e redes sociais
- **Serviços** em carrossel com modais explicativos
- **Projetos** com capas e links para repositórios/sites
- **Contato** com email, localização, WhatsApp e redes sociais

O layout usa tema claro/escuro (persistido no `localStorage`), menu hambúrguer em mobile e botão “voltar ao topo”.

---

## Funcionalidades

| Recurso | Descrição |
|--------|------------|
| **Modo escuro** | Alternância entre tema claro e escuro; preferência salva no navegador |
| **Menu responsivo** | Menu hambúrguer em telas pequenas com animação |
| **Auto-typing** | Texto animado na hero com as funções: Desenvolvedora de Software, Gestora de Automações, Analista de Marketing Digital |
| **Carrossel de serviços** | Navegação (anterior/próximo) entre os cards de serviços |
| **Modais** | Detalhes de cada serviço em janela modal com opção de contato via WhatsApp |
| **Botão “Voltar ao topo”** | Exibido após rolar a página; scroll suave ao clicar |
| **Copiar email** | Botão que copia o email para a área de transferência |
| **Scroll suave** | Navegação por âncoras (#sobre, #servicos, etc.) com scroll suave |

---

## Tecnologias

- **HTML5** — estrutura semântica e acessível (`aria-label`, `aria-labelledby`)
- **CSS3** — variáveis (tema claro/escuro), Flexbox, animações, responsividade
- **JavaScript (vanilla)** — interações sem frameworks

### Stack exibida no portfólio

Figma, Canva, VS Code, HTML5, CSS3, JavaScript, Python, N8N, Supabase, Google Ads, Meta Ads, Notion.

---

## Estrutura do projeto

```
portfolio/
├── index.html              # Página principal (home, sobre, serviços, projetos, contato)
├── projetos.html           # Página “Todos os Projetos”
├── README.md
└── assets/
    ├── css/
    │   ├── style.css       # Estilos gerais, tema, modais, componentes
    │   └── responsividade.css  # Breakpoints e menu mobile
    ├── js/
    │   └── script.js       # Modo escuro, menu, auto-typing, carrossel, modais, copiar email
    ├── docs/
    │   └── CurriculoIsisAlencastro.pdf
    └── images/
        ├── capas-projetos/   # Imagens dos projetos
        ├── fotos/            # Fotos de perfil
        ├── icons/            # Ícones (lua, sol, setas, serviços etc.)
        ├── icons-contato/    # Ícones de contato
        ├── icons-stacks/     # Ícones das tecnologias
        └── social/           # LinkedIn, GitHub, YouTube
```

---

## Páginas

### `index.html`

- **Home:** apresentação, foto, auto-typing e lista de stacks
- **Sobre:** foto, dados (nome, data de nascimento, localização, formação), redes sociais e texto de apresentação
- **Serviços:** carrossel com 5 serviços (Automação com IA, Desenvolvimento Web, Gestão de Tráfego, Montagem e Manutenção, Consultoria Digital), cada um com modal “Saiba mais” e link para WhatsApp
- **Projetos:** cards dos projetos em destaque + link “Todos os Projetos”
- **Contato:** email, localização, redes sociais, WhatsApp e botão para copiar email
- Header com logo “IBA”, links de navegação e botão de modo escuro
- Footer com mesmas informações de contato e copyright
- Botão fixo “voltar ao topo”

### `projetos.html`

- Listagem completa dos projetos (Prompt Manager, Portfólio Isis Alencastro, Vivi Delfino — Psicanalista)
- Mesmo header (link para Home), modo escuro e footer de contato
- Botão “voltar ao topo” e script para copiar email

---

## Como executar

1. Clone o repositório (ou baixe os arquivos):
   ```bash
   git clone <url-do-repositorio>
   cd portfolio
   ```

2. Abra o `index.html` no navegador:
   - Duplo clique no arquivo, ou
   - Use uma extensão “Live Server” no VS Code e abra `http://127.0.0.1:5500` (ou a porta indicada)

Não é necessário servidor nem instalação de dependências; o projeto é estático.

---

## Personalização

- **Cores e tema:** em `assets/css/style.css`, altere as variáveis em `:root` e no bloco `.darkmode` (ex.: `--primary-color`, `--background-color`, `--text-color`).
- **Textos e serviços:** edite o conteúdo diretamente em `index.html` e `projetos.html`.
- **Auto-typing:** em `assets/js/script.js`, altere o array `texts` para mudar as frases exibidas na hero.
- **Contato:** troque email, link do WhatsApp e links das redes em ambas as páginas HTML.

---

## Acessibilidade

- Uso de `aria-label` e `aria-labelledby` em seções e navegação
- Navegação por teclado e foco visível nos elementos interativos
- Textos alternativos em imagens (`alt`) e títulos descritivos

---

## Licença e créditos

© 2026 — Todos os direitos reservados.  
Design e código por **Isis Beatriz de Alencastro**.

---

## Contato

- **Email:** alencastroisis@gmail.com  
- **Localização:** Porto Alegre, RS  
- **LinkedIn:** [linkedin.com/in/isisalencastro](https://www.linkedin.com/in/isisalencastro)  
- **GitHub:** [github.com/isisalencastro](https://github.com/isisalencastro)  
- **YouTube:** [@IsisAlencastro](https://www.youtube.com/@IsisAlencastro)  
- **WhatsApp:** [Entrar em contato](https://wa.me/message/GGEAJPHMSN6MD1)
