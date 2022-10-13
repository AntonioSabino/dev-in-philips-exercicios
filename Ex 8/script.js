// [M1S02] Ex 8 - Número primo

function numeroPrimo(numero) {
  for (let divisor = 2; divisor < numero; divisor++)
    if (numero % divisor == 0) return false;
  return true;
}

function listarNumerosPrimos() {
  const mil = 1000;
  let listaNumerosPrimos = [];
  for (var numero = 2; numero <= mil; numero++) {
    if (numeroPrimo(numero)) {
      listaNumerosPrimos.push(numero);
    }
  }

  console.log(`Há ${listaNumerosPrimos.length} número primos até 1000 e eles são:
  ${listaNumerosPrimos}`);
}

listarNumerosPrimos();
