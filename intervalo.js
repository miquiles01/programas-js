let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));

if (num1 > num2) {
  let temp = num1;
  num1 = num2;
  num2 = temp;
}

console.log(`Números no intervalo de ${num1} e ${num2}:`);
for (let i = num1; i <= num2; i++) {
  console.log(i);
}