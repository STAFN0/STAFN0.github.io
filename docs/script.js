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
                } else {
                    page.style.display = 'none';
                }
            });
        });
    });
});
