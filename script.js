// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Pop-out animation on scroll
    const animateOnScroll = (element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight * 0.75) {
            element.classList.add('pop-out');
        } else {
            element.classList.remove('pop-out');
        }
    };

    // Event listener for scrolling
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.recipe, .recipe-details').forEach(animateOnScroll);
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
});