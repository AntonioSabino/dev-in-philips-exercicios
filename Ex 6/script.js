// [M1S02] Ex 6 - Construa uma calculadora
function calculadora() {
  let resultado;

  const operador = prompt(
    "Qual a operação deseja fazer? “+”, “-”, “*” ou “/”."
  );
  const numero1 = prompt("Digite o primeiro número.");
  const numero2 = prompt("Digite o segundo número.");

  switch (operador) {
    case "+":
      resultado = Number(numero1) + Number(numero2);
      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "*":
      resultado = numero1 * numero2;
      break;
    case "/":
      if (numero2 == 0) {
        resultado = "0 não pode ser um divisor.";
      } else {
        resultado = numero1 / numero2;
      }
      break;
    default:
      resultado = "Operador inválido";
      break;
  }

  if (typeof resultado === "string") {
    alert(resultado);
  } else {
    alert(`O resultado do seu cálculo é: ${resultado}`);
  }
}

calculadora();
