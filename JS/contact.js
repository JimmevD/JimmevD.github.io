// contact.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        // Get form fields
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const message = form.querySelector('textarea[name="message"]');

        let isValid = true;

        // Clear previous error styles
        [name, email, message].forEach((field) => {
            field.style.borderColor = "#ccc";
        });

        // Validate name
        if (name.value.trim() === "") {
            name.style.borderColor = "red";
            isValid = false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.style.borderColor = "red";
            isValid = false;
        }

        // Validate message
        if (message.value.trim() === "") {
            message.style.borderColor = "red";
            isValid = false;
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
            alert("Please fill in all fields correctly.");
        }
    });
});
