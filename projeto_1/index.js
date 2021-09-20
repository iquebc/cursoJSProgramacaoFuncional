const path = require("path");
const funcoes = require("./funcoes/funcoes.js");
const pathDiretorio = path.join(
  path.dirname(__dirname),
  "projeto_1",
  "/legendas"
);
funcoes
  .obterLegendas(pathDiretorio)
  .then((files) => funcoes.filtrarArquivos(".srt", files))
  .then((files) => funcoes.lerLegendas(files))
  .then((files) => files.join(""))
  .then((conteudo) => conteudo.split("\n"))
  .then((linhas) => funcoes.removerLinhaVazia(linhas))
  .then((linhas) => funcoes.removerLinhaTempo(linhas))
  .then((linhas) => funcoes.removerLinhaNumero(linhas))
  .then(console.log)
  .catch(console.log);
