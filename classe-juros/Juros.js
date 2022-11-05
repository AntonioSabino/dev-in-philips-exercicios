export class Juros {
  constructor(c, i, t) {
    this.capitalInicial = c;
    this.taxaAplicada = i;
    this.tempo = t;
  }

  calcularJurosSimples() {
    return this.capitalInicial * this.taxaAplicada * this.tempo;
  }

  calcularJurosCompostos() {
    return this.capitalInicial * (1 + this.taxaAplicada) ** this.tempo;
  }
}

export class Juros2 {
  constructor(c, i, t) {
    this.capitalInicial = c;
    this.taxaAplicada = i;
    this.tempo = t;
  }

  calcularJuros(tipo) {
    if (tipo === "simples") {
      return this.capitalInicial * this.taxaAplicada * this.tempo;
    } else if (tipo === "composto") {
      return this.capitalInicial * (1 + this.taxaAplicada) ** this.tempo;
    }
  }
}
