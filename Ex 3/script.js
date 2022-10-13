// [M1S02] Ex 3 - Tabuada
function tabuada() {
  const numero = prompt("O digite o número que deseja obter a tabuada.");

  let tabuada = "";

  for (let index = 0; index <= 10; index++) {
    const produto = numero * index;
    tabuada = `${tabuada}
    ${numero} x ${index} = ${produto}
    `;
  }
  alert(tabuada);
}

tabuada();
