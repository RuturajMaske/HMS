document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Grab form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const govtId = document.getElementById('govtId').files[0];

    // Simple client-side validation
    if (!name || !email || !password || !confirmPassword || !govtId) {
        alert('Please fill all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (govtId.size > 5000000) { // Limit file size to 5MB
        alert('File size too large. Please upload a smaller file.');
        return;
    }

    // If all validations pass
    alert('Account created successfully!');

    // You can submit the form data here to the server via AJAX or a normal form submission.
});
