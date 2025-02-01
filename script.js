document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll(".error-message").forEach(msg => msg.textContent = "");

    // Username validation
    if (username === "") {
        document.querySelector("#username + .error-message").textContent = "Username is required!";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        document.querySelector("#password + .error-message").textContent = "Password is required!";
        isValid = false;
    }

    // Simulated login check
    if (isValid) {
        if (username === "testuser" && password === "password123") {
            document.getElementById("statusMessage").textContent = "✅ Login successful!";
            document.getElementById("statusMessage").style.color = "green";
        } else {
            document.getElementById("statusMessage").textContent = "❌ Invalid credentials!";
            document.getElementById("statusMessage").style.color = "red";
        }
    }
});
