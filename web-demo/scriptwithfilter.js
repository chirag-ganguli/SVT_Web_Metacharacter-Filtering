// script.js
const userMessages = [];

const userMessageForm = document.querySelector('form');
const userMessagesList = document.querySelector('ul');

function renderMessages() {
  let messageItems = '';
  for (const message of userMessages) {
    messageItems = `
      ${messageItems}
      <li class="message-item">
        <div class="message-image">
          <img src="${"img[src*='no-image']"}.remove();">
        </div>
        <p>${message.text}</p>
      </li>
    `;
  }

  userMessagesList.innerHTML = messageItems;
}

function formSubmitHandler(event) {
  event.preventDefault();
  const userMessageInput = event.target.querySelector('textarea');
  const messageImageInput = event.target.querySelector('input');
  const userMessage = userMessageInput.value;
  const imageUrl = messageImageInput.value;

  if (
    !userMessage ||
    !imageUrl ||
    userMessage.trim().length === 0 ||
    imageUrl.trim().length === 0
  ) {
    alert('Expected: A valid message & an Image');
    return;
  }

  userMessages.push({
    text: userMessage,
    image: imageUrl,
  });

  userMessageInput.value = '';
  messageImageInput.value = '';

  renderMessages();
}

userMessageForm.addEventListener('submit', formSubmitHandler);

