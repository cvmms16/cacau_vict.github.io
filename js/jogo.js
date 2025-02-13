// Obtendo referências aos elementos do HTML
let startButton = document.getElementById("startButton"); // Botão para iniciar o jogo
let higherButton = document.getElementById("higher"); // Botão "Maior" (quando o número é maior que o palpite)
let lowerButton = document.getElementById("lower"); // Botão "Menor" (quando o número é menor que o palpite)
let correctButton = document.getElementById("correct"); // Botão "Correto!" (quando o palpite está correto)
let tooHighButton = document.getElementById("tooHigh"); // Novo botão: "Chute Subiu Demais"
let tooLowButton = document.getElementById("tooLow"); // Novo botão: "Chute Desceu Demais"
let retryButton = document.getElementById("retry"); // Botão para reiniciar o jogo
let gameArea = document.getElementById("gameArea"); // Área onde o jogo acontece
let guessNumber = document.getElementById("guessNumber"); // Elemento que exibe o palpite atual

// Definição dos limites do intervalo de busca
let low = 1; // Menor valor possível
let high = 100; // Maior valor possível
let guess; // Variável para armazenar o palpite atual

// Adicionando ouvintes de evento aos botões
startButton.addEventListener("click", startGame); // Inicia o jogo quando o botão é pressionado
higherButton.addEventListener("click", guessHigher); // Aumenta o intervalo quando o número é maior
lowerButton.addEventListener("click", guessLower); // Diminui o intervalo quando o número é menor
correctButton.addEventListener("click", correctGuess); // Confirma que o palpite está correto
tooHighButton.addEventListener("click", guessTooHigh); // Função para caso o chute tenha subido demais
tooLowButton.addEventListener("click", guessTooLow); // Função para caso o chute tenha descido demais
retryButton.addEventListener("click", startGame); // Reinicia o jogo

// Função para iniciar o jogo
function startGame() {
  low = 1; // Reinicia o menor valor do intervalo
  high = 100; // Reinicia o maior valor do intervalo
  guess = Math.floor((low + high) / 2); // Calcula o primeiro palpite como o valor médio
  gameArea.style.display = "block"; // Exibe a área do jogo
  guessNumber.textContent = guess; // Mostra o palpite atual na tela
  tooHighButton.style.display = "none"; // Esconde o botão de "Chute Subiu Demais"
  tooLowButton.style.display = "none";  // Esconde o botão de "Chute Desceu Demais"
  retryButton.style.display = "none";   // Esconde o botão de "Reiniciar"
  higherButton.style.display = "inline"; // Exibe o botão de "Maior"
  lowerButton.style.display = "inline"; // Exibe o botão de "Menor"
  startButton.style.display = "none"; // Esconde o botão "Iniciar Jogo" após o início do jogo
}

// Função chamada quando o usuário informa que o número é maior
function guessHigher() {
  low = guess + 1; // Ajusta o limite inferior para o próximo palpite
  updateGuess(); // Atualiza o palpite com o novo intervalo
  tooHighButton.style.display = "inline"; // Mostra o botão "Chute Subiu Demais"
  tooLowButton.style.display = "none"; // Esconde o botão "Chute Desceu Demais"
}

// Função chamada quando o usuário informa que o número é menor
function guessLower() {
  high = guess - 1; // Ajusta o limite superior para o próximo palpite
  updateGuess(); // Atualiza o palpite com o novo intervalo
  tooHighButton.style.display = "none"; // Esconde o botão "Chute Subiu Demais"
  tooLowButton.style.display = "inline"; // Mostra o botão "Chute Desceu Demais"
}

// Função chamada quando o usuário confirma que o palpite está correto
function correctGuess() {
  alert("Eu adivinhei! O número era " + guess); // Exibe mensagem de sucesso
  gameArea.style.display = "none"; // Oculta a área do jogo
  retryButton.style.display = "inline"; // Exibe o botão de "Reiniciar"
  startButton.style.display = "inline"; // Exibe o botão de "Iniciar Jogo" para um novo jogo
}

// Função chamada quando o usuário indica que o palpite foi alto demais
function guessTooHigh() {
  high = guess - 1; // Ajusta o limite superior
  updateGuess(); // Atualiza o palpite com o novo intervalo
  tooHighButton.style.display = "none"; // Esconde o botão "Chute Subiu Demais"
  tooLowButton.style.display = "inline"; // Mostra o botão "Chute Desceu Demais"
}

// Função chamada quando o usuário indica que o palpite foi baixo demais
function guessTooLow() {
  low = guess + 1; // Ajusta o limite inferior
  updateGuess(); // Atualiza o palpite com o novo intervalo
  tooHighButton.style.display = "inline"; // Mostra o botão "Chute Subiu Demais"
  tooLowButton.style.display = "none"; // Esconde o botão "Chute Desceu Demais"
}

// Função que atualiza o palpite e verifica se ainda há um intervalo válido
function updateGuess() {
  // Calcula o novo palpite com o intervalo ajustado
  guess = Math.floor((low + high) / 2); // O palpite é sempre o valor médio do intervalo atual
  guessNumber.textContent = guess; // Atualiza o número mostrado ao usuário

  // Verifica se o intervalo está válido
  if (low > high) {
    alert("Parece que houve algum erro. Vamos tentar novamente!"); 
    low = 1; // Reinicia o limite inferior
    high = 100; // Reinicia o limite superior
    guess = Math.floor((low + high) / 2); // Recalcula o palpite inicial com o novo intervalo
    guessNumber.textContent = guess; // Atualiza o número mostrado ao usuário
    tooHighButton.style.display = "none"; // Esconde o botão "Chute Subiu Demais"
    tooLowButton.style.display = "none"; // Esconde o botão "Chute Desceu Demais"
    retryButton.style.display = "none"; // Esconde o botão "Reiniciar"
    return; // Reinicia o processo
  }
}
