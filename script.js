// script.js

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active link in navigation
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    document.querySelectorAll('nav a').forEach((link) => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
