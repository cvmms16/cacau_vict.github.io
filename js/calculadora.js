
// Função chamada ao clicar no botão "Calcular"
function calculate() {
  // Obtém os valores dos campos de entrada e converte para números flutuantes
  let num1 = parseFloat(document.getElementById("number1").value);  // Obtém o valor do campo "number1" e converte para número flutuante
  let num2 = parseFloat(document.getElementById("number2").value);  // Obtém o valor do campo "number2" e converte para número flutuante

  // Verifica se os valores são números válidos ou se os campos estão vazios
  // Se qualquer um dos valores for NaN (não é um número válido) ou estiver vazio, exibe uma mensagem de erro
  if (isNaN(num1) || isNaN(num2) || document.getElementById("number1").value === "" || document.getElementById("number2").value === "") {
    document.getElementById("resultEquation").textContent = "Por favor, insira números válidos em ambos os campos.";  // Exibe a mensagem de erro no elemento "resultEquation"
    return;  // Impede o cálculo de continuar caso haja erro de entrada
  }

  // Calcula as operações matemáticas
  let soma = num1 + num2;  // Calcula a soma dos dois números
  let subtracao = num1 - num2;  // Calcula a subtração dos dois números
  let multiplicacao = num1 * num2;  // Calcula a multiplicação dos dois números
  // Calcula a divisão, verificando se o divisor (num2) não é zero para evitar divisão por zero
  let divisao = num2 !== 0 ? num1 / num2 : "Indefinido (divisão por zero)";  // Se num2 for 0, a divisão é indefinida, caso contrário, realiza a divisão

  // Exibe os resultados das operações no elemento com o id "resultEquation"
  const resultElement = document.getElementById("resultEquation");
  if (resultElement) {  // Verifica se o elemento com o id "resultEquation" existe
    resultElement.innerHTML = `  <!-- Modifica o conteúdo HTML de "resultEquation" para exibir os resultados das operações -->
      <strong>O resultado das equações é:</strong><br>  <!-- Exibe um título em negrito -->
      Soma: ${soma}<br>  <!-- Exibe o resultado da soma -->
      Subtração: ${subtracao}<br>  <!-- Exibe o resultado da subtração -->
      Multiplicação: ${multiplicacao}<br>  <!-- Exibe o resultado da multiplicação -->
      Divisão: ${divisao}  <!-- Exibe o resultado da divisão ou "Indefinido" se for divisão por zero -->
    `;
  }

  // Esconde o botão de "Calcular" e mostra o botão de "Novas Equações"
  document.getElementById("calcButton").style.display = "none";  // Esconde o botão de calcular
  document.getElementById("resetDiv").style.display = "block";  // Mostra o botão de reset
}

// Função para resetar a calculadora
function resetCalculator() {
  // Limpa os campos de entrada
  document.getElementById("number1").value = "";  // Limpa o campo do primeiro número
  document.getElementById("number2").value = "";  // Limpa o campo do segundo número

  // Limpa os resultados exibidos
  document.getElementById("resultEquation").textContent = "";  // Limpa a área de resultados

  // Exibe o botão de calcular novamente e esconde o de reset
  document.getElementById("calcButton").style.display = "block";  // Mostra o botão de calcular novamente
  document.getElementById("resetDiv").style.display = "none";  // Esconde o botão de reset
}
