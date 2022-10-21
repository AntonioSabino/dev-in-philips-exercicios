function procuraMinMax(...numeros) {
  if (numeros.length === 0 || numeros[0] === null) {
    console.log("Não é possível encontrar");
  } else {
    const length = numeros.length - 1
    numeros.sort((a, b) => a - b)
    console.log(`O menor número é ${numeros[0]} e o maior número é ${numeros[length]}`);
  }
}

procuraMinMax(20,10, 30)