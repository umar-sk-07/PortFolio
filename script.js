$(document).ready(function () {
    $(".progress-value > span").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 1500,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  });
  
  var typed = new Typed("#typedHeading", {
    strings: ["Web developer", "Full Stack Developer", "Software Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
  
  // Smooth scrolling for anchor links with the class 'scroll-link'
  document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });

 
  document.addEventListener('DOMContentLoaded', function () {
    var umarLogo = document.getElementById('umarLogo');
    var popover = new bootstrap.Popover(umarLogo, {
      trigger: 'focus'
    });
  });



  function validateFormAndSubmit() {
    var name = document.getElementById('Name').value.trim();
    var email = document.getElementById('Email').value.trim();
    var subject = document.getElementById('Subject').value.trim();
    var message = document.getElementById('Message').value.trim();

    // Add your custom validation logic here
    if (name === '' || email === '' || subject === '' || message === '') {
      alert('Please fill in all fields.');
      return false; // Prevent form submission
    }

    // Optionally, you can add more advanced validation

    // Form is valid, submit to Google Sheet
    submitToGoogleSheet();
    return false; // Prevent form submission (you can remove this line if you want to allow submission)
  }

  function submitToGoogleSheet() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwMFe0tosf9J9-Tij6XGOiOm58dYMqUIzMtdWB20jLJUzV3GrP7PUXdJWKdZoVaworu/exec';
    const form = document.getElementById('contactForm');

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        console.log('Success!', response);
        // Optionally, display a confirmation message
        alert('Your message has been sent!');
      })
      .catch(error => console.error('Error!', error.message));
  }


  document.getElementById('contactForm').addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Show the success alert
    document.getElementById('successAlert').style.display = 'block';
});

