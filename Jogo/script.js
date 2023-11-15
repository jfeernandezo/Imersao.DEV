document.addEventListener("DOMContentLoaded", function () {
  // Gera um número aleatório entre 1 e 1000
  const numeroSecreto = Math.floor(Math.random() * 1000) + 1;

  // Número de tentativas permitidas
  const tentativasMaximas = 10;

  // Inicializa o número de tentativas
  let tentativas = 0;

  // Armazena o número secreto para exibição posterior
  let numeroSecretoFinal;

  // Função principal do jogo
  function jogoAdivinhacao() {
    while (tentativas < tentativasMaximas) {
      // Pede para o usuário digitar um número
      const palpite = parseInt(
        prompt(
          "Estou pensando em um número entre 1 e 1000, consegue adivinhar qual é? Lembre-se, você tem apenas 10 tentativas:"
        )
      );

      // Verifica se o palpite é válido
      if (isNaN(palpite) || palpite < 1 || palpite > 1000) {
        alert("Por favor, digite um número válido entre 1 e 1000.");
        continue;
      }

      // Incrementa o número de tentativas
      tentativas++;

      // Verifica se o palpite está correto
      if (palpite === numeroSecreto) {
        alert("Parabéns, até que enfim acertou!");
        return;
      } else if (palpite < numeroSecreto) {
        alert("O número é maior. Tente novamente.");
      } else {
        alert("O número é menor. Tente novamente.");
      }
    }

    // Se o jogador não acertou em todas as tentativas, armazena o número secreto e exibe no alerta
    numeroSecretoFinal = numeroSecreto;
    alert(
      "Acabou suas chances, estude mais e tente novamente. O número secreto era: " +
        numeroSecretoFinal
    );
  }

  // Chama a função principal do jogo
  jogoAdivinhacao();
});
