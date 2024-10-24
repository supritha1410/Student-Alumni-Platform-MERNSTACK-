const alumniList = document.getElementById('alumni-list');
const alumniSearch = document.getElementById('alumni-search');
const chatWindow = document.querySelector('.chat-window');
const selectedAlumniName = document.getElementById('selected-alumni-name');
const messageForm = document.querySelector('.message-form');
const messageInput = document.getElementById('message-input');
const chatHistory = document.querySelector('.chat-history');

// Sample alumni data (replace with your data fetching logic)
const alumniData = [
  { name: 'John Doe', description: 'Software Engineer at XYZ Company' },
  { name: 'Jane Smith', description: 'Marketing Manager at ABC Company' },
  // ... more alumni data
];

// Populate alumni list with data
alumniData.forEach(alumnus => {
  const option = document.createElement('option');
  option.value = alumnus.name;
  option.text = alumnus.name;
  alumniList.appendChild(option);
});

alumniList.addEventListener('change', function() {
  const selectedName = this.value;
  selectedAlumniName.textContent = selectedName;
  chatWindow.hidden = false; // Show chat window on alumni selection
});

messageForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const messageText = messageInput.value.trim();

  if (messageText) {
    const newMessage = document.createElement('div');
    newMessage.classList.add('message', 'sent');
    newMessage.textContent = messageText;

    chatHistory.appendChild(newMessage);
    messageInput.value = ''; // Clear message input after sending

    // Simulate receiving a response (for demo purposes only)
    setTimeout(() => {
      const receivedMessage = document.createElement('div');
      receivedMessage.classList.add('message', 'received');
      receivedMessage.textContent = 'Thanks for your message! I\'ll get back to you soon.';
      chatHistory.appendChild(receivedMessage);
    }, 1000);
  }
});

// Simulate initial message from alumni (for demo purposes only)
setTimeout(() => {
  const receivedMessage = document.createElement('div');
  receivedMessage.classList.add('message', 'received');
  receivedMessage.textContent = 'Hi there! Welcome to the chat.';
  chatHistory.appendChild(receivedMessage);
}, 500);