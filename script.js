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
