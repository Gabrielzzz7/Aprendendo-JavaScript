/*2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
*/

const { gets, print } = require("./exportação de funções auxiliares");

const numeroDeEntradas = gets();

let maior_valor = 0;
let menor_valor = gets();

for (let i = 1; i <= numeroDeEntradas; i++) {
  const entrada = gets();
  if (maior_valor <= menor_valor) {
    maior_valor = menor_valor;
  } if (maior_valor < entrada) {
    maior_valor = entrada;
  }
  if (menor_valor > entrada) {
    menor_valor = entrada;
  }

}

print(maior_valor);
print(menor_valor);

