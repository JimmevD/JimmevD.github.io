// Add event listener for window scroll event
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');

    // Check if the vertical scroll position is greater than 50px
    if (window.scrollY > 50) {
        // Add 'scrolled' class to the header
        header.classList.add('scrolled');
    } else {
        // Remove 'scrolled' class from the header
        header.classList.remove('scrolled');
    }
});

// Add event listener for window scroll event
window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');

    // Check if the vertical scroll position is greater than 50px
    if (window.scrollY > 50) {
        // Add 'scrolled' class to the nav
        nav.classList.add('scrolled');
    } else {
        // Remove 'scrolled' class from the nav
        nav.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    var goToTopButton = document.querySelector('.back-to-top-button');

    // Add click event listener to the button
    goToTopButton.addEventListener('click', function() {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling behavior
        });
    });
});

document.addEventListener('scroll', function() {
    var scrolled = window.pageYOffset;
    var parallax = document.querySelectorAll('.sectionWhite');
    
    for (var i = 0; i < parallax.length; i++) {
        var yPos = -(scrolled * 0.5); 
        parallax[i].style.backgroundPosition = 'center ' + yPos + 'px';
    }
});

//prevents scraping hopefully
document.addEventListener("DOMContentLoaded", () => {
    const email = String.fromCharCode(53, 53, 50, 55, 53, 55); // Encoded as ASCII codes
    const domain = String.fromCharCode(115, 116, 117, 100, 101, 110, 116, 46, 115, 97, 120, 105, 111, 110, 46, 110, 108);
    const emailElement = document.getElementById("email");
    emailElement.innerHTML = `<a href="mailto:${email}@${domain}">${email}@${domain}</a>`;
});

//Display diffrent image if gif isn't loaded
document.addEventListener("DOMContentLoaded", function () {
    const homeSection = document.querySelector(".Home");
    const placeholderImage = "Images/BlackScreen.png"; // Path to the placeholder image
    const introGif = new Image();
    introGif.src = "/Images/IntroGif.gif"; // Path to the intro GIF

    // Set initial background to the placeholder image
    homeSection.style.backgroundImage = `url('${placeholderImage}')`;

    // Once the GIF is fully loaded, replace the placeholder
    introGif.onload = function () {
        homeSection.style.backgroundImage = `url('${introGif.src}')`;
    };
});