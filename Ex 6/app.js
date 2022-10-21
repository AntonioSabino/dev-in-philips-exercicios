function verificaPalindromo(name) {
  const reverseName = name.toLowerCase().split("").reverse().join("")
  return name.toLowerCase() === reverseName
}

console.log(verificaPalindromo("Antonio"));
console.log(verificaPalindromo("Ana"));

