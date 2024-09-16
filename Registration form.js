document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => element.textContent = '');
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let hasErrors = false;

    // Validate name
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        hasErrors = true;
    }

    // Validate email
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        hasErrors = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address.';
        hasErrors = true;
    }

    // Validate password
    if (password.trim() === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        hasErrors = true;
    }

    // Validate confirm password
    if (confirmPassword.trim() === '') {
        document.getElementById('confirmPasswordError').textContent = 'Please confirm your password.';
        hasErrors = true;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        hasErrors = true;
    }

    if (!hasErrors) {
        alert('Registration successful!');
        // Here you could also handle the form submission to the server, e.g., using fetch or XMLHttpRequest
    }
});



