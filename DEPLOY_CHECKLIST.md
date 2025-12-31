# Checklist de Deploy - Império Web

## Pré-Deploy

- [ ] Verificar se o número de WhatsApp está atualizado em todos os componentes
- [ ] Confirmar que todas as traduções estão completas (pt.json, en.json)
- [ ] Verificar se as imagens OG estão acessíveis

## Deploy no GitHub Pages

### 1. Conectar ao GitHub
1. No Lovable, vá em **Settings > GitHub** e conecte ao repositório
2. O código será sincronizado automaticamente

### 2. Configurar GitHub Pages
1. No GitHub, vá em **Settings > Pages**
2. Em "Build and deployment", selecione **GitHub Actions**
3. O workflow `.github/workflows/deploy.yml` já está configurado

### 3. Configurar Domínio Customizado (GoDaddy)
1. No GitHub Pages, adicione o domínio: `imperioweb.eu`
2. No GoDaddy DNS, configure:
   - **A Record**: `@` → `185.199.108.153`
   - **A Record**: `@` → `185.199.109.153`
   - **A Record**: `@` → `185.199.110.153`
   - **A Record**: `@` → `185.199.111.153`
   - **CNAME**: `www` → `seu-usuario.github.io`
3. Aguarde propagação DNS (até 48h)
4. Ative "Enforce HTTPS" no GitHub Pages

## Validação Pós-Deploy

### View-Source (CRÍTICO)
- [ ] `view-source:https://imperioweb.eu/` contém H1, parágrafos e CTAs
- [ ] `view-source:https://imperioweb.eu/servicos` contém conteúdo real
- [ ] `view-source:https://imperioweb.eu/contacto` contém formulário

### SEO Técnico
- [ ] [Rich Results Test](https://search.google.com/test/rich-results) - JSON-LD válido
- [ ] [Meta Tags Validator](https://metatags.io/) - OG e Twitter ok
- [ ] `https://imperioweb.eu/sitemap.xml` acessível
- [ ] `https://imperioweb.eu/robots.txt` acessível

### Performance
- [ ] [Google Lighthouse](https://pagespeed.web.dev/) - Score 90+
- [ ] LCP < 2.5s
- [ ] CLS < 0.1

### Funcionalidades
- [ ] Navegação entre páginas funciona
- [ ] Refresh em /servicos e /contacto não dá 404
- [ ] Botão WhatsApp flutuante visível no mobile
- [ ] Formulário de contacto funciona
- [ ] CTAs redirecionam corretamente

### Indexação
- [ ] Submeter sitemap no Google Search Console
- [ ] Solicitar indexação das páginas principais

## Comandos Úteis (Local)

```bash
# Instalar dependências
npm ci

# Build de produção
npm run build

# Pré-render (após build)
npm run postbuild

# Testar localmente o build
npx serve dist
```

## Troubleshooting

### 404 em rotas diretas
O arquivo `404.html` é criado automaticamente no deploy. Se ainda houver 404:
1. Verifique se o workflow completou com sucesso
2. Confirme que `404.html` existe no branch gh-pages

### Conteúdo não pré-renderizado
1. Verifique os logs do GitHub Actions
2. Confirme que `react-snap` rodou sem erros
3. Localmente, rode `npm run build && npm run postbuild` e verifique `dist/index.html`

### Domínio não funciona
1. Verifique propagação DNS: `nslookup imperioweb.eu`
2. Confirme que o arquivo `CNAME` existe no branch gh-pages
3. Aguarde até 48h para propagação completa
