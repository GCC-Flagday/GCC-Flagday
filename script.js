// script.js

$(document).ready(function () {
    // Smooth scrolling with Bootstrap scrollspy
    $('body').scrollspy({ target: '#navbarNav' });

    // Highlight active link in navigation
    $('nav a').on('click', function (e) {
        $('nav').find('a.active').removeClass('active');
        $(this).addClass('active');
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        $('.recipe, .recipe-details').each(function () {
            const position = $(this).offset().top;
            const windowHeight = $(window).height();
            if (position < windowHeight * 0.8) {
                $(this).addClass('animate');
            }
        });
    };

    animateOnScroll(); // Initial animation

    // Event listener for scrolling
    $(window).on('scroll', animateOnScroll);
});
