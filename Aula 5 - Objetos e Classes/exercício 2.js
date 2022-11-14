/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/

class Carro {
  marca;
  cor;
  gasto_medio_combustivel_por_km;

  constructor(marca, cor, gasto_medio_combustivel_por_km) {
    this.marca = marca;
    this.cor = cor;
    this.gasto_medio_combustivel_por_km = gasto_medio_combustivel_por_km;
  }

  Gasto_do_percurso(distanciakm, preçoCombustível) {
    return (distanciakm * this.gasto_medio_combustivel_por_km * preçoCombustível);
  }
}

const palio_week = new Carro("fiat", "preto", 1 / 10.5);


console.log(palio_week);
console.log(palio_week.Gasto_do_percurso(70, 5));