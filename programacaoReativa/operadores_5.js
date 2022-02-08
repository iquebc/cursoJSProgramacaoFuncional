const { of, Observable } = require("rxjs");

function terminadoCom(parteFinal) {
  return function (font) {
    return new Observable((subscriber) => {
      font.subscribe({
        next(valor) {
          if (Array.isArray(valor)) {
            subscriber.next(valor.filter((el) => el.endsWith("Silva")));
          } else {
            if (valor.endsWith("Silva")) {
              subscriber.next(valor);
            }
          }
        },
        complete() {
          subscriber.complete();
        },
      });
    });
  };
}

of(["Ana Silva", "Maria Silva", "Pedro Rocha"])
  .pipe(terminadoCom("Silva"))
  .subscribe({
    next(v) {
      console.log(v);
    },
    complete() {
      console.log("Finalizado o Filtro");
    },
  });
