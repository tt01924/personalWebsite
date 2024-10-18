// JavaScript for carousel functionality
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelector('.slides');

prevButton.addEventListener('click', () => {
    slides.scrollBy({
        left: -slides.offsetWidth,
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    slides.scrollBy({
        left: slides.offsetWidth,
        behavior: 'smooth'
    });
});


// Loading screen javascript
var loadingScreen = document.querySelector(".loadingScreen");

window.addEventListener('load', function() {
    // Fade out the loading screen
    loadingScreen.classList.add('hidden');
    
    // Wait for the transition to finish before completely removing the element
    setTimeout(function() {
        loadingScreen.style.display = 'none';
    }, 1000); // matches the transition time (1s)
});