document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".toggle-btn");
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
        document.body.classList.add(storedTheme);
    }

    toggleButton.addEventListener("click", () => {
        const currentTheme = document.body.classList.contains("dark-mode") ? "dark-mode" : "light-mode";
        const newTheme = currentTheme === "dark-mode" ? "light-mode" : "dark-mode";
        document.body.classList.remove(currentTheme);
        document.body.classList.add(newTheme);
        localStorage.setItem("theme", newTheme);
    });

    const slides = document.querySelector(".image-slider .slides");
    let index = 0;
    const totalSlides = slides.children.length;

    function showSlide(i) {
        const slideWidth = slides.children[0].clientWidth;
        slides.style.transform = `translateX(-${i * slideWidth}px)`;
    }

    document.querySelector(".prev").addEventListener("click", () => {
        index = (index === 0) ? totalSlides - 1 : index - 1;
        showSlide(index);
    });

    document.querySelector(".next").addEventListener("click", () => {
        index = (index === totalSlides - 1) ? 0 : index + 1;
        showSlide(index);
    });

    setInterval(() => {
        index = (index === totalSlides - 1) ? 0 : index + 1;
        showSlide(index);
    }, 5000);
});


