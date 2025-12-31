# Império Web — Site Institucional

Site oficial da Império Web, agência de criação de sites para empresas em Portugal e Europa.

**URL Produção**: https://imperioweb.eu

## Tecnologias

- **Frontend**: Vite + React + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **SEO**: react-helmet-async + JSON-LD Schema
- **Pre-rendering (SSG)**: react-snap
- **Deploy**: GitHub Pages

## Como Rodar Localmente

```bash
# 1. Clonar o repositório
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# 2. Instalar dependências
npm install

# 3. Rodar em desenvolvimento
npm run dev

# Aceder em http://localhost:8080
```

## Como Buildar

```bash
# Build completo com pre-render
npm run build

# O react-snap roda automaticamente via postbuild
# Isso gera HTML estático para cada rota
```

## Verificar Pre-render (SSG)

Após o build, execute o script de verificação:

```bash
# Usando npm script (recomendado)
npm run verify:ssg

# Ou diretamente
node scripts/verify-prerender.js
```

Este script verifica se:
- `dist/index.html` contém H1, textos e CTAs (mínimo 5000 chars no body)
- `dist/servicos/index.html` existe e tem conteúdo (mínimo 3000 chars)
- `dist/contacto/index.html` existe e tem conteúdo (mínimo 2000 chars)
- O body NÃO é apenas `<div id="root"></div>`
- Links, parágrafos e CTAs existem no HTML

**Se a verificação falhar, o build NÃO deve ser deployed.**

### Verificação Manual

```bash
# Após build, verificar view-source
cat dist/index.html | grep -E "<h1|Império|WhatsApp|Pedir"

# Verificar tamanho do HTML (deve ser >50KB se pre-renderizado)
ls -la dist/index.html
ls -la dist/servicos/index.html
ls -la dist/contacto/index.html
```

## Rotas Pre-renderizadas

| Rota | Arquivo |
|------|---------|
| `/` | `dist/index.html` |
| `/servicos` | `dist/servicos/index.html` |
| `/contacto` | `dist/contacto/index.html` |
| `/portfolio` | `dist/portfolio/index.html` |
| `/sobre` | `dist/sobre/index.html` |

## Deploy (GitHub Pages)

O deploy é automático via GitHub Actions:

1. Push para branch `main`
2. Workflow `.github/workflows/deploy.yml` executa:
   - `npm ci`
   - `npm run build` (inclui react-snap via postbuild)
   - `node scripts/verify-prerender.js` (valida HTML)
   - Cria `404.html` fallback
   - Deploy para GitHub Pages

### Configuração GoDaddy (DNS)

Para o domínio `imperioweb.eu`:

```
Tipo    Nome    Valor
A       @       185.158.133.1
A       www     185.158.133.1
```

## Checklist Pós-Deploy

### 1. Verificar HTML (view-source)

- [ ] `view-source:https://imperioweb.eu/` — tem H1, textos, links no body?
- [ ] `view-source:https://imperioweb.eu/servicos` — conteúdo real?
- [ ] `view-source:https://imperioweb.eu/contacto` — conteúdo real?

### 2. Teste com JavaScript Desligado

- [ ] Abrir DevTools → Settings → Disable JavaScript
- [ ] Recarregar página — ainda mostra conteúdo principal?

### 3. SEO & Schema

- [ ] [Rich Results Test](https://search.google.com/test/rich-results) — JSON-LD válido?
- [ ] [PageSpeed Insights](https://pagespeed.web.dev/) — Performance OK?
- [ ] `/robots.txt` acessível?
- [ ] `/sitemap.xml` acessível e válido?

### 4. Rotas e 404

- [ ] Recarregar `/servicos` não dá 404
- [ ] Recarregar `/contacto` não dá 404
- [ ] Rota inexistente mostra página 404 correta

## Estrutura de Arquivos Importantes

```
├── .github/workflows/deploy.yml  # GitHub Actions para deploy
├── scripts/verify-prerender.js   # Verificação automática do SSG
├── snap.config.cjs               # Configuração react-snap
├── public/
│   ├── CNAME                     # Domínio custom
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/seo/           # Schema JSON-LD
│   ├── locales/                  # Traduções PT/EN
│   └── pages/                    # Páginas (Index, Servicos, etc.)
└── dist/                         # Build output (após npm run build)
    ├── index.html                # Home pre-renderizada
    ├── servicos/index.html       # Serviços pre-renderizada
    └── contacto/index.html       # Contacto pre-renderizada
```

## Atualizações Futuras

Para adicionar novas rotas ao pre-render:

1. Editar `snap.config.cjs` → adicionar rota ao array `include`
2. Editar `public/sitemap.xml` → adicionar URL
3. Editar `scripts/verify-prerender.js` → adicionar à verificação (opcional)

## Suporte

- **Lovable**: https://lovable.dev
- **Email**: info@imperioweb.eu
