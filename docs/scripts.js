// GSAP animation library is required
gsap.registerPlugin(TweenMax);

// Initial state
let dropdownVisible = false;

// Get elements
const getStartedBtn = document.getElementById('getStartedBtn');
const dropdown = document.getElementById('dropdown');
const arrow = document.getElementById('arrow');

// Toggle dropdown visibility and animate arrow
getStartedBtn.addEventListener('click', function() {
    dropdown.style.display = 'block';
    arrow.style.display = 'block';

    // Animate arrow to point at dropdown
    TweenMax.to(arrow, 0.5, { opacity: 1, x: dropdown.offsetLeft - arrow.offsetWidth / 2, y: dropdown.offsetTop - arrow.offsetHeight / 2 });
});

// Click on dropdown item
dropdown.addEventListener('click', function() {
    dropdown.style.display = 'none';
    arrow.style.display = 'none';
    getStartedBtn.style.display = 'none'; // Hide the Get Started button

    // Implement logic to navigate to specific sections
    // Example: scrollToSection('#profile');
});

// Function to scroll to specific section
function scrollToSection(sectionId) {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: sectionId,
            offsetY: 100 // Adjust this value as needed
        },
        ease: "power2.inOut"
    });
}
