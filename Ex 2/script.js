// [M1S02] Ex 2 - Dado uma idade exibe a classificação dela
function classificacaoPorIdade() {
  const idade = prompt("Qual é a idade?");

  if (idade <= 15) {
    alert("Jovens");
  } else if (idade >= 65) {
    alert("Idosos");
  } else {
    alert("Adultos");
  }
}

classificacaoPorIdade();
