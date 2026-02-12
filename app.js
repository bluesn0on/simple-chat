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
`