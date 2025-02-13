// Pegando os elementos do HTML
let calculateButton = document.getElementById("calculateButton"); // Obtém o botão de "Calcular IMC" pelo ID
let newCalculationButton = document.getElementById("newCalculationButton"); // Obtém o botão de "Novo cálculo" pelo ID
let weightInput = document.getElementById("weight"); // Obtém o campo de entrada de peso pelo ID
let heightInput = document.getElementById("height"); // Obtém o campo de entrada de altura pelo ID
let resultDiv = document.getElementById("result"); // Obtém a div onde o resultado será exibido
let imcResult = document.getElementById("imcResult"); // Obtém o elemento onde o IMC será exibido
let statusResult = document.getElementById("statusResult"); // Obtém o elemento onde o status será exibido

// Quando o botão de calcular for pressionado
calculateButton.addEventListener("click", calculateIMC); // Adiciona um ouvinte de evento que chama a função calculateIMC quando o botão de calcular for clicado

// Função para calcular o IMC e determinar o status
function calculateIMC() {
  let weight = parseFloat(weightInput.value); // Obtém o valor do peso e converte para número de ponto flutuante
  let height = parseFloat(heightInput.value); // Obtém o valor da altura e converte para número de ponto flutuante

  // Verificar se os valores de peso e altura são válidos
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Por favor, insira valores válidos para peso e altura."); // Se os valores não forem válidos, exibe um alerta
    return; // Interrompe a execução da função
  }

  // Calcular o IMC (peso dividido pela altura ao quadrado)
  let imc = weight / (height * height); // Fórmula do IMC: peso / altura²

  // Exibir o IMC
  imcResult.textContent = `Seu IMC é: ${imc.toFixed(2)}`; // Exibe o valor do IMC com 2 casas decimais

  // Determinar o status baseado no IMC
  let status; // Variável para armazenar o status
  if (imc < 18.5) {
    status = "Você está abaixo do peso."; // Se o IMC for menor que 18.5, o status é "abaixo do peso"
  } else if (imc >= 18.5 && imc < 24.9) {
    status = "Você está no peso ideal."; // Se o IMC estiver entre 18.5 e 24.9, o status é "peso ideal"
  } else if (imc >= 25 && imc < 29.9) {
    status = "Você está com sobrepeso."; // Se o IMC estiver entre 25 e 29.9, o status é "sobrepeso"
  } else if (imc >= 30 && imc < 34.9) {
    status = "Você está com obesidade grau 1."; // Se o IMC estiver entre 30 e 34.9, o status é "obesidade grau 1"
  } else if (imc >= 35 && imc < 39.9) {
    status = "Você está com obesidade grau 2."; // Se o IMC estiver entre 35 e 39.9, o status é "obesidade grau 2"
  } else {
    status = "Você está com obesidade grau 3 (obesidade mórbida)."; // Se o IMC for maior ou igual a 40, o status é "obesidade grau 3"
  }

  // Exibir o status
  statusResult.textContent = status; // Exibe o status do IMC

  // Exibir o resultado
  resultDiv.style.display = "block"; // Torna a div que contém o resultado visível

  // Esconde o botão "Calcular IMC" e exibe o botão "Novo cálculo"
  calculateButton.style.display = "none"; // Oculta o botão de "Calcular IMC"
  newCalculationButton.style.display = "inline-block"; // Torna o botão "Novo cálculo" visível
}

// Função para resetar a calculadora e permitir um novo cálculo
newCalculationButton.addEventListener("click", resetCalculator); // Adiciona um ouvinte de evento que chama a função resetCalculator quando o botão "Novo cálculo" for clicado

function resetCalculator() {
  // Limpa os campos de entrada
  weightInput.value = ""; // Limpa o campo de peso
  heightInput.value = ""; // Limpa o campo de altura

  // Limpa o resultado exibido
  resultDiv.style.display = "none"; // Esconde a div de resultados
  calculateButton.style.display = "inline-block"; // Torna o botão "Calcular IMC" visível novamente
  newCalculationButton.style.display = "none"; // Esconde o botão "Novo cálculo" novamente
}
