class pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2022 - idade;
  }

  descrever() {
    console.log('Meu nome é', this.nome, "e minha idade é", this.idade);
  }

}

function compara_pessoa(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(p1.nome, "é mais velho(a) que", p2.nome);
  } else if (p1.idade < p2.idade) {
    console.log(p2.nome, "é mais velho(a) que", p1.nome);
  } else {
    console.log(p2.nome, "tem a mesma idade que", p1.nome);
  }
}

const gabriel = new pessoa("Gabriel", 19);
const Ricardo = new pessoa("Ricardo", 24);

compara_pessoa(gabriel, Ricardo);



