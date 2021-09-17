const fs = require("fs");
const path = require("path");

function obterLegendas(caminho) {
  return new Promise((resolve, reject) => {
    try {
      let files = fs.readdirSync(caminho);
      files = files.map((file) => path.join(caminho, file));
      resolve(files);
    } catch (e) {
      reject(e);
    }
  });
}

function filtrarArquivos(tipo, files) {
  files = files.filter((file) => file.endsWith(tipo));
  return files;
}

async function lerLegendas(files) {
  return Promise.all(files.map((file) => lerLegenda(file)));
}

function lerLegenda(legenda) {
  return new Promise((resolve, reject) => {
    try {
      let file = fs.readFileSync(legenda, { encoding: "utf-8" });
      resolve(file.toString());
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  obterLegendas,
  filtrarArquivos,
  lerLegendas,
};
