export class BombaCombustivel {
  tipoCombustivel: string;
  valorLitro: number;
  qntCombustivel: number;

  constructor(
    tipoCombustivel: string,
    valorLitro: number,
    qntCombustivel: number
  ) {
    this.tipoCombustivel = tipoCombustivel;
    this.valorLitro = valorLitro;
    this.qntCombustivel = qntCombustivel;
  }

  abastecerPorValor(valorAbastecido: number) {
    let qntAbastecida = valorAbastecido / this.valorLitro;
    if (this.qntCombustivel < qntAbastecida) {
      return console.log(
        `Restam apenas ${this.qntCombustivel} litros na bomba. Não foi possivel concluir o abastecimento!`
      );
    } else {
      this.qntCombustivel = this.qntCombustivel - qntAbastecida;
      console.log(
        `Você abasteceu R$${valorAbastecido} - ${qntAbastecida.toFixed(
          2
        )} litros de combustível.`
      );
    }
  }

  abastecerPorLitro(qntAbastecida: number) {
    let custoCombustivel: number = this.valorLitro * qntAbastecida;
    if (this.qntCombustivel < qntAbastecida) {
      return console.log(
        `Restam apenas ${this.qntCombustivel} litros na bomba.`
      );
    } else {
      this.qntCombustivel = this.qntCombustivel - qntAbastecida;
    }
    console.log(
      `Você abasteceu ${qntAbastecida} litros de combustível.  - Total a pagar: R$${custoCombustivel.toFixed(
        2
      )}.`
    );
  }

  alterarValor(novoValorLitro: number) {
    this.valorLitro = novoValorLitro;
    console.log(`Reajuste: O valor do litro agora é R$${this.valorLitro}`);
  }

  alterarCombustivel(novoTipoCombustivel: string) {
    this.tipoCombustivel = novoTipoCombustivel;
    console.log(`Novo tipo de combustível na bomba: ${this.tipoCombustivel}`);
  }

  alterarQntCombustivel(novaQntCombustível: number) {
    let combustivelRestante = this.qntCombustivel;
    this.qntCombustivel = novaQntCombustível;
    console.log(
      `Quantidade anterior na bomba ${combustivelRestante.toFixed(
        2
      )} litros - Quantidade atual ${this.qntCombustivel} litros.`
    );
  }
}
