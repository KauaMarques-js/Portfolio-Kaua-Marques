# Portfolio-Kaua-Marques

Portfólio e currículo de **Kauã Marques Almeida**, desenvolvedor Full Stack em Cuiabá/MT. Site em português, construído com Next.js App Router, TypeScript e CSS, com exportação estática.

## Desenvolvimento

```sh
npm ci
npm run dev
```

Abra http://127.0.0.1:3000. No PowerShell com bloqueio de scripts, use `npm.cmd`.

## Build e prévia

```sh
npm run typecheck
npm run build
npm start
```

O build gera `out/`. O comando `npm start` serve essa pasta localmente na porta 3000. A rota `/curriculo/` oferece impressão A4 e salvamento em PDF pelo navegador, com texto selecionável.

## Publicar na Vercel

1. Em **Add New → Project**, importe `KauaMarques-js/Portfolio-Kaua-Marques`.
2. Use a branch **main** como produção e mantenha a pasta raiz `./`.
3. Confira as opções: **Framework: Next.js**, **Build Command: npm run build**, **Output Directory: .next**.
4. Clique em **Deploy**.

O arquivo `vercel.json` declara o framework, o comando e o diretório interno `.next` usado pela integração da Vercel. A pasta `out/` continua sendo gerada para hospedagem estática e prévia local; ela não deve ser usada como Output Directory no preset Next.js da Vercel, pois não contém `routes-manifest.json`. O site não usa banco de dados, autenticação ou variáveis secretas.

Se o projeto já tiver sido importado com Output Directory `out`, o `vercel.json` corrigido substitui esse valor no próximo deploy. No painel, também é possível desativar o override e manter o padrão do Next.js (`.next`). Refaça o deploy a partir da versão atual da `main`, em vez de repetir um commit anterior.

O domínio da Vercel é usado automaticamente nos metadados. Para um endereço próprio, configure `NEXT_PUBLIC_SITE_URL` com a URL completa, incluindo `https://`, e faça um novo deploy. A indexação é habilitada no ambiente de produção da Vercel; prévias e execução local permanecem sem indexação.

## Branches

| Branch | Uso |
| --- | --- |
| `main` | Versão integrada para produção na Vercel. |
| `develop` | Base para as próximas alterações. |
| `feat/portfolio` | Implementação das páginas, conteúdo, componentes e identidade visual. |
| `chore/validacao-e-deploy` | Testes, prévia estática e configuração de publicação. |

Para uma alteração nova, crie uma branch a partir de `develop`, valide o build e os testes, e integre à `main` quando estiver pronta para produção.

## Conteúdo e imagens

- `src/data/portfolio.ts`: perfil, contatos, experiência, projetos, formação e tecnologias.
- `src/app/globals.css`: layout responsivo, estilos e impressão.
- `public/projects/flor-arabe.webp`: captura real e otimizada da página inicial da Flor Árabe. Na ausência da imagem, aparece uma composição tipográfica.
- `public/projects/airmetric.jpg`: material fornecido do resultado do júri local do NASA Space Apps Cuiabá 2025, usado no destaque do protótipo AirMetrics.
- `src/app/curriculo/page.tsx`: versão textual do currículo, usando os mesmos dados do portfólio.

Três projetos em destaque: AirMetrics (premiação), Flor Árabe (catálogo publicado) e Incluvia (aplicação de auditoria em desenvolvimento). AgroPulse, Vaultix Security, Emissor Cuiabano, Aumigos e ADIA / CognitiveLoop aparecem na lista expansível “Veja outros projetos”, com links públicos quando disponíveis. O currículo mantém os oito projetos.

A [Flor Árabe Perfumaria](https://flor-arabe-perfumaria.vercel.app) mantém pedidos pelo WhatsApp e checkout próprio em desenvolvimento para uma próxima versão. Os projetos de hackathon são trabalhos de equipe. Contato profissional: [LinkedIn](https://www.linkedin.com/in/kauamqs).

## Testes

```sh
npm run build
npx playwright install webkit
npm test
```

Os testes usam Google Chrome instalado e WebKit com viewport mobile. Verificam larguras 360/768/1440 px, navegação, teclado, menu, links, impressão, movimento reduzido, filtros de tecnologias, persistência do tema e regras automatizadas de acessibilidade nos temas claro e escuro. Capturas e PDF de verificação são gerados em `artifacts/`, fora do controle de versão. O teste WebKit exercita fontes, ícones e interações no motor de navegador usado pelo Safari; não substitui um teste em iPhone físico.

O tema padrão é Midnight Blue: fundo `#0B0F19`, cards `#151C2C`, azul `#4F8CFF`, destaques ciano `#22D3EE`, texto `#F8FAFC` e texto secundário `#94A3B8`. A opção clara continua disponível, e a preferência escolhida é preservada no armazenamento local do navegador, sem envio de dados. O tema escuro já está no HTML inicial, sem depender de JavaScript para as cores.

Geist e Geist Mono são servidas localmente; suas licenças estão em `public/fonts/Geist-OFL.txt` e `public/fonts/GeistMono-OFL.txt`. A interface usa ícones SVG, sem setas de texto que possam ser convertidas em emoji.
