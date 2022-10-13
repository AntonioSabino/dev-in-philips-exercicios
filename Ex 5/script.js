// [M1S02] Ex 5 - Pares e Impares
function quantidadeDeImparesEPares() {
  let impares = 0;
  let pares = 0;

  const numero = prompt(
    "Digite o NÚMERO para saber quantos IMPARES e PARES tem de ZERO ao NÚMERO"
  );

  for (let index = 0; index <= numero; index++) {
    if (index % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }

  alert(`De 0 até ${numero} tem ${pares} par(es) e ${impares} impar(es).`);
}

quantidadeDeImparesEPares();
