function Produto(nome, preco, desc = 0.15) {
  let privado = 3;
  this.nome = nome;
  this.preco = preco;
  this.desc = desc;

  this.precoFinal = () => this.preco * (1 - this.desc);

  this.getPrivado = () => privado;
}

const p1 = new Produto("Caneta", 10);
console.log(p1.nome);
const p2 = new Produto("Geladeira", 3000);
console.log(p2.preco);
console.log(p2.getPrivado());
console.log(p2.precoFinal());

