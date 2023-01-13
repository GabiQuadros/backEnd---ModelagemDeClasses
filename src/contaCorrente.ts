export class ContaCorrente {
  numeroDaConta: number;
  nomeCorrentista: string;
  saldo: number;

  constructor(numeroDaconta: number, nomeCorrentista: string, saldo: number) {
    this.numeroDaConta = numeroDaconta;
    this.nomeCorrentista = nomeCorrentista;
    this.saldo = 0;
  }

  alterarNome(nome: string) {
    this.nomeCorrentista = nome;
    console.log(
      `Nome: ${this.nomeCorrentista} - Conta: ${this.numeroDaConta} - Saldo: ${this.saldo} `
    );
  }

  deposito(valor: number) {
    this.saldo += valor;
    console.log(
      `Nome: ${this.nomeCorrentista} - Conta: ${this.numeroDaConta} - Deposito: ${valor} - Saldo: ${this.saldo} `
    );
  }

  saque(valor: number) {
    this.saldo -= valor;
    if (this.saldo < 0) {
      console.log("Saldo insuficiente!");
      return;
    }
    console.log(
      `Nome: ${this.nomeCorrentista}/n - Conta: ${this.numeroDaConta} - Saque: ${valor} - Saldo: ${this.saldo} `
    );
  }
}
