/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

/* 
Algorítmo:
1) Pego o preço e verifico em qual condição ele se encaixa:
 a - Se débito - if preço - 10preço/100
 b - Se a vista - if preço - 15preço/100
 c - Se duas vezes - 2 parcelas de preço/2
 d - Se mais duas vezes , i.e, n parcelas, 110preço/100 = novo preço/n
*/

const preço = 100;

const forma_de_pagamento = "d"
let n_parcelas = 4;

let valor = 0;

if (forma_de_pagamento === "a") {
  valor = (preço - ((10 * preço) / 100));
  console.log("O valor pago deverá ser de: R$", valor.toFixed(2));
} else if (forma_de_pagamento === "b") {
  valor = (preço - ((15 * preço) / 100));
  console.log("O valor pago deverá ser de: R$", valor.toFixed(2));
} else if (forma_de_pagamento === "c") {
  valor = preço / 2;
  console.log("O valor pago deverá ser duas parcelas de: R$", valor.toFixed(2))
} else {
  valor = ((110 * preço) / 100) / n_parcelas;
  console.log("O valor pago deverá ser n parcelas de: R$", valor.toFixed(2))
}

