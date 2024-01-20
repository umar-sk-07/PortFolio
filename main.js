document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".text", {
        strings: ["Web developer", "Full Stack Developer", "Python Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // Get the height of the fixed header
    var headerHeight = document.querySelector('.header').offsetHeight;

    // Smooth scroll to section with consideration of the header height
    function scrollToSection(sectionId) {
        var targetSection = document.getElementById(sectionId);

        if (targetSection) {
            var offsetTop = targetSection.offsetTop - headerHeight;

            // Scroll smoothly to the target section
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // Add click event listeners to navigation links
    document.querySelectorAll('.navbar a').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var sectionId = this.getAttribute('href').substring(1); // Remove the "#" from href
            scrollToSection(sectionId);
        });
    });

    // Add an event listener to the logo link
    document.getElementById('logo').addEventListener('click', function () {
        // Display an alert message
        alert("Welcome to Umar's Portfolio");
    });

    // Add submit event listener to the form
    var form = document.forms['submit-to-google-sheet'];
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Your existing form submission logic here

        // Display the confirmation message
        var confirmationMessage = document.getElementById('confirmation-message');
        confirmationMessage.style.display = 'block';

        // Hide the message after 5 seconds
        setTimeout(function () {
            confirmationMessage.style.display = 'none';
        }, 5000);

        // Optionally, reset the form fields or perform any other post-submission actions
        form.reset();
    });
});
