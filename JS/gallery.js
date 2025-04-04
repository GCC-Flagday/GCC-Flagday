document.addEventListener("DOMContentLoaded", () => {
    const galleries = [
        {
            year: "2023",
            images: [
                "JS/images/GCC01.jpg",
                "JS/images/IntroSlide.png",
                "JS/images/ireland.png",
                "JS/images/NewFlag.png",
                "JS/images/School-20Anthem_page-0001.jpg",
                
            ],
            video: "JS/images/Flags.mov"
        },
        {
            year: "2024",
            images: [
                "JS/images/2.jpg",
                "JS/images/3.jpg",
                "JS/images/5.jpg",
                "JS/images/6.jpg",
                "JS/images/7.jpg",
                "JS/images/8.jpg",
                "JS/images/9.jpg",
                "JS/images/10.jpg",
                "JS/images/11.jpg",
                "JS/images/12.jpg",
                "JS/images/13.jpg",
                "JS/images/14.jpg",
                "JS/images/15.jpg",
                "JS/images/16.jpg",
                "JS/images/17.jpg"
            ]
        }
    ];

    const galleryContainer = document.getElementById("galleries");

    galleries.forEach(gallery => {
        const section = document.createElement("section");
        section.classList.add("gallery-container");

        const title = document.createElement("h2");
        title.textContent = `${gallery.year} Gallery`;
        section.appendChild(title);

        const slider = document.createElement("div");
        slider.classList.add("slider");

        const slides = document.createElement("div");
        slides.classList.add("slides");

        gallery.images.forEach(imgSrc => {
            const slide = document.createElement("div");
            slide.classList.add("slide");
            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = `Gallery Image ${gallery.year}`;
            slide.appendChild(img);
            slides.appendChild(slide);
        });

        const videoSlide = document.createElement("div");
        videoSlide.classList.add("slide");
        

        slider.appendChild(slides);

        const prevButton = document.createElement("button");
        prevButton.classList.add("prev");
        prevButton.innerHTML = "&#10094;";
        prevButton.addEventListener("click", () => moveSlide(slides, -1));

        const nextButton = document.createElement("button");
        nextButton.classList.add("next");
        nextButton.innerHTML = "&#10095;";
        nextButton.addEventListener("click", () => moveSlide(slides, 1));

        slider.appendChild(prevButton);
        slider.appendChild(nextButton);

        section.appendChild(slider);
        galleryContainer.appendChild(section);
    });

    function moveSlide(slides, direction) {
        const totalSlides = slides.children.length;
        let currentIndex = parseInt(slides.dataset.index || 0);
        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        slides.dataset.index = currentIndex;
    }
});


