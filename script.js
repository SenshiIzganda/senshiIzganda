document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contact-form');
    const messageBox = document.getElementById('form-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        messageBox.textContent = "Sending...";
        messageBox.style.color = "#888";

        // Simulate sending (replace with AJAX for real use)
        setTimeout(function () {
            messageBox.textContent = "Thank you for reaching out, I'll get back to you soon!";
            messageBox.style.color = "#EA90A1";
            form.reset();
        }, 1200);
    });
});