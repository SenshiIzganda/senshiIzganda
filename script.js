// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Highlight nav on scroll
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (pageYOffset >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').slice(1) === current);
    });
});

// Contact form interactivity
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
