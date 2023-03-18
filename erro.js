while (true) {
    var username = prompt("Digite seu nome de usuário:");
    var password = prompt("Digite sua senha:");
  
    if (username === password) {
      alert("Erro: sua senha não pode ser igual ao seu nome de usuário!");
    } else {
      alert("Bem-vindo, " + username + "!");
      break;
    }
  }