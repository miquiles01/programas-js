let nota;

do {
  nota = prompt("Digite uma nota de 0 a 10:");

  if (nota < 0 || nota > 10) {
    alert("Valor inválido! Digite uma nota entre 0 e 10.");
  }
} while (nota < 0 || nota > 10);

alert("Nota válida: " + nota);