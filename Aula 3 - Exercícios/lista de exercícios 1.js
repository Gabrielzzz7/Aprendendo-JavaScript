/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

/*

1 - Preciso de 3 variaveis. Somo as 3 e divido por 3:
Media = (nota1 + nota2 + nota3)/3 --> Podendo ser generalizada para: Media = Somatario de n notas/n

2 - Com a média preciso verificar a condição dela:
if media < 5 - reprovado
if 5 < media < 7 - recuperação
if media > 7 - aprovado 

*/

console.log("Verificando sua aprovação:\n")

let nota1 = 5;
let nota2 = 4;
let nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

console.log("Sua media foi de:", media.toFixed(2));

console.log("\n");

if (media < 5) {
  console.log("Você está reprovado.");
} else if (media >= 5 && media <= 7) {
  console.log("Você pode fazer a recuperação!");
} else if (media > 7) {
  console.log("Você está aprovado!!! Parabéns");
}

