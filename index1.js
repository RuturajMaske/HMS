// JavaScript Validation
function validateForm() {
    const studentName = document.getElementById('studentName').value;
    const studentId = document.getElementById('studentId').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const gender = document.getElementById('gender').value;
    const errorMessage = document.getElementById('error-message');
  
    // Clear previous error messages
    errorMessage.textContent = '';
  
    // Check if all fields are filled
    if (!studentName || !studentId || !dob || !email || !phone || !address || !gender) {
      errorMessage.textContent = 'All fields are required!';
      return false;
    }
  
    // Simple validation for Student ID (can be adjusted)
    const studentIdPattern = /^[A-Za-z0-9]+$/;
    if (!studentIdPattern.test(studentId)) {
      errorMessage.textContent = 'Student ID should only contain alphanumeric characters!';
      return false;
    }
  
    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      errorMessage.textContent = 'Invalid email format!';
      return false;
    }
  
    // Validate phone number (exactly 10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      errorMessage.textContent = 'Phone number must be 10 digits!';
      return false;
    }
  
    // If everything is valid
    alert('Student registered successfully!');
    return true; // In a real application, you'd submit the form data here
  }
  