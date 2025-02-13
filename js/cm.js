// Função chamada ao clicar no botão "Converter"
function convert() {
    // Obtém o valor digitado pelo usuário no campo de entrada com o id 'inputValue'
    let value = document.getElementById("inputValue").value;

    // Obtém a opção de conversão escolhida pelo usuário no menu suspenso com o id 'convertOption'
    let convertOption = document.getElementById("convertOption").value;

    // Declara uma variável 'result' para armazenar o resultado da conversão
    let result;

    // Verifica se a opção escolhida é 'cm-to-m' (Centímetros para Metros)
    if (convertOption === "cm-to-m") {
        // Se for, converte o valor de centímetros para metros dividindo o valor por 100
        result = value / 100;

        // Exibe o resultado da conversão na página, mostrando o valor em centímetros e o valor correspondente em metros
        document.getElementById("result").innerText = `${value} cm é igual a ${result} metros.`;
    } 
    // Verifica se a opção escolhida é 'm-to-cm' (Metros para Centímetros)
    else if (convertOption === "m-to-cm") {
        // Se for, converte o valor de metros para centímetros multiplicando o valor por 100
        result = value * 100;

        // Exibe o resultado da conversão na página, mostrando o valor em metros e o valor correspondente em centímetros
        document.getElementById("result").innerText = `${value} metros é igual a ${result} centímetros.`;
    }

    // Após a conversão, esconde o botão "Converter" e exibe o botão "Novo valor"
    document.getElementById("convertButton").style.display = "none";
    document.getElementById("resetDiv").style.display = "block";  // Exibe o botão "Novo valor"
}

// Função chamada quando o botão "Novo valor" é clicado
function resetCalculator() {
    // Limpa o campo de entrada de valor
    document.getElementById("inputValue").value = "";

    // Limpa o parágrafo de resultado
    document.getElementById("result").innerText = "";

    // Esconde o botão "Novo valor" novamente
    document.getElementById("resetDiv").style.display = "none";

    // Exibe novamente o botão "Converter"
    document.getElementById("convertButton").style.display = "block";
}
