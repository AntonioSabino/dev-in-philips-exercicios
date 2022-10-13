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
