let numeros = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
  numeros[i] = parseInt(prompt(`Digite o número ${i+1}:`));
  soma += numeros[i];
}

let media = soma / numeros.length;

console.log(`A soma dos números é: ${soma}`);
console.log(`A média dos números é: ${media}`);