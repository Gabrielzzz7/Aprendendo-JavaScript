console.log("PRIMEIRO DESÁFIO JAVASCRIT");

/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.


*/

const preço_combustível = 5.79; //por litro
let gasto_médio = 12;  //12l de gasolina/km
let distância = 100;  //km

console.log("O valor gasto para realizar a viagem é:", ((distância / gasto_médio) * preço_combustível).toFixed(2));

// MODO DE RESOLUÇÃO ALTERNATIVO

// Valores do dia 03/11/2022
// Carro Palio Weekend 1.6
// Distancia de Caxambu a Belo Horizonte

const preçocomb_porlitro = 3.86;
let kmporlitro_rodado = 11.2;
let distância_emkm = 382.8;

const litros_gastos = distância_emkm / kmporlitro_rodado;
const valor_gasto = litros_gastos * preçocomb_porlitro;

console.log("O valor gasto para realizar a viagem é:", valor_gasto.toFixed(2));