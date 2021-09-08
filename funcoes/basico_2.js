function bomDia() {
  console.log("Bom Dia!");
}

const boaTarde = function () {
  console.log("Boa Tarde!");
};

function executarQualquerCoisa(fn) {
  if (typeof fn === "function") fn();
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

//Retornar uma funçao a partir de outra função
function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}
const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));

const pot34 = potencia(3)(4);
console.log(pot34);