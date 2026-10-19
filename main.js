
const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message");

// Show / Hide Password
togglePassword.addEventListener("click", function () {
    const icon = togglePassword.querySelector("i");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.replace("fa-eye", "fa-eye-slash");
        togglePassword.setAttribute("aria-label", "Hide password");
    } else {
        passwordInput.type = "password";
        icon.classList.replace("fa-eye-slash", "fa-eye");
        togglePassword.setAttribute("aria-label", "Show password");
    }
});

// Display a message
function showMessage(text, type) {
    message.textContent = text;
    message.className = "message show " + type;
}

// Demo Login
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value;

    if (email === "" || password === "") {
        showMessage("Please fill in all fields.", "error");
        return;
    }

    if (password.length < 6) {
        showMessage(
            "Password must contain at least 6 characters.",
            "error"
        );
        return;
    }

    showMessage(
        "Form validated! Connect a backend to authenticate your account.",
        "success"
    );
});

// Forgot Password
document.getElementById("forgotPassword").addEventListener("click", function (event) {
    event.preventDefault();

    showMessage(
        "Password recovery needs to be connected to your authentication system.",
        "error"
    );
});

// Google Login placeholder
document.getElementById("googleLogin").addEventListener("click", function () {
    showMessage(
        "Google sign-in needs to be configured with an authentication provider.",
        "error"
    );
});
function showMessage() {
    window.location.href = "login.html";

}