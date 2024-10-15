// Display an alert when the page loads
//window.onload = function() {
//    alert("Welcome to my simple website!");
//};

// Add an event listener to change the intro text when clicked
document.addEventListener("DOMContentLoaded", function() {
    const intro = document.getElementById("intro");

    intro.addEventListener("click", function() {
        intro.querySelector("p").innerText = "You clicked the introduction section!";
    });
});
