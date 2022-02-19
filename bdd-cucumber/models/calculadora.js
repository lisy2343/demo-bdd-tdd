class Calculadora {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  sumar() {
    this.result = this.x + this.y;
  }

  restar() {
    this.result = this.x - this.y;
  }

  multiplicar() {
    this.result = this.x * this.y;
  }

  dividir() {
    this.result = this.x / this.y;
  }

  getResultado() {
    return this.result;
  }
}

module.exports = Calculadora;
