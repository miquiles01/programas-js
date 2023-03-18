let nome = prompt("Digite seu nome: ");
while (nome.length <= 3) {
  nome = prompt("Nome inválido! Digite seu nome novamente (maior que 3 caracteres): ");
}

let idade = parseInt(prompt("Digite sua idade: "));
while (idade < 0 || idade > 150) {
  idade = parseInt(prompt("Idade inválida! Digite sua idade novamente (entre 0 e 150): "));
}

let salario = parseFloat(prompt("Digite seu salário: "));
while (salario <= 0) {
  salario = parseFloat(prompt("Salário inválido! Digite seu salário novamente (maior que zero): "));
}

let sexo = prompt("Digite seu sexo (f/m): ").toLowerCase();
while (sexo !== "f" && sexo !== "m") {
  sexo = prompt("Sexo inválido! Digite seu sexo novamente (f/m): ").toLowerCase();
}

let estadoCivil = prompt("Digite seu estado civil (s/c/v/d): ").toLowerCase();
while (estadoCivil !== "s" && estadoCivil !== "c" && estadoCivil !== "v" && estadoCivil !== "d") {
  estadoCivil = prompt("Estado civil inválido! Digite seu estado civil novamente (s/c/v/d): ").toLowerCase();
}

console.log(`Nome: ${nome}\nIdade: ${idade}\nSalário: ${salario}\nSexo: ${sexo}\nEstado Civil: ${estadoCivil}`);