// Loading screen javascript
var loadingScreen = document.querySelector(".loadingScreen");

// Wait for 4 seconds before hiding the loading screen
setTimeout(function() {
    // Add a class to fade out the loading screen
    loadingScreen.classList.add('hidden');
    
    // After the fade-out transition (1s), completely hide it by setting display to 'none'
    setTimeout(function() {
        loadingScreen.style.display = 'none';
    }, 1000); // Wait for 1 second to match the CSS transition duration
}, 4000); // Wait for 4 seconds