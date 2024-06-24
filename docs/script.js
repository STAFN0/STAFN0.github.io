document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // You can process the form data here (e.g., send it to a backend server)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Optional: Show a confirmation message or redirect the user
        alert('Form submitted successfully!');
        contactForm.reset(); // Reset the form
    });
});
