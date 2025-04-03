document.addEventListener("DOMContentLoaded", () => {
    const galleries = [
        {
            year: "2023",
            images: [
                "js/images/GCC01.jpg",
                "js/images/IntroSlide.png",
                "js/images/ireland.png",
                "js/images/NewFlag.png",
                "js/images/School-20Anthem_page-0001.jpg",
                
            ],
            video: "js/images/Flags.mov"
        },
        {
            year: "2024",
            images: [
                "js/images/2.jpg",
                "js/images/3.jpg",
                "js/images/5.jpg",
                "js/images/6.jpg",
                "js/images/7.jpg",
                "js/images/8.jpg",
                "js/images/9.jpg",
                "js/images/10.jpg",
                "js/images/11.jpg",
                "js/images/12.jpg",
                "js/images/13.jpg",
                "js/images/14.jpg",
                "js/images/15.jpg",
                "js/images/16.jpg",
                "js/images/17.jpg",
            ],
            video: "images/.mp4"
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
        const video = document.createElement("video");
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.poster = "images/Slide1.jpg";
        const source = document.createElement("source");
        source.src = gallery.video;
        source.type = "video/mp4";
        video.appendChild(source);
        videoSlide.appendChild(video);
        slides.appendChild(videoSlide);

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


