/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC e sua classificação na tabela:
IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  IMC() {
    return (this.peso / Math.pow(this.altura, 2));
  }

  classificarIMC() {
    const IMC = this.IMC();

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
}

const José = new Pessoa("José", 70, 1.75);
console.log(José);

console.log(José.IMC());
console.log(José.classificarIMC());