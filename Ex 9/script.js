// [M1S02] Ex 9 - Construa uma “calculadora” de P.A

// Calcular os 10 primeiros valores da sequencia
function progressaoAritmetica() {
  const valorInicial = prompt("Digite o valor inicial.");
  const raiz = prompt("Digite o valor da raíz.");
  let soma = Number(valorInicial);
  let listaProgressaoAritmetica = [soma];

  for (let index = 0; index < 9; index++) {
    soma += Number(raiz);
    listaProgressaoAritmetica.push(soma);
  }

  alert(
    `Valor inicial = ${valorInicial}; raiz = ${raiz}; P.A. = ${listaProgressaoAritmetica}`
  );
}

progressaoAritmetica();
