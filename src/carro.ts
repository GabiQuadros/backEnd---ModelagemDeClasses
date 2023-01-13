export class Carro {
  consumo: number;
  tanque: number;

  constructor(consumo: number) {
    this.consumo = consumo;
    this.tanque = 0;
  }
  andar(distancia: number) {
    let consumoCombustivel = distancia / this.consumo;
    let kmRestantes = this.tanque / this.consumo;
    if (this.tanque < consumoCombustivel) {
      console.log(
        `Você pode andar por mais ${kmRestantes.toFixed(0)}, precisa acastecer!`
      );
    } else {
      this.tanque = this.tanque - consumoCombustivel;
      console.log(
        `O carro faz ${
          this.consumo
        }km/litro - Consumiu ${consumoCombustivel.toFixed(
          2
        )} litros de gasolina em ${distancia}km.`
      );
    }
  }
  obterGasolina() {
    console.log(
      `Nivel atual do tanque de combustivel: ${this.tanque.toFixed(2)} litros.`
    );
  }
  adicionarGasolina(abastecer: number) {
    this.tanque = this.tanque + abastecer;
    console.log(
      `Nivel do tanque depois de abastecer ${this.tanque.toFixed(2)} litros.`
    );
  }
}
