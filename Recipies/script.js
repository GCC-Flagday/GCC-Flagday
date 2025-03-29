$(document).ready(function () {
    // Smooth scrolling with Bootstrap scrollspy
    $('body').scrollspy({ target: '#navbarNav' });

    // Highlight active link in navigation
    $('nav a').on('click', function (e) {
        $('nav').find('a.active').removeClass('active');
        $(this).addClass('active');
    });

    // Animate elements on scroll with debouncing
    const animateOnScroll = debounce(function () {
        $('.recipe, .recipe-details').each(function () {
            const position = $(this).offset().top;
            const windowHeight = $(window).height();
            if (position < windowHeight * 0.8) {
                $(this).addClass('animate');
            }
        });
    }, 100);

    animateOnScroll(); // Initial animation

    // Event listener for scrolling with debouncing
    $(window).on('scroll', animateOnScroll);


    // Easter egg feature
    let clickCount = 0;
    $('#logo').on('click', function () {
        clickCount++;
        if (clickCount >= 5) {
            showEasterEgg();
            clickCount = 0; // Reset click count after revealing the Easter egg
        }
    });
});

// Function to reveal the Easter egg
function showEasterEgg() {
    alert('Congratulations! You found the hidden Easter egg! 🎉');
    // You can add more impressive effects or actions here, such as changing background colors, playing sounds, or showing animations.
}

// Debounce function to limit the frequency of scroll event callbacks
function debounce(func, wait, immediate) {
    let timeout;
    return function () {
        const context = this,
            args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
// script.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle visibility of recipe details
document.querySelectorAll('.recipe h3').forEach(title => {
    title.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('hidden');
    });
});

// Make the navbar sticky when scrolling
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('header');
    if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});
// script.js

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add animation class to elements in viewport
function animateOnScroll() {
    document.querySelectorAll('.expanding').forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('expanded');
        }
    });
}

// Run animation on page load
animateOnScroll();

// Run animation on scroll
window.addEventListener('scroll', animateOnScroll);
