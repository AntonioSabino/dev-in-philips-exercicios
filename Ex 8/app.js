const uneDobraRetorna = (listaNumeros, ...numeros) => {
  const numerosDobrados = numeros.map((numero) => numero * 2)
  return [...listaNumeros, ...numerosDobrados]
}

console.log(uneDobraRetorna([1, 2, 3], 4, 4))
console.log(uneDobraRetorna([2], 10, 4, 8))
console.log(uneDobraRetorna([6, 8]))