// Obtendo os elementos do formulário e os botões
let contactForm = document.getElementById('contactForm');  // Referência ao formulário
let submitButton = contactForm.querySelector('button[type="submit"]');  // Botão de envio
let resetButton = contactForm.querySelector('button[type="reset"]');  // Botão de apagar
let resultParagraph = document.getElementById('result');  // Parágrafo para exibir os dados após o envio
let submissionStatus = document.getElementById('submissionStatus');  // Parágrafo de status de envio
let newSubmissionButton = document.getElementById('newSubmissionButton');  // Botão "Novas informações"

// Adicionando evento ao formulário de envio
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o comportamento padrão do formulário (não envia de verdade)

  // Exibir a mensagem de sucesso
  submissionStatus.textContent = "Informações enviadas com sucesso!";  // Texto de sucesso
  submissionStatus.style.display = "block"; // Torna a mensagem visível

  // Coletando os dados inseridos no formulário
  let nome = document.getElementById('nome').value;  // Obtém o valor do campo nome
  let email = document.getElementById('email').value;  // Obtém o valor do campo email
  let contato = document.getElementById('contato').value;  // Obtém o valor do campo contato
  let endereco = document.getElementById('endereco').value;  // Obtém o valor do campo endereço
  let mensagem = document.getElementById('mensagem').value;  // Obtém o valor do campo mensagem

  // Exibindo os dados coletados
  resultParagraph.innerHTML = `
    <strong>Nome:</strong> ${nome}<br>  <!-- Exibe o nome inserido -->
    <strong>Email:</strong> ${email}<br>  <!-- Exibe o email inserido -->
    <strong>Contato:</strong> ${contato}<br>  <!-- Exibe o contato inserido -->
    <strong>Endereço:</strong> ${endereco}<br>  <!-- Exibe o endereço inserido -->
    <strong>Mensagem:</strong> ${mensagem}  <!-- Exibe a mensagem inserida -->
  `;

  // Esconder os botões de "Enviar" e "Apagar" após o envio
  submitButton.style.display = 'none';  // Esconde o botão de envio
  resetButton.style.display = 'none';  // Esconde o botão de apagar

  // Exibir o botão "Novas informações"
  newSubmissionButton.style.display = 'inline-block';  // Torna o botão "Novas informações" visível
});

// Função que é chamada quando o botão "Novas informações" é clicado
function newSubmission() {
  // Limpar os campos do formulário para novas informações
  contactForm.reset();  // Reseta o formulário, limpando os campos

  // Esconder o botão de "Novas informações" após ser clicado
  newSubmissionButton.style.display = 'none';  // Esconde o botão "Novas informações"

  // Exibir novamente os botões de "Enviar" e "Apagar"
  submitButton.style.display = 'inline-block';  // Torna o botão de envio visível
  resetButton.style.display = 'inline-block';  // Torna o botão de apagar visível

  // Esconder a mensagem de sucesso e os dados exibidos
  submissionStatus.style.display = 'none';  // Esconde a mensagem de sucesso
  resultParagraph.innerHTML = '';  // Limpa os dados exibidos
}
