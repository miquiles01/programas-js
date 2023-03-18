let numeros = [];
for (let i = 0; i < 5; i++) {
  numeros[i] = parseInt(prompt(`Digite o número ${i+1}:`));
}

let maior = numeros[0];
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}

console.log(`O maior número é: ${maior}`);