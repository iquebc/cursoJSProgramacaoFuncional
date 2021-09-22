const path = require("path");
const funcoes = require("./funcoes/funcoes.js");
const pathDiretorio = path.join(
  path.dirname(__dirname),
  "projeto_1",
  "/legendas"
);

const simbolos = [
  ".",
  ",",
  "[",
  "]",
  "(",
  ")",
  "\r",
  '"',
  "?",
  "-",
  "_",
  "♪",
  "<i>",
  "</i>",
  "!",
];

function agruparElementos(elementos) {
  return Object.values(
    elementos.reduce((acc, palavra) => {
      const el = palavra.toLowerCase();
      const qtde = acc[el] ? acc[el].qtde + 1 : 1;
      acc[el] = { elemento: el, qtde };
      return acc;
    }, {})
  );
}

funcoes
  .obterLegendas(pathDiretorio)
  .then((files) => funcoes.filtrarArquivos(".srt", files))
  .then((files) => funcoes.lerLegendas(files))
  .then((files) => funcoes.mesclarElementos(files))
  .then((conteudo) => funcoes.separarTextoPor("\n", conteudo))
  .then((linhas) => funcoes.removerLinhaTempo(linhas))
  .then((linhas) => funcoes.removerSimbolos(simbolos, linhas))
  .then((linhas) => funcoes.mesclarElementos(linhas))
  .then((texto) => funcoes.separarTextoPor(" ", texto))
  .then((palavras) => funcoes.removerLinhaVazia(palavras))
  .then((linhas) => funcoes.removerSimbolos(simbolos, linhas))
  .then((linhas) => funcoes.removerLinhaNumero(linhas))
  .then(agruparElementos)
  .then((palavras) => funcoes.ordenarPorAtributoNumerico("qtde", palavras, 'desc'))
  .then(console.log)
  .catch(console.log);
