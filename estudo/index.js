const path = require("path");
const fs = require("fs");
const diretorio = path.join(__dirname, "procedimentos");
const arquivo = path.join(diretorio, "tb_procedimento.txt");

function lerArquivo() {
  return new Promise((resolve, reject) => {
    try {
      const conteudoArquivo = fs.readFileSync(arquivo, { encoding: "latin1" });
      resolve(conteudoArquivo.toString());
    } catch (error) {
      reject(error);
    }
  });
}

function quebrarLinha(conteudoArquivo) {
  return conteudoArquivo.split("\n");
}

function retornarSomenteProcedimento(linhas) {
  return linhas.map((linha) => linha.substring(0, 260).trim());
}

function separarCodigoDescricao(linhas) {
  return linhas.map((linha) => {
    return { codigo: linha.substring(0, 9), descricao: linha.substring(10) };
  });
}

function gerarJson(linhas) {
  return JSON.stringify(linhas);
}

function gravarArquivo(json) {
  return new Promise((resolve, reject) => {
    try {
      fs.writeFileSync(path.join(diretorio, "procedimentos.json"), json);
      resolve("Dados gerados com Sucesso!");
    } catch (err) {
      reject(err);
    }
  });
}

lerArquivo()
  .then(quebrarLinha)
  .then(retornarSomenteProcedimento)
  .then(separarCodigoDescricao)
  .then(gerarJson)
  .then(gravarArquivo)
  .then(console.log)
  .catch(console.log);
