// Obtém o botão e o elemento de mensagem
const showMessageBtn = document.getElementById('showMessageBtn');
const welcomeMessage = document.getElementById('welcomeMessage');

// Função para alternar a exibição da mensagem
showMessageBtn.addEventListener('click', function() {
  if (welcomeMessage.style.display === 'none') {
    // Se a mensagem estiver oculta, mostra ela
    welcomeMessage.style.display = 'block';
    showMessageBtn.textContent = 'Ocultar mensagem';
  } else {
    // Se a mensagem estiver visível, oculta ela
    welcomeMessage.style.display = 'none';
    showMessageBtn.textContent = 'Ver mensagem';
  }
});
