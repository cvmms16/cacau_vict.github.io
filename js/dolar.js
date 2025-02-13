// Função para realizar a conversão de moeda
function convert() {
    // Obtém o valor inserido pelo usuário no campo de entrada
    let value = parseFloat(document.getElementById("inputValue").value);

    // Obtém a opção de conversão selecionada (dólar para outra moeda ou outra moeda para dólar)
    let convertOption = document.getElementById("convertOption").value;

    // Obtém a moeda de destino selecionada (Euro, Real, ou Libra)
    let currencyOption = document.getElementById("currencyOption").value;

    // Define a variável para armazenar o valor convertido
    let result;

    // Verifica a opção de conversão e realiza o cálculo de acordo com a moeda de destino
    if (convertOption === "usd-to-other") {
        // Se a conversão for de dólar para outra moeda
        switch(currencyOption) {
            case "eur":
                result = value * 0.96; // Exemplo: 1 USD = 0,96 EUR
                document.getElementById("result").innerText = `${value} USD é igual a ${result.toFixed(2)} EUR.`;
                break;
            case "brl":
                result = value * 5.79; // Exemplo: 1 USD = 5.79 BRL
                document.getElementById("result").innerText = `${value} USD é igual a ${result.toFixed(2)} BRL.`;
                break;
            case "gbp":
                result = value * 1.25; // Exemplo: 1 USD = 1.25 GBP
                document.getElementById("result").innerText = `${value} USD é igual a ${result.toFixed(2)} GBP.`;
                break;
            default:
                document.getElementById("result").innerText = "Moeda não suportada.";
        }
    } else if (convertOption === "other-to-usd") {
        // Se a conversão for de outra moeda para dólar
        switch(currencyOption) {
            case "eur":
                result = value / 1.04; // Exemplo: 1 EUR = 1.04 USD
                document.getElementById("result").innerText = `${value} EUR é igual a ${result.toFixed(2)} USD.`;
                break;
            case "brl":
                result = value / 5.35; // Exemplo: 1 BRL = 0.1869 USD
                document.getElementById("result").innerText = `${value} BRL é igual a ${result.toFixed(2)} USD.`;
                break;
            case "gbp":
                result = value / 1.25; // Exemplo: 1 GBP = 1.25 USD
                document.getElementById("result").innerText = `${value} GBP é igual a ${result.toFixed(2)} USD.`;
                break;
            default:
                document.getElementById("result").innerText = "Moeda não suportada.";
        }
    }

    // Esconde o botão "Converter" e exibe o botão "Novo valor"
    document.getElementById("convertButton").style.display = "none";
    document.getElementById("resetDiv").style.display = "block";
}

// Função para resetar a calculadora e exibir novamente o botão "Converter"
function resetCalculator() {
    // Limpa o campo de entrada de valor
    document.getElementById("inputValue").value = "";

    // Limpa o parágrafo de resultado
    document.getElementById("result").innerText = "";

    // Esconde o botão "Novo valor"
    document.getElementById("resetDiv").style.display = "none";

    // Exibe o botão "Converter" novamente
    document.getElementById("convertButton").style.display = "block";
}

