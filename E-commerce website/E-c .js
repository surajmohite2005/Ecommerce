// scripts.js

// Function to open the product page
function openProductPage(url) {
    window.location.href = url;
}

// Adding event listeners to each box for hover effects (optional if you want additional JS interactions)
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-10px)';
    });
    box.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.hero-slide img');
    let currentSlide = 0;

    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(showNextSlide, 5000); // Change image every 5 seconds
});
