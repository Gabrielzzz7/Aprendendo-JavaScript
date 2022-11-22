


//const entradas = [5, 50, 10, 98, 23];
let i = 0;

//const entradas = [2];

const entradas = [4, 150, 200, 100, 90];
let j = 0;

function gets() {
  const valor = entradas[j];
  j++;
  return valor;
}

function print(texto) {
  console.log(texto);
}

module.exports = { gets, print }; //objeto com a função gets e print - esta sendo exportado