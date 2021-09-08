function desafio1(valor1) {
  return function (valor2) {
    return function (valor3) {
      return valor1 + valor2 + valor3;
    };
  };
}

const resultadoDesafio1 = desafio1(3)(4)(5);
console.log(resultadoDesafio1);

function desafio2(valor1) {
  return function (valor2) {
    return function (fn) {
      return fn(valor1, valor2);
    };
  };
}

function somar(valor1, valor2) {
  return valor1 + valor2;
}
function subtrair(valor1, valor2) {
  return valor1 - valor2;
}
function dividir(valor1, valor2) {
  return valor1 / valor2;
}
function multiplicar(valor1, valor2) {
  return valor1 * valor2;
}

const resultadoSomar = desafio2(1)(2)(somar);
console.log(resultadoSomar);

const resultadoSubtrair = desafio2(1)(2)(subtrair);
console.log(resultadoSubtrair);

const resultadoDividir = desafio2(1)(2)(dividir);
console.log(resultadoDividir);

const resultadoMultiplicar = desafio2(1)(2)(multiplicar);
console.log(resultadoMultiplicar);
