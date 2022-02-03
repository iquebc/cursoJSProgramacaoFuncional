const { Observable } = require("rxjs");

function entre(min, max) {
  return new Observable((subscriber) => {
    for (let index = min; index < max; index++) {
      subscriber.next(index);
    }
    subscriber.complete();
  });
}

const obs = entre(1, 100).subscribe(console.log);
