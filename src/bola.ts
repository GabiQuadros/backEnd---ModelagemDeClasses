export class Bola {
  cor: string;
  circunferencia: number;
  material: string;

  constructor(cor: string, circunferencia: number, material: string) {
    this.cor = cor;
    this.circunferencia = circunferencia;
    this.material = material;
  }

  trocarCor() {
    this.cor = "blue";
    console.log(` Nova cor: ${this.cor}`);
  }

  mostrarCor() {
    console.log(`Cor: ${this.cor}`);
  }
}
