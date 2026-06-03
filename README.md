# Landing Pages Profissionais | Tawhin Chiang

Landing page estática para apresentar o serviço de criação de landing pages profissionais para prestadores de serviço, empresas, consultores, clínicas, escritórios, negócios locais e atendimento online.

O projeto foi feito com HTML, CSS e JavaScript puro, sem dependências de build. A proposta é ter uma página leve, responsiva e fácil de publicar.

## Estrutura

```text
.
+-- assets/
|   +-- legal-landing-hero.png
|   +-- professional-landing-hero.png
+-- index.html
+-- script.js
+-- styles.css
+-- README.md
+-- .gitignore
```

## Personalização principal

Antes de publicar, revise estes pontos:

- Número de WhatsApp em `script.js`, na chave `whatsappNumber`.
- Mensagem inicial de WhatsApp em `script.js`, na chave `whatsappMessage`.
- Textos comerciais em `index.html`, caso queira focar em um nicho específico.
- Imagem principal em `assets/professional-landing-hero.png`, caso queira usar uma foto própria.
- Título e descrição da página dentro da tag `<head>` em `index.html`.

O número do WhatsApp deve estar no formato internacional, apenas com números. Exemplo para Brasil:

```js
whatsappNumber: "5511999999999"
```

## Rodando localmente

Como o site é estático, você pode abrir o arquivo `index.html` diretamente no navegador.

A forma mais fiel ao ambiente de hospedagem é servir a pasta localmente:

```bash
python -m http.server 5173 --bind 127.0.0.1
```

Depois acesse:

```text
http://127.0.0.1:5173/
```

Se a porta `5173` estiver ocupada, use outra:

```bash
python -m http.server 8080 --bind 127.0.0.1
```

## Inicializando o repositório

```bash
git init
git add .
git commit -m "Initial landing page"
```

Depois, crie um repositório remoto no GitHub e conecte:

```bash
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
git push -u origin main
```

## Hospedagem recomendada

Para produção, uma opção eficaz para este projeto é a Netlify:

- Funciona muito bem com sites estáticos.
- Permite conectar o repositório GitHub.
- Publica automaticamente a cada `git push`.
- Facilita domínio próprio e HTTPS.
- Não exige comando de build para este projeto.

Configuração sugerida na Netlify:

```text
Build command: deixe vazio
Publish directory: .
```

Fluxo:

1. Suba o projeto para um repositório no GitHub.
2. Na Netlify, escolha a opção de importar projeto a partir de um repositório.
3. Selecione o repositório.
4. Deixe o comando de build vazio.
5. Use `.` como pasta de publicação.
6. Publique o site.
7. Configure um domínio próprio quando estiver pronto.

Alternativa simples para preview: GitHub Pages. Para este projeto, publique a partir da branch `main` e da pasta raiz do repositório.

Referências oficiais:

- Netlify: https://docs.netlify.com/start/quickstarts/deploy-from-repository/
- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Observações

- O site não usa backend.
- Os botões de contato usam link direto do WhatsApp.
- O arquivo `assets/professional-landing-hero.png` é o hero principal atual.
- Arquivos temporários de captura e perfis locais de navegador estão ignorados no `.gitignore`.
