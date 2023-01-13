export class Contador {
  num: number;

  constructor(num: number) {
    this.num = num;
  }

  increment() {
    this.num++;
    console.log(this.num);
  }

  zerar() {
    this.num = 0;
    console.log(this.num);
  }

  mostrar() {
    console.log(this.num);
  }
}
