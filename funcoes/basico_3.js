//arrow function
const felizNatal = () => console.log("Feliz Natal!");
felizNatal();

const saudacao = (nome) => `Fala ${nome} !!!`;
console.log(saudacao("Henrique"));

const somar = (...numeros) => {
  let total = 0;
  for (let n of numeros) {
    total += n;
  }

  return total;
};
console.log(somar(1,2,3,4,5,6,7,8,9,10));
console.log(somar(1,2,3,4,5,6));
console.log(somar(1,2,3));

const potenciaArrow = (base) => (exp) => Math.pow(base, exp);
console.log(potenciaArrow(2)(2));

//this
Array.prototype.log = function () {
  console.log(this);
};
Array.prototype.ultimo = function () {
  console.log(this[this.length - 1]);
};
const numeros = [1, 2, 3];
numeros.log();
numeros.ultimo();
