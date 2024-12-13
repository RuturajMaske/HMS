// script.js

document.getElementById('feedback-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from refreshing the page
  
    // Get form values
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;
  
    // Basic validation
    if (name === '' || comments === '') {
      displayMessage('Please fill in all fields.', 'error');
      return;
    }
  
    // Simulate submitting the feedback (you could send this data to a server here)
    setTimeout(() => {
      displayMessage('Thank you for your feedback!', 'success');
      resetForm();
    }, 1000);
  });
  
  function displayMessage(message, type) {
    const responseMessage = document.getElementById('response-message');
    responseMessage.textContent = message;
    responseMessage.className = type; // Add success or error class
  }
  
  function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('rating').value = '5';
    document.getElementById('comments').value = '';
  }
  