document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const gender = document.querySelector('input[name="gender"]:checked');

    // Validate full name
    if (fullName.trim() === "") {
        alert("Please enter your full name.");
        return;
    }

    // Validate username
    if (username.trim() === "") {
        alert("Please enter a username.");
        return;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate phone number (digits only)
    const phonePattern = /^\d+$/;
    if (!phonePattern.test(phoneNumber)) {
        alert("Please enter a valid phone number (digits only).");
        return;
    }

    // Validate password
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Validate gender
    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    // If all validations pass, submit the form (here, we'll just log the data)
    console.log("Form submitted successfully!");
    console.log({
        fullName,
        username,
        email,
        phoneNumber,
        password,
        gender: gender.value
    });

    // You can replace the console.log with form submission logic
    // e.g., submit the form to a server using fetch or AJAX
    alert("Registration successful!");
});
