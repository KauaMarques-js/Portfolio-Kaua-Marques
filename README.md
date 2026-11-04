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
- `public/projects/flor-arabe.webp`: caminho da captura da Flor Árabe. Na ausência da imagem, aparece uma composição tipográfica.
- `src/app/curriculo/page.tsx`: versão textual do currículo, usando os mesmos dados do portfólio.

Projeto apresentado: [Flor Árabe Perfumaria](https://flor-arabe-perfumaria.vercel.app). Contato profissional: [LinkedIn](https://www.linkedin.com/in/kauamqs).

## Testes

```sh
npm run build
npm test
```

Os testes usam Google Chrome instalado e verificam larguras 360/768/1440 px, navegação, teclado, menu, links, impressão, movimento reduzido e regras automatizadas de acessibilidade com axe-core. Capturas e PDF de verificação são gerados em `artifacts/`, fora do controle de versão.

A fonte Inter é servida localmente; sua licença está em `public/fonts/OFL.txt`.
