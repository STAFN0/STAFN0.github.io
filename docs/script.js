document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const links = document.querySelectorAll('.dropdown-content a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetPage = this.getAttribute('data-page');
            pages.forEach(page => {
                if (page.id === targetPage) {
                    page.style.display = 'block';
                    page.scrollIntoView({ behavior: 'smooth' });
                } else {
                    page.style.display = 'none';
                }
            });
        });
    });

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
