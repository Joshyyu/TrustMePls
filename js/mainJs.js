// Get references to the button, image, audio, and background elements
const button = document.getElementById("myButton");
const image = document.getElementById("myImage");
const audio = document.getElementById("myAudio");
const flashingBackground = document.getElementById("flashingBackground");
const text = document.getElementById("text"); // Get the text element
const joshText = document.getElementById("joshText"); // Get the "Josh" text element

// Function to toggle the flashing border effect
function toggleFlashingBorder() {
    button.classList.toggle("flashing-border");
}

// Function to toggle the flashing lights background
function toggleFlashingLights() {
    document.body.classList.toggle("flashing-lights");
}

// Function to fade in the audio
function fadeInAudio() {
    let volume = 0;
    const fadeInterval = setInterval(() => {
        if (volume < 1) {
            volume += 0.03; // Adjust the increment for desired speed
            audio.volume = volume;
        } else {
            clearInterval(fadeInterval);
            audio.volume = 1; // Ensure the volume is at maximum
        }
    }, 100); // Adjust the interval for desired smoothness
}

// Function to apply the zoom and fade-in effect to the background
function zoomFadeInBackground() {
    flashingBackground.style.animation = "zoomFadeIn 3s forwards";
}

// Function to apply the zoom and fade-in effect to the image
function zoomFadeInImage() {
    image.style.animation = "zoomFadeIn 3s forwards";
}

// Function to show the text
function showText() {
    text.style.display = "block";
}

// Add a click event listener to the button
button.addEventListener("click", function () {
    // Hide the button
    button.style.display = "none";
    // Show the image
    image.style.display = "block";
    // Toggle the flashing border effect
    toggleFlashingBorder();
    // Toggle the flashing lights background
    toggleFlashingLights();
    // Set audio volume to 0 before playing
    audio.volume = 0;
    // Play the audio
    audio.play();
    // Fade in the audio
    fadeInAudio();
    // Loop the audio
    audio.loop = true;
    // Apply the zoom and fade-in effect to the background when the button is clicked
    zoomFadeInBackground();
    // Apply the zoom and fade-in effect to the image when the button is clicked
    zoomFadeInImage();
    // Show the text when the button is clicked
    showText();
    // Show the "Josh" text when the button is clicked
    joshText.style.display = "block";
});

// Hide the text and "Josh" text initially
text.style.display = "none";
joshText.style.display = "none";
