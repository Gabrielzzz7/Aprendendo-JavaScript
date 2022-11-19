/*3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".*/

const nomes = ["vitor", "gabriel", "vitoria", "amanda", "vanessa", "Vanda"];

for (let i = 0; i < nomes.length; i++) {
  if (nomes[i].indexOf("v") === 0) {
    console.log(nomes[i]);
  }
}