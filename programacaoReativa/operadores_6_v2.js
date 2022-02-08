const { Observable, from } = require("rxjs");

function createPipebleOperator(operatorFn) {
  return function (source) {
    return new Observable((subscriber) => {
      const sub = operatorFn(subscriber);
      source.subscribe({
        next: sub.next,
        error: sub.error || ((e) => subscriber.error(e)),
        complete: sub.complete || (() => subscriber.complete()),
      });
    });
  };
}

function primeiro() {
  return createPipebleOperator((subscriber) => ({
    next(valor) {
      subscriber.next(valor);
      subscriber.complete();
    },
  }));
}

function nenhum() {
  return createPipebleOperator((subscriber) => ({
    next() {
      subscriber.complete();
    },
  }));
}

function ultimo() {
  let ultimo;
  return createPipebleOperator((subscriber) => ({
    next(v) {
      ultimo = v;
    },
    complete() {
      if (ultimo !== undefined) subscriber.next(ultimo);
      subscriber.complete();
    },
  }));
}

from([1, 2, 3, 4, 5])
  .pipe(
    //primeiro()
    // nenhum(),
     ultimo()
  )
  .subscribe(console.log);
