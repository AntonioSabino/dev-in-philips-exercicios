export default class Time {
  constructor(nome, sigla) {
    this.nome = nome;
    this.sigla = sigla;
    this.vitorias = 0;
    this.empates = 0;
    this.derrotas = 0;
    this.golsMarcados = 0;
    this.golsSofridos = 0;
  }

  get numeroDeJogos() {
    return this.vitorias + this.empates + this.derrotas;
  }

  get numeroDePontos() {
    return this.vitorias * 3 + this.empates;
  }

  #atualizarStatusTime(golsTimeA, golsTimeB) {
    this.golsMarcados += golsTimeA;
    this.golsSofridos += golsTimeB;
    if (golsTimeA > golsTimeB) {
      this.vitorias++;
    } else if (golsTimeA < golsTimeB) {
      this.derrotas++;
    } else {
      this.empates++;
    }
  }

  computarPartida(partida) {
    if (partida.siglaTimeA === this.sigla) {
      this.#atualizarStatusTime(partida.golsTimeA, partida.golsTimeB);
    } else if (partida.siglaTimeB === this.sigla) {
      this.#atualizarStatusTime(partida.golsTimeB, partida.golsTimeA);
    }
  }

  exibirSituacao() {
    console.log(`${this.nome} 
      Vitoria ${this.vitorias}
      Empates ${this.empates}
      Derrotas ${this.derrotas}
      Gols Marcados ${this.golsMarcados}
      Gols Sofridos ${this.golsSofridos}
      Pontos ${this.numeroDePontos}
      Jogos ${this.numeroDeJogos}
    `);
  }

  get statusTime() {
    return {
      nome: this.nome,
      sigla: this.sigla,
      vitorias: this.vitorias,
      empates: this.empates,
      derrotas: this.derrotas,
      golsMarcados: this.golsMarcados,
      golsSofridos: this.golsSofridos,
      numeroDePontos: this.numeroDePontos,
      numeroDeJogos: this.numeroDeJogos,
    };
  }
}
