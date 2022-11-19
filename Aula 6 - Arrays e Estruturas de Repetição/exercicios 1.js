/*
1) Crie um programa que dado um número imprima a sua tabuada.
*/

const numero = 3;

const arr = [];

for (let i = 1; i <= 10; i++) {
  arr[i] = numero * i;
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


for (let i = 1; i <= 10; i++) {
  console.log(i * numero);
}


