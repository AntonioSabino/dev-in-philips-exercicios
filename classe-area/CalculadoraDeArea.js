export default class CalculadoraDeArea {
  constructor(tipo, base, altura) {
    this.tipo = tipo;
    this.base = base;
    this.altura = altura;
  }

  calcular() {
    switch (this.tipo) {
      case "triangulo":
        return (this.base * this.altura) / 2;
      case "quadrado":
        return this.base * this.base;
      case "retangulo":
        return this.base * this.altura;
      default:
        throw new Error("Tipo de área não suportado");
    }
  }
}
