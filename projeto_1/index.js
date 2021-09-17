const funcoes = require("./funcoes/funcoes.js");

funcoes
  .lerLegendas()
  .then((legendas) => legendas.map((linha) =>linha.replace("00", "99")))
//   .then((linhas) => linhas.map((linha) => linha))
   .then((resultado) => console.log(resultado));
