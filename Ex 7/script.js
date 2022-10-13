// [M1S02] Ex 7 - Verifique a estação do ano

function verificaEstacao() {
  let estacao = "";
  const dataHoje = new Date();
  const dia = dataHoje.getDate();
  const mes = dataHoje.getMonth() + 1;

  switch (mes) {
    case 1:
    case 2:
      estacao = "Verão";
      break;
    case 3:
      estacao = dia < 22 ? "Verão" : "Outono";
      break;
    case 4:
    case 5:
      estacao = "Outono";
      break;
    case 6:
      estacao = dia < 22 ? "Outono" : "Inverno";
      break;
    case 7:
    case 8:
      estacao = "Inverno";
      break;
    case 9:
      estacao = dia < 22 ? "Inverno" : "Primavera";
      break;
    case 10:
    case 11:
      estacao = "Primavera";
      break;
    case 12:
      estacao = dia < 22 ? "Primavera" : "Verão";
      break;
  }

  alert(estacao);
}

verificaEstacao();
