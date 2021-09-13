const carrinho = [
  {
    nome: "Caneta",
    qtde: 10,
    preco: 7.99,
    fragil: true,
  },
  {
    nome: "Impressora",
    qtde: 1,
    preco: 649.5,
    fragil: true,
  },
  {
    nome: "Caderno",
    qtde: 4,
    preco: 27.1,
    fragil: false,
  },
  {
    nome: "Lapis",
    qtde: 3,
    preco: 5.82,
    fragil: false,
  },
  {
    nome: "Tesoura",
    qtde: 1,
    preco: 19.2,
    fragil: true,
  },
];

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

//1. fragil:true
//2. obter somente qtde e preco -> total
//3. media totais
const verificarFragil = (item) => item.fragil;
const obterTotal = (item) => item.qtde * item.preco;
const obterMedia = (acc, el) => {
  const novaQtde = acc.qtde + 1;
  const novoTotal = acc.total + el;
  return {
    qtde: novaQtde,
    total: novoTotal,
    media: novoTotal / novaQtde,
  };
};
const itensFrageis = carrinho.filter(verificarFragil);
console.log(itensFrageis);
const totalPorItem = itensFrageis.map(obterTotal);
console.log(totalPorItem);
const valorMedio = totalPorItem.meuReduce(obterMedia, {
  qtde: 0,
  total: 0,
  media: 0,
}).media;
console.log(valorMedio);
