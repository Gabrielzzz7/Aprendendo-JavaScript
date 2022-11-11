

//Função sem retorno
function nome_da_função() {
  console.log("teste");
}

nome_da_função();

console.log("\n");

//Função com parametro
function nome(name) {
  console.log("Seu nome é: " + name);
}

nome("Gab");

console.log("\n");

//Função com retorno
function potencia2(valor) {
  return (valor * valor);
}

const quadrado_De_10 = potencia2(10);
console.log(quadrado_De_10 + quadrado_De_10);
console.log(potencia2(15));

console.log("\n");


function juros(valor, juros) {
  const valor_somado = (juros / 100) * valor;
  return (valor + valor_somado);
}

console.log(juros(80, 8));

console.log("\n");

//Função principal main
function main() {
  console.log("Código Principal!!!");
}

main();

console.log("\n");



//Mudando o Exercício de IMC

function calculo_IMC(peso, altura) {
  return ((peso) / Math.pow(altura, 2));
}

function tipo_de_IMC(IMC) {
  if (IMC < 18.5) {
    return ("Você está abaixo do Peso");
  } else if (IMC >= 18.5 && IMC <= 25) {
    return ("Você está com o Peso Normal");
  } else if (IMC > 25 && IMC <= 30) {
    return ("Você está acima do Peso");
  } else if (IMC > 30 && IMC <= 40) {
    return ("Você está Obeso");
  } else {
    return ("Você está com Obesidade grave");
  }
}



function main() {
  let peso = 100;
  let altura = 1.95;

  console.log("\n");

  console.log("Seu Indice de Massa Corporal é de:", calculo_IMC(peso, altura));

  const indicedemassacorporal = calculo_IMC(peso, altura);

  console.log("\n");

  console.log(tipo_de_IMC(indicedemassacorporal));

  // OU

  console.log("\n");

  const imc = calculo_IMC(peso, altura); // Usando a função como um valor
  console.log("IMC:" + imc);
  console.log(tipo_de_IMC(imc));

  console.log("Teste main!!")
}

main();

console.log(main);            // Funções são valores que podemos manipular !! <--> É um objeto
console.log(tipo_de_IMC);

const main2 = main;
const imc = tipo_de_IMC;
console.log(main2);
console.log(imc);

main = function () {
  console.log("Poxa, os valores foram sobrescritos!");
}

main();

console.log("\n");

(function () {
  let peso = 100;
  let altura = 1.95;
  console.log("\n");

  const imc = calculo_IMC(peso, altura); // Usando a função como um valor
  console.log(tipo_de_IMC(imc));
})(); //Função imediatamente invocada note que ela não necessita de nome e não é possível chama-la de novo!


