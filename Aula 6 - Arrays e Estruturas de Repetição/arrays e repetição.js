
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

//const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

//console.log(soma / notas.length);

let soma = 0;
for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

console.log(soma);

media_nota = soma / notas.length;

console.log(media_nota);


/*const nome = "Gabriel Campos Prudente"

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}*/