document.addEventListener("DOMContentLoaded", () => {
    const galleries = [
        {
            year: "2022",
            images: [
                "JS/images/2022/1.JPG",
                "JS/images/2022/2.JPG",
                "JS/images/2022/3.JPG",
                "JS/images/2022/4.JPG",
                "JS/images/2022/5.JPG",
                "JS/images/2022/6.JPG",
                "JS/images/2022/7.JPG",
                "JS/images/2022/8.JPG",
                "JS/images/2022/9.JPG",
                "JS/images/2022/10.JPG",
                "JS/images/2022/11.JPG",
                "JS/images/2022/12.JPG",
                "JS/images/2022/13.JPG",
                "JS/images/2022/14.JPG",
                "JS/images/2022/15.JPG",
                "JS/images/2022/16.JPG",
                "JS/images/2022/17.JPG",
                "JS/images/2022/18.JPG",
                "JS/images/2022/19.JPG",
                "JS/images/2022/20.JPG",
                "JS/images/2022/21.JPG",
                "JS/images/2022/22.JPG",
                "JS/images/2022/23.JPG",
                "JS/images/2022/24.JPG",
                "JS/images/2022/25.JPG"
            ],
            video: "JS/images/2022/Flags.mov"
        },
        {
            year: "2024",
            images: [
                "JS/images/2024/2.jpg",
                "JS/images/2024/3.jpg",
                "JS/images/2024/5.jpg",
                "JS/images/2024/6.jpg",
                "JS/images/2024/7.jpg",
                "JS/images/2024/8.jpg",
                "JS/images/2024/9.jpg",
                "JS/images/2024/10.jpg",
                "JS/images/2024/11.jpg",
                "JS/images/2024/12.jpg",
                "JS/images/2024/13.jpg",
                "JS/images/2024/14.jpg",
                "JS/images/2024/15.jpg",
                "JS/images/2024/16.jpg",
                "JS/images/2024/17.jpg",
                "JS/images/2024/18.png",
                "JS/images/2024/19.jpg",
                "JS/images/2024/20.JPG",
                "JS/images/2024/21.JPG",
                "JS/images/2024/22.JPG"

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


