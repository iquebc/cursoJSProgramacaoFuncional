function exec(fn, n1, n2) {
  return fn(n1, n2);
}

const somarNoTerminal = (x, y) => console.log(x + y);
const subtrairNoTerminal = (x, y) => console.log(x - y);
const subtrair = (x, y) => x - y;

exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 182, 27);

const r = exec(subtrair, 50, 25);
console.log(r);

const cb = () => console.log("Exec...");
setInterval(cb, 1000);
