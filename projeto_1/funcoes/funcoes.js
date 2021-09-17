const fs = require("fs");
const path = require("path");
const pathDiretorio = path.join(path.dirname(__dirname), "/legendas");

function obterLegendas() {
  return new Promise((resolve, reject) => {
    fs.readdir(pathDiretorio, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files.filter((fn) => fn.endsWith(".srt")));
      }
    });
  });
}

async function lerLegendas() {
  let conteudoLegendas = [];
  const legendas = await obterLegendas();
  legendas.forEach((legenda) => {
    conteudoLegendas.push(lerLegenda(legenda));
  });
  return Promise.all(conteudoLegendas);
}

function lerLegenda(legenda) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(pathDiretorio, legenda), (err, legenda) => {
      if (err) {
        reject(err);
      } else {
        resolve(legenda.toString());
      }
    });
  });
}

function removerQuebraLinha(linha) {
  return linha.replace(/\r?\n|\r/, "");
}

lerLegendas();

module.exports = {
  lerLegendas,
  removerQuebraLinha
};
