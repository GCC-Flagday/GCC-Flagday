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

    // Move elements on mouse move
    const moveElements = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        document.querySelectorAll('.recipe').forEach((recipe) => {
            const recipeX = recipe.getBoundingClientRect().left + recipe.offsetWidth / 2;
            const recipeY = recipe.getBoundingClientRect().top + recipe.offsetHeight / 2;

            const distanceX = (mouseX - recipeX) * 0.02;
            const distanceY = (mouseY - recipeY) * 0.02;

            recipe.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
        });
    };

    // Event listener for mouse move
    document.addEventListener('mousemove', moveElements);
});
