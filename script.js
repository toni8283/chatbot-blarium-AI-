const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = input.value.trim();
  if (message === '') return;

  appendMessage('User', message);
  input.value = '';

  setTimeout(() => {
    appendMessage('Toni AI', "AI is still under development -- Thanks for visiting🩷");
  }, 800);
});

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  msg.style.margin = "10px 0";
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
