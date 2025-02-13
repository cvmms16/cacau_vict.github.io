
// Inicializa a pontuação do jogador
let score = 0;

// Obtém o total de perguntas no quiz
let totalQuestions = document.querySelectorAll(".question-container").length;

/**
 * Função chamada quando o usuário clica em uma resposta.
 * Impede que o usuário selecione outra resposta após escolher uma.
 * @param {HTMLElement} button - O botão da resposta clicada.
 * @param {boolean} isCorrect - Indica se a resposta está correta (true) ou errada (false).
 */
function checkAnswer(button, isCorrect) {
  let optionsDiv = button.parentNode; // Obtém o contêiner das opções da pergunta
  let buttons = optionsDiv.querySelectorAll("button"); // Obtém todos os botões dessa pergunta

  // Se algum botão já tiver sido marcado como "selecionado", impede troca de resposta
  if (optionsDiv.classList.contains("answered")) {
    return; // Sai da função e impede mudanças
  }

  // Marca que essa pergunta já foi respondida
  optionsDiv.classList.add("answered");

  if (isCorrect) {
    // Se a resposta estiver correta, adiciona a classe "correct" e incrementa a pontuação
    button.classList.add("correct");
    score++; // Incrementa a pontuação
  } else {
    // Se a resposta estiver errada, adiciona a classe "wrong"
    button.classList.add("wrong");
  }

  // Desabilita todos os botões dessa pergunta para evitar troca de resposta
  buttons.forEach(btn => btn.disabled = true);
}

/**
 * Exibe o resultado final do quiz ao usuário.
 */
function displayResult() {
  let resultText = `Você acertou ${score} de ${totalQuestions} perguntas!`;
  document.getElementById("result").innerText = resultText; // Exibe o resultado na tela

  // Mostra o botão de reiniciar e esconde o botão de enviar respostas
  document.getElementById("reset").style.display = "block";
  document.querySelector(".submit-button").style.display = "none";
}

/**
 * Função chamada quando o usuário clica no botão de enviar respostas.
 */
function submitAnswers() {
  displayResult(); // Exibe o resultado final
}

/**
 * Função para reiniciar o quiz, permitindo que o usuário jogue novamente.
 */
function resetQuiz() {
  score = 0; // Reinicia a pontuação
  document.getElementById("result").innerText = ''; // Limpa o resultado anterior
  document.getElementById("reset").style.display = "none"; // Esconde o botão de reiniciar
  document.querySelector(".submit-button").style.display = "inline-block"; // Exibe novamente o botão de "Enviar Respostas"

  // Reativa todos os botões e remove as classes de resposta correta/errada
  let questions = document.querySelectorAll(".question-container .options");
  questions.forEach(optionsDiv => {
    optionsDiv.classList.remove("answered"); // Remove a restrição de pergunta já respondida
    let buttons = optionsDiv.querySelectorAll("button");
    buttons.forEach(button => {
      button.disabled = false; // Reativa os botões para que possam ser clicados novamente
      button.classList.remove("correct", "wrong"); // Remove os estilos de resposta
    });
  });
}
