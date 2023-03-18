function obterNumeroValido(mensagem) {
    let valor;
    do {
      valor = prompt(mensagem);
      valor = parseFloat(valor);
    } while (isNaN(valor) || valor <= 0);
    return valor;
  }
  
  let populacaoA = obterNumeroValido("Informe a população inicial do país A:");
  let crescimentoA = obterNumeroValido("Informe a taxa de crescimento anual do país A (%):");
  let populacaoB = obterNumeroValido("Informe a população inicial do país B:");
  let crescimentoB = obterNumeroValido("Informe a taxa de crescimento anual do país B (%):");
  
  crescimentoA = 1 + crescimentoA / 100;
  crescimentoB = 1 + crescimentoB / 100;
  
  let anos = 0;
  while (populacaoA < populacaoB) {
    populacaoA *= crescimentoA;
    populacaoB *= crescimentoB;
    anos++;
  }
  
  alert(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a do país B.`);