// JavaScript for the image carousel

let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

// Function to display the current slide and hide others
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = "flex";
        } else {
            slide.style.display = "none";
        }
    });
}

// Function to go to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Event listeners for the "Previous" and "Next" buttons
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

// Display the initial slide (usually the first one)
showSlide(currentSlide);
