export class Calculadora {
  historico: string[];

  constructor() {
    this.historico = [];
  }

  somar(valor1: number, valor2: number) {
    let soma = valor1 + valor2;
    let resultado = `${valor1} + ${valor2} = ${soma}`;
    console.log(resultado);
    this.historico.unshift(resultado);
  }

  diminuir(valor1: number, valor2: number) {
    let subtracao = valor1 - valor2;
    const resultado = `${valor1} - ${valor2} = ${subtracao}`;
    console.log(resultado);
    this.historico.unshift(resultado);
  }

  multiplicar(valor1: number, valor2: number) {
    let multiplicacao = valor1 * valor2;
    const resultado = `${valor1} * ${valor2} = ${multiplicacao}`;
    console.log(resultado);
    this.historico.unshift(resultado);
  }

  dividir(valor1: number, valor2: number) {
    let divisao = valor1 / valor2;
    const resultado = `${valor1} / ${valor2} = ${divisao}`;
    console.log(resultado);
    this.historico.unshift(resultado);
  }

  visualizarHistorico() {
    this.historico.forEach((resultado) => {
      console.log(`Histórico: ${resultado}`);
    });
  }
}
