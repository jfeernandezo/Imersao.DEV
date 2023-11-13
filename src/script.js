// Distância da Terra até a Estrela Sirius A em anos-luz
const distanciaAnosLuz = 8.6;

// Solicita a quantidade de anos-luz ao usuário
const anosLuzParaConverter = prompt(
  "Digite a quantidade de anos-luz que você deseja converter:"
);

// Converte a entrada do usuário para um número
const anosLuzInput = parseFloat(anosLuzParaConverter);

// Verifica se a entrada é um número válido
if (!isNaN(anosLuzInput)) {
  // Constante para a conversão de anos-luz para metros
  const anosLuzEmMetros = 9.461e15; // 1 ano-luz é aproximadamente 9,461e15 metros

  // Calcula a distância em metros
  const distanciaEmMetros = anosLuzInput * anosLuzEmMetros;

  // Exibe o resultado em um alerta
  alert(
    `A distância de ${anosLuzInput} anos-luz da Terra até a Estrela Sirius A é aproximadamente ${distanciaEmMetros} metros.`
  );
} else {
  // Mensagem de erro se a entrada não for um número válido
  alert("Por favor, digite um número válido para a quantidade de anos-luz.");
}
