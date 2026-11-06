# Imagens dos projetos

`airmetric.jpg` é o material fornecido do resultado do júri local do NASA Space Apps Cuiabá 2025, com AirMetrics na segunda posição. Ele apresenta a conquista local; não é uma captura da interface do protótipo. A imagem inteira é preservada e pode ser aberta em tamanho original pelo link do cartão.

Os arquivos `github-*.svg` são as capas dos projetos publicadas no README do perfil GitHub de Kauã. São ilustrações, não capturas das aplicações.

## Flor Árabe

A captura real da página inicial de https://flor-arabe-perfumaria.vercel.app/ está em `flor-arabe.webp`, com 1280 × 800 px (16:10). O cartão apresenta a tela inteira, sem recortar a interface. A página usa o nome do projeto se o arquivo não existir, sem gerar requisições de imagem quebrada.

Depois de adicionar a imagem, ajuste `imageAlt` em `src/data/portfolio.ts` para descrever a tela e execute novamente o build. A captura deve omitir dados pessoais e informações sensíveis.
