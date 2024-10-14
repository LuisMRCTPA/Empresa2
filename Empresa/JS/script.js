let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    slides[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + slides.length) % slides.length;

    slides[currentIndex].classList.add('active');
    updateCarousel();
}

function updateCarousel() {
    const slides = document.querySelector('.carousel-container');
    const offset = -currentIndex * 100; // Change this for different widths
    slides.style.transform = `translateX(${offset}%)`;
}

// Optional: Auto-play
setInterval(() => moveSlide(1), 5000); // Change slide every 5 seconds