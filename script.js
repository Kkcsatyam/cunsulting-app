const chatbotIcon = document.getElementById("chatbot-icon");
const chatbot = document.getElementById("chatbot");
const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-message");

chatbotIcon.addEventListener("click", () => {
  chatbot.classList.toggle("show");
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message) {
    addMessage("You", message);
    // Simple bot response
    setTimeout(() => {
      addMessage("Bot", "Thank you for your message. How can I assist you?");
    }, 500);
    userInput.value = "";
  }
}

function addMessage(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Allow sending message with Enter key
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});
