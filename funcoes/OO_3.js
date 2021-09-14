function Produto(nome, preco, desc = 0.15) {
  let privado = 3;
  this.nome = nome;
  this.preco = preco;
  this._desc = desc;

  this.precoFinal = () => this.preco * (1 - this._desc);

  this.getPrivado = () => privado;
}

Produto.prototype.log = function () {
  console.log(`Nome: ${this.nome} Preço: R$${this.preco}`);
};

Object.defineProperty(Produto.prototype, "desc", {
  get: function () {
    return this._desc;
  },
  set: function (value) {
    if (value >= 0 && value <= 1) {
      this._desc = value;
    }
  },
});

Object.defineProperty(Produto.prototype, "descString", {
  get: function () {
    return `${this._desc * 100}%`;
  },
});

const p1 = new Produto("Caneta", 10);
console.log(p1.nome);
p1.log();
const p2 = new Produto("Geladeira", 3000);
console.log(p2.preco);
console.log(p2.getPrivado());
console.log(p2.precoFinal());
p2.desc = 0.99;
console.log(p2.desc);
console.log(p2.descString);
