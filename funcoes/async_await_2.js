function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    if (numerosProibidos.includes(aleatorio)) {
      reject("número Repetido");
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarMegaSena(qtdeNumeros) {
  const numeros = [];
  for (let _ of Array(qtdeNumeros).fill()) {
    try {
      numeros.push(await gerarNumerosEntre(1, 60, numeros));
    } catch (e) {
      throw e;
    }
  }
  return numeros;
}

gerarMegaSena(8).then(console.log).catch(console.log);
