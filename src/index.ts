import { Contador } from "./contador";
import { Bola } from "./bola";
import { ContaCorrente } from "./contaCorrente";
import { Calculadora } from "./calculadora";
import { BombaCombustivel } from "./bombaCombustivel";
import { Carro } from "./carro";

//ATIVIDADE 1
let num1 = new Contador(10);

num1.mostrar();
num1.increment();
num1.zerar();
num1.increment();
num1.increment();
num1.increment();
num1.zerar();
///////

//ATIVIDADE 2
// let ball = new Bola("rosa", 10, "couro");
// console.log(ball);

// ball.mostrarCor();
// ball.trocarCor();
///////////

//ATIVIDADE 3
// let conta = new ContaCorrente(555, "Gabriela", 0);
// console.log(conta);

// conta.alterarNome("Carla");
// conta.deposito(1000);
// conta.saque(200);
// conta.saque(1000);
///////////

//ATIVIDADE 4
// let calculadora = new Calculadora();

// calculadora.somar(10, 20);
// calculadora.dividir(45, 5);
// calculadora.diminuir(30, 17);
// calculadora.multiplicar(200, 1);
// calculadora.visualizarHistorico();

//ATIVIDADE 5
// let abastecimento = new BombaCombustivel("Gasolina comum ", 6, 40);
// console.log(abastecimento);

// abastecimento.abastecerPorLitro(35);
// abastecimento.abastecerPorValor(97);
// abastecimento.alterarValor(25);
// abastecimento.alterarQntCombustivel(75);
// abastecimento.alterarCombustivel("Diesel");

//////////

//ATIVIDADE 6
// let carro1 = new Carro(15);

// carro1.obterGasolina();
// carro1.adicionarGasolina(50);
// carro1.andar(100);
// carro1.adicionarGasolina(20);
// carro1.andar(300);
// carro1.obterGasolina();
// carro1.andar(500);
