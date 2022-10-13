// [M1S02] Ex 4 - Somar números
function somaNumeros() {
  let numero = 0;
  let resultado = 0;

  while (numero != -1) {
    resultado += Number(numero);
    numero = prompt('Digite um número para somar ou "-1" para SAIR.');
  }

  alert(`O resultado da soma é: ${resultado}`);
}

somaNumeros();
