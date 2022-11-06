console.log("Refazendo o desafio da gasolina aula 1 JS");

console.log("\n");
/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const preco_etanol = 5.79;
const preco_gasolina = 6.66;
let tipo_combustivel = 'Etanol';
let distanciakm = 100;
let gasto_medio = 10;    //litros por km

const litros_gastos = (distanciakm / gasto_medio);


// Para calcular o gasto médio, é necessário usar o seguinte pensamento:
// Pegue o tanto de km rodado, divide pelo tanto gasto médio de combustível que o carro usa
// O resultado da operação anterior deve ser multiplicado pelo preço do litro
// O resultado da operação anterior será o gasto total.

// É possível ainda inserir uma formúla:
// (D / G) * P
// Em que D é a distância percorrida, G é o gasto médio, e P é o preço do combustível
// É importante lembrar que precisamos verificar se é Gasolina ou Alcool utilizado

if (tipo_combustivel == 'Gasolina') {
  const valor_final = litros_gastos * preco_gasolina;
  console.log("O valor gasto é:", valor_final);
} else if (tipo_combustivel == 'Etanol') {
  const valor_final = litros_gastos * preco_etanol;
  console.log("O valor gasto é:", valor_final);
}

console.log("\n");



console.log("Melhorando o desafio da gasolina aula 1 JS");

console.log("\n");

/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

// Valores usados para uma viagem Caxambu-BH


const preco_etano1 = 3.37;
const preco_gasolina1 = 6.59;
let kmporlitro_rodado = 11.2;
let distância_emkm = 382.8;
const tipo_combustivel1 = "Gasolina";

const litros_gastos1 = distância_emkm / kmporlitro_rodado;

if (tipo_combustivel1 == "Gasolina") {
  const valor_final1 = litros_gastos1 * preco_gasolina1;
  console.log("O valor gasto será de:", valor_final1.toFixed(3));
} else {
  const valor_final1 = litros_gastos1 * preco_etano1;
  console.log("O valor gasto será de:", valor_final1.toFixed(3));
}