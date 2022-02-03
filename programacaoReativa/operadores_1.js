//operador de criação
const { of } = require("rxjs");
//operador encadeavel
const { last, first, map } = require("rxjs/operators");

of(1, 2, "ana", false, "ultimo")
  .pipe(
    last(),
    map((v) => v[0]),
    map((v) => "A letra encontrada foi: " + v)
  )
  .subscribe(function (valor) {
    console.log("O valor gerado foi: " + valor);
  });
