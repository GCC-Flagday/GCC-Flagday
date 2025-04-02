let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    updateSlider();
}

function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.addEventListener('DOMContentLoaded', updateSlider);

document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.classList.add('back-button');
    backButton.onclick = () => window.history.back();
    document.body.appendChild(backButton);
});

