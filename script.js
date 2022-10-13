function validaIdadeVotacao() {
  let validaEntrada = true;

  while (validaEntrada) {
    let idade = prompt("Digite a idade.");

    if (idade >= 18 && idade < 70) {
      validaEntrada = false;
      alert("você é obrigado a votar");
    } else if (idade >= 16 || idade >= 70) {
      validaEntrada = false;
      alert("Voto é opcional");
    } else if (idade < 16 && idade >= 0) {
      validaEntrada = false;
      alert("Você não pode votar");
    } else {
      validaEntrada = true;
      alert("Entrada invalida.");
    }
  }
}

validaIdadeVotacao();
