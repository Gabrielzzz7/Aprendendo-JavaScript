/*4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50; */

const par = [];
let a = 0;

for (let i = 10; i <= 50; i++) {
  if (i % 2 === 0) {
    par[a] = i;
    a++;
  }
}

console.log(par);