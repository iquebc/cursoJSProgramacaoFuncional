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

const calcularTotalItem = (item) => item.qtde * item.preco;
const calcularTotalProduto = (acc, el) => acc + el;
const totalItens = carrinho.map(calcularTotalItem);
const totalCompra = totalItens.reduce(calcularTotalProduto, 0);
console.log(totalCompra);

Array.prototype.meuReduce = function (fn, valorInicial) {
  let acc = valorInicial;
  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i];
    }else{
        acc = fn(acc, this[i], i, this);
    }
  }
  return acc;
};

const totalCompra2 = totalItens.meuReduce(calcularTotalProduto, 0);
console.log(totalCompra2);
