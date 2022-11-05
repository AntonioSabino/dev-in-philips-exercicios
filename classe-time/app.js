import Partida from "./Partida.js";
import Time from "./Time.js";

const times = [
  new Time("Palmeiras", "PAL"),
  new Time("São Paulo", "SAO"),
  new Time("Bragantino", "BRA"),
  new Time("Santos", "SAN"),
];

const partidas = [
  new Partida("PAL", "SAO", 2, 1),
  new Partida("BRA", "SAN", 1, 1),
  new Partida("PAL", "BRA", 1, 0),
  new Partida("SAO", "SAN", 1, 0),
  new Partida("SAN", "PAL", 1, 3),
  new Partida("SAO", "BRA", 2, 1),
];

partidas.forEach((partida) => {
  times.forEach((time) => {
    time.computarPartida(partida);
  });
});

times.forEach((time) => {
  time.exibirSituacao();
});

const classficacao = times.sort((timeA, timeB) => {
  if (timeA.numeroDePontos > timeB.numeroDePontos) {
    return -1;
  } else if (timeA.numeroDePontos < timeB.numeroDePontos) {
    return 1;
  } else {
    if (timeA.vitorias > timeB.vitorias) {
      return -1;
    } else if (timeA.vitorias < timeB.vitorias) {
      return 1;
    } else {
      if (timeA.golsMarcados > timeB.golsMarcados) {
        return -1;
      } else if (timeA.golsMarcados < timeB.golsMarcados) {
        return 1;
      } else {
        return 0;
      }
    }
  }
});

console.log("Tabela de Classificação");
classficacao.forEach((time, i) => {
  console.log(
    `${i + 1}º ${time.nome} - Pontos: ${time.numeroDePontos} - Vitorias: ${
      time.vitorias
    } - Gols Marcados: ${time.golsMarcados} - Gols Sofridos: ${
      time.golsSofridos
    }`
  );
});
