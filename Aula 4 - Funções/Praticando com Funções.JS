// PRATICANDO FUNÇÕES NO JS


/*

//Função escrever nome
function escrevaseuNome(name) {
  console.log("Meu nome é:" + name);
  return (name);
}

escrevaseuNome("Gabriel"); /
console.log("Meu nome é:" + escrevaseuNome(4));

*/
//Função Verificar mais dezoito

/*
function maiordeIdade(idade) {
  if (idade >= 18) {
    return ("É maior de idade");
  } else {
    return ("Náo é maior de idade");
  }
}

console.log(maiordeIdade(18));

*/

// Função Juros Desafio.

/*

3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 À vista Débito, recebe 10% de desconto;
2 À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 Em duas vezes, preço normal de etiqueta sem juros;
4 Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/


function valordoProduto(valor, tipo_de_pagamento, incidente) {
  if (tipo_de_pagamento === "1") {
    return (valor - (valor * (incidente / 100)));
  } else if (tipo_de_pagamento === "2") {
    return (valor - (valor * (incidente / 100)));
  } else if (tipo_de_pagamento === "3") {
    return (valor);
  } else {
    return (valor + (valor * (incidente / 100)));
  }
}

console.log(valordoProduto(100, 1, 10));