const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dados.txt");

function lerArquivo(caminho) {
  return new Promise(function (resolve) {
    fs.readFile(caminho, (_, data) => {
      resolve(data.toString());
    });
  });
}

console.log("Iniciando Leitura");
lerArquivo(caminho).then((resultado) => {
  console.log(resultado);
  console.log("Leitura Finalizada");
});
