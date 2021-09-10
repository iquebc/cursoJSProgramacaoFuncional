const carrinho = [
  {
    nome: "Caneta",
    qtde: 10,
    preco: 7.99,
  },
  {
    nome: "Impressora",
    qtde: 0,
    preco: 649.5,
  },
  {
    nome: "Caderno",
    qtde: 4,
    preco: 27.1,
  },
  {
    nome: "Lapis",
    qtde: 3,
    preco: 5.82,
  },
  {
    nome: "Tesoura",
    qtde: 1,
    preco: 19.2,
  },
];

const qtdeMaiorQueZero = (item) => item.qtde > 0;
const itensValidos = carrinho.filter(qtdeMaiorQueZero);
console.log(itensValidos);

const getNome = (item) => item.nome;
const nomeItensValidos = itensValidos.map(getNome);
console.log(nomeItensValidos);

const qtdeMuitoGrande = (item) => item.qtde >= 1000;
const itensMuitoGrande = carrinho.filter(qtdeMuitoGrande);
console.log(itensMuitoGrande);

Array.prototype.meuFilter = function (fn) {
  const arrayFiltrado = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      arrayFiltrado.push(this[i]);
    }
  }
  return arrayFiltrado;
};

const qtdeMenorQueTres = (item) => item.qtde < 3;
const itensValido2 = carrinho.meuFilter(qtdeMenorQueTres).map(getNome);
console.log(itensValido2);
