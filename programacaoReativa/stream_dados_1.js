function gerarNumeros() {
  return {
    iniciar(fn, intervalo = 1000) {
      let numeros = 0;
      const interval = setInterval(() => {
        fn(numeros++);
      }, intervalo);

      return {
        parar() {
          clearInterval(interval);
        },
      };
    },
  };
}

const temp1 = gerarNumeros();
const exec1 = temp1.iniciar((numero) => {
  console.log("#1: ", numero * 2);
}, 1000);

const temp2 = gerarNumeros();
const exec2 = temp2.iniciar((a) => {
  console.log("#2:", a + 100);
}, 2000);

setTimeout(() => {
  exec1.parar();
  exec2.parar();
}, 10000);
