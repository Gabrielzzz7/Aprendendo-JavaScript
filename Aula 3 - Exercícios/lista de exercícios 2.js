/*
2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

/*
Algoritmo
1 - Aplico o peso e a altura de uma pessoa na formula
2 - Verifico em qual condição ela se encaixa. Poderia usar switch(em c)

*/

let peso = 150;
let altura = 1.95;

const IMC = (peso) / Math.pow(altura, 2);

console.log("Seu Indice de Massa Corporal é de:", IMC.toFixed(3));

if (IMC < 18.5) {
  console.log("Você está abaixo do Peso");
} else if (IMC >= 18.5 && IMC <= 25) {
  console.log("Você está com o Peso Normal");
} else if (IMC > 25 && IMC <= 30) {
  console.log("Você está acima do Peso");
} else if (IMC > 30 && IMC <= 40) {
  console.log("Você está Obeso");
} else {
  console.log("Você está com Obesidade grave");
}