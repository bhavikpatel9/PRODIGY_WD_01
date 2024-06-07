// script.js

// Function to handle color change based on scroll position
function changeNavbarColor() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbar.offsetHeight;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navbar.className = ''; // Remove all existing classes
            navbar.classList.add(`scrolled${section.dataset.navbar}`);
        } else if (scrollPosition >= sectionBottom && section.id === 'contact') {
            navbar.className = ''; // Remove all existing classes
            navbar.classList.add(`scrolled${section.dataset.navbar}`);
        }
    });
}

// Add click event listener to navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Smooth scroll to the target section
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - navbar.offsetHeight,
            behavior: 'smooth'
        });

        // Change navbar color based on active section
        setTimeout(changeNavbarColor, 100); // Add a delay to ensure smooth scrolling completes
    });
});

// Add scroll event listener to change navbar color based on scroll position
window.addEventListener('scroll', changeNavbarColor);
