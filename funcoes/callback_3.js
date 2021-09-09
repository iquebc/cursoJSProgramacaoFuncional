const nums = [1, 2, 3, 4, 5];

const dobro = (n, i, a) => n * 2 + i + a.length;
console.log(nums.map(dobro));

const nomes = ["Ana", "Bia", "Gui", "Lia", "Rafa", "Bete"];

const primeiraLetra = (texto) => texto[0];
console.log(nomes.map(primeiraLetra));

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

const obterNome = (item) => item.nome;
const obterValorTotal = (item) => item.qtde * item.preco;

console.log(carrinho.map(obterNome));
console.log(carrinho.map(obterValorTotal));
