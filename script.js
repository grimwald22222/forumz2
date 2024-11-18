// Function to load all saved messages from local storage
function loadMessages() {
    // Get all messages from local storage
    const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    const messagesContainer = document.getElementById('messages-container');
    messagesContainer.innerHTML = ''; // Clear the current messages

    // Iterate over each saved message and display it
    savedMessages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.innerHTML = `<strong>${message.username}:</strong><p>${message.text}</p>`;
        messagesContainer.appendChild(messageDiv);
    });
}

// Handle the message form submission
document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the username and message from the form
    const username = document.getElementById('username').value;
    const messageText = document.getElementById('message').value;

    // Validate the inputs
    if (username && messageText) {
        // Create a new message object
        const newMessage = { 
            username: username, 
            text: messageText 
        };

        // Get the existing messages from local storage
        const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];

        // Add the new message to the saved messages array
        savedMessages.push(newMessage);

        // Save the updated messages back into local storage
        localStorage.setItem('messages', JSON.stringify(savedMessages));

        // Reload the messages to show the newly added one
        loadMessages();

        // Clear the form fields
        document.getElementById('username').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please fill in both fields.');
    }
});

// Load all messages when the page is loaded
window.onload = loadMessages;
