import { Juros, Juros2 } from "./Juros.js";

// Utilizando classe Juros
const resultado1 = new Juros(10000, 0.07, 24);
const resultado2 = new Juros(10000, 0.15, 10);

console.log(`Juros Simples: ${resultado1.calcularJurosSimples()}`);
console.log(`Juros Compostos: ${resultado1.calcularJurosCompostos()}`);
console.log(`Juros Simples: ${resultado2.calcularJurosSimples()}`);
console.log(`Juros Compostos: ${resultado2.calcularJurosCompostos()}`);

// Utilizando classe Juros2
const resultado3 = new Juros2(10000, 0.07, 24);
const resultado4 = new Juros2(10000, 0.15, 10);

console.log(`Juros2 Simples: ${resultado3.calcularJuros("simples")}`);
console.log(`Juros2 Compostos: ${resultado3.calcularJuros("composto")}`);
console.log(`Juros2 Simples: ${resultado4.calcularJuros("simples")}`);
console.log(`Juros2 Compostos: ${resultado4.calcularJuros("composto")}`);