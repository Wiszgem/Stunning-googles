// Function to handle sending a new message
function sendMessage() {
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (username && email && message) {
    // Retrieve existing messages from localStorage, or initialize an empty array
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    
    // Add the new message with the username, email, and message
    messages.push({ username: username, email: email, message: message });
    
    // Save updated messages to localStorage
    localStorage.setItem('messages', JSON.stringify(messages));
    
    // Clear the input fields
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    
    alert('Message sent!');
  } else {
    alert('Please enter all fields: username, email, and message!');
  }
}
