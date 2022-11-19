/*
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
*/

const numeros = [6, 72, 6, 78, 25, 8, 3, 57, 35, 27, 936, 35, 1431323353, 253642, 514];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i]);
  }

}
