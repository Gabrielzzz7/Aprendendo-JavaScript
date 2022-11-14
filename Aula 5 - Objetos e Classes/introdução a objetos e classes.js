
//CLASSE - DEFINIÇÃO DO QUE DEVERIA SER
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


//OBJETO - INSTÂNCIA - OCORRÊNCIA DE UMA CLASSE
/*const Gabriel = {
  nome: "Gabriel Campos Prudente",
  idade: 19,

  descrever: function () {
    console.log('Meu nome é', this.nome, "e minha idade é", this.idade);
  }
}*/

//console.log(gabriel.nome);  --> Chamando o nome dentro do obj

//console.log(gabriel.idade);  --> Chamando idade dentro do obj
//console.log(gabriel); --> Chamando o objeto

//gabriel.altura = 1.75; --> incrementando fora do obj

//console.log(gabriel);

//delete gabriel.idade; --> deletando fora do obj

//pessoa.descrever(); --> chamando uma função dentro do obj

//pessoa.nome = "Ricardo"; --> atribuindo novos valores dentro do obj
//pessoa.idade = 24;

//pessoa.descrever();

//const atributo = "idade";

//console.log(pessoa["nome"]); --> chamando dinamicamente por string

//pessoa["nome"] = "teste";
//console.log(pessoa);

//DEFININDO INSTÂNCIAS
const gabriel = new pessoa("Gabriel", 19); // Instanciei Gabriel
//console.log(gabriel);  //Não vai receber nada, pois eu só instanciei

//gabriel.nome = "Gabriel Campos Prudente";
//gabriel.idade = 19;

// "Criação de uma pessoa e atribuição de características a ela"
const ricardo = new pessoa("Ricardo", 24);
//ricardo.nome = "Ricardo Campos Prudente";
//ricardo.idade = 24;

//console.log(gabriel);
//console.log(ricardo);

//gabriel.descrever();
//ricardo.descrever();

console.log(gabriel);
console.log(ricardo);

