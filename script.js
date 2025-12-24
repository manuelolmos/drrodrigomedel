// ===================================
// Mobile Menu Toggle
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-list a');

    // Toggle mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');

            // Animate hamburger icon
            const spans = this.querySelectorAll('span');
            if (nav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        }
    });
});


// ===================================
// Contact Form Handler
// ===================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            showFormStatus('Por favor completa todos los campos requeridos.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showFormStatus('Por favor ingresa un email válido.', 'error');
            return;
        }

        // Here you would normally send the data to a server
        // For now, we'll simulate a successful submission
        simulateFormSubmission(formData);
    });
}

function simulateFormSubmission(data) {
    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;

    // Simulate API call
    setTimeout(function() {
        // Log the form data (in production, this would be sent to a server)
        console.log('Form data:', data);

        // Show success message
        showFormStatus('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.', 'success');

        // Reset form
        contactForm.reset();

        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;

        // Hide success message after 5 seconds
        setTimeout(function() {
            hideFormStatus();
        }, 5000);
    }, 1500);
}

function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + type;
}

function hideFormStatus() {
    formStatus.className = 'form-status';
}


// ===================================
// Smooth Scroll Enhancement
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Skip if href is just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});


// ===================================
// Active Navigation Link
// ===================================
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-list a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});


// ===================================
// Form Integration Helper (Optional)
// ===================================
// If you want to integrate with a backend service like FormSpree, EmailJS, or similar:
//
// Example with FormSpree:
// function sendToFormSpree(data) {
//     fetch('https://formspree.io/f/YOUR_FORM_ID', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(data => {
//         showFormStatus('¡Mensaje enviado con éxito!', 'success');
//         contactForm.reset();
//     })
//     .catch(error => {
//         showFormStatus('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.', 'error');
//     });
// }
//
// Example with EmailJS:
// emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
//     name: data.name,
//     email: data.email,
//     phone: data.phone,
//     message: data.message
// })
// .then(function(response) {
//     showFormStatus('¡Mensaje enviado con éxito!', 'success');
//     contactForm.reset();
// }, function(error) {
//     showFormStatus('Hubo un error al enviar el mensaje.', 'error');
// });
