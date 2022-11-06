

const numero = 258238957238957823582396523924576290;

const isnumeroPar = (numero % 2) === 0;

if (numero === 0) {
  console.log("Número não definido");
} else if (isnumeroPar) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}