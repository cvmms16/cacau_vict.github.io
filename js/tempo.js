// Função para realizar a conversão de tempo
function convertTime() {
    // Obtém o valor inserido pelo usuário no campo de entrada e o converte para número
    let value = parseFloat(document.getElementById("inputValue").value);

    // Obtém a unidade de entrada selecionada pelo usuário
    let inputUnit = document.getElementById("inputUnit").value;

    // Obtém a unidade de saída selecionada pelo usuário
    let outputUnit = document.getElementById("outputUnit").value;

    // Verifica se o valor inserido é um número válido
    if (isNaN(value)) {
        // Se o valor não for um número válido, exibe uma mensagem de erro
        document.getElementById("result").innerText = "Por favor, insira um valor numérico válido.";
        return; // Interrompe a execução se o valor não for válido
    }

    // Fatores de conversão para milissegundos
    const conversionFactors = {
        hours: 3600000,  // 1 hora = 3.600.000 milissegundos
        minutes: 60000,  // 1 minuto = 60.000 milissegundos
        seconds: 1000,   // 1 segundo = 1.000 milissegundos
        milliseconds: 1  // 1 milissegundo = 1 milissegundo
    };

    // Conversão do valor de entrada para milissegundos usando o fator de conversão
    let valueInMilliseconds = value * conversionFactors[inputUnit];

    // Conversão para a unidade de saída usando o fator de conversão
    let result = valueInMilliseconds / conversionFactors[outputUnit];

    // Exibe o resultado formatado na página
    document.getElementById("result").innerText = 
        `${value} ${inputUnit} é igual a ${result.toFixed(2)} ${outputUnit}.`;

    // Oculta o botão de conversão e exibe o botão de novo valor
    document.getElementById("convertButton").style.display = "none";  // Esconde o botão de converter
    document.getElementById("resetDiv").style.display = "block";      // Exibe o botão de resetar
}

// Função para resetar a calculadora e permitir a inserção de um novo valor
function resetCalculator() {
    // Limpa o campo de entrada (resetando o valor digitado)
    document.getElementById("inputValue").value = "";

    // Restaura a visibilidade dos botões
    document.getElementById("convertButton").style.display = "inline-block";  // Exibe o botão de converter novamente
    document.getElementById("resetDiv").style.display = "none";              // Oculta o botão de resetar

    // Limpa o resultado exibido
    document.getElementById("result").innerText = "";  // Apaga qualquer resultado anterior
}
