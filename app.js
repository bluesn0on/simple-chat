const brehSelectorBtn = document.querySelector('#breh-selector');
const bruhSelectorBtn = document.querySelector('#bruh-selector');
const chatTitle = document.querySelector('.chat-title');
const chatMessages = document.querySelector('.chat-messages');
const chatInputForm = document.querySelector('.chat-input-form');
const chatInput = document.querySelector('.message-input');
const clearChatBtn = document.querySelector('#clear-chat');

const chatMessageElement = (message) => `
    <div class="message ${message.sender === 'Breh' ? 'red' : 'gray'}">
        <div class="message-sender">${message.sender}</div>
        <div class="message-content">${message.content}</div>
        <div class="message-time">${message.time}</div>
    </div>
`;

// chat state
let currentSender = 'Breh';
let messages = [
  { sender: 'Breh', content: "Hey Bruh, how's it going?", time: '10:00 AM' },
  { sender: 'Bruh', content: 'Not bad, just chilling. You?', time: '10:01 AM' }
];

function formatTime(date = new Date()) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function renderMessages() {
  chatMessages.innerHTML = messages.map(chatMessageElement).join('');
  // keep scroll pinned to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function setActivePerson(sender) {
  currentSender = sender;
  brehSelectorBtn.classList.toggle('active-person', sender === 'Breh');
  bruhSelectorBtn.classList.toggle('active-person', sender === 'Bruh');
  chatTitle.textContent = `${sender} chatting...`;
  chatInput.focus();
}

// selectors
brehSelectorBtn.addEventListener('click', () => setActivePerson('Breh'));
bruhSelectorBtn.addEventListener('click', () => setActivePerson('Bruh'));

// send message (form submit)
chatInputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const content = chatInput.value.trim();
  if (!content) return;

  messages.push({ sender: currentSender, content, time: formatTime() });
  renderMessages();
  chatInput.value = '';
  chatInput.focus();
});

// send button only
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') e.preventDefault();
});

// clear
clearChatBtn.addEventListener('click', () => {
  messages = [];
  renderMessages();
});

// initial render
renderMessages();