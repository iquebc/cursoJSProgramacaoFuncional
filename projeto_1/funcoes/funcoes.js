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

function removerLinhaVazia(array) {
  return array.filter((linha) => linha.trim());
}

function removerLinhaTempo(array) {
  return array.filter((linha) => !linha.includes("-->"));
}

function removerLinhaNumero(array) {
  return array.filter((linha) => !parseInt(linha.trim()));
}

function removerSimbolos(simbolos, array) {
  return array.map((texto) => {
    let textoSemSimbolos = texto;
    simbolos.forEach((simbolo) => {
      textoSemSimbolos = textoSemSimbolos.split(simbolo).join("");
    });
    return textoSemSimbolos;
  });
}

function separarTextoPor(simbolo, texto) {
  return texto.split(simbolo);
}

function mesclarElementos(array) {
  return array.join(" ");
}

function ordenarPorAtributoNumerico(attr, array, ordem = "asc") {
  const asc = (o1, o2) => o1[attr] - o2[attr];
  const desc = (o1, o2) => o2[attr] - o1[attr];
  return array.sort(ordem === "asc" ? asc : desc);
}

module.exports = {
  obterLegendas,
  filtrarArquivos,
  lerLegendas,
  removerLinhaVazia,
  removerLinhaTempo,
  removerLinhaNumero,
  removerSimbolos,
  mesclarElementos,
  separarTextoPor,
  ordenarPorAtributoNumerico
};
