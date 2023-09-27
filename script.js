document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Replace these with your authentication logic
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "your_username" && password === "your_password") {
            alert("Login successful!");
            // You can redirect the user to another page here.
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
