// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dropdown animation
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdownArrow = document.querySelector('.dropdown-btn img');

dropdownBtn.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
    dropdownArrow.classList.toggle('rotate');
});
