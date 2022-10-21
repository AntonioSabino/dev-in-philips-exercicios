function somaTudo(...numeros) {
  return numeros.reduce((acc, curr) => acc + curr, 0);
}

console.log(somaTudo(1, 2, 3, 4));
