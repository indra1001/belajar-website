let currentSlide = 0;

    function changeSlide(direction) {
        const slides = document.querySelector('.slider-container');
        const totalSlides = slides.children.length;

        // Update current slide index
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

        // Geser slider
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Slider otomatis
    setInterval(() => {
        changeSlide(1); // Pindah ke slide berikutnya setiap 5 detik
    }, 5000);
