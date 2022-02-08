const { Observable, from } = require("rxjs");

function createPipebleOperator(nextGenerator) {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next: nextGenerator(subscriber),
      });
    });
  };
}

function primeiro() {
  return createPipebleOperator(function (subscriber) {
    return function (valor) {
      subscriber.next(valor);
      subscriber.complete();
    };
  });
}

function nenhum() {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next(v) {
          subscriber.complete();
        },
      });
    });
  };
}

function ultimo() {
  return function (source) {
    return new Observable((subscriber) => {
      let ultimo;
      source.subscribe({
        next(v) {
          ultimo = v;
        },
        complete() {
          subscriber.next(ultimo);
          subscriber.complete();
        },
      });
    });
  };
}

from([1, 2, 3, 4, 5])
  .pipe(
    primeiro()
    // ultimo()
  )
  .subscribe(console.log);
