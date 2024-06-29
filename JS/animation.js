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

