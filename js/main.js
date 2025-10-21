// main.js
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    // Close menu on link click (mobile)
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('show');
      hamburger.textContent = '☰';
    }
  });
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.contains('show');
  navLinks.classList.toggle('show', !isOpen);
  hamburger.textContent = isOpen ? '☰' : '✕';
});

// Handle window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('show');
    hamburger.textContent = '☰';
  }
});

// Fade-In Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section, .email-card, .testimonials-grid blockquote, .case-study, .pricing-card').forEach(el => {
  observer.observe(el);
});

// Form Submission Redirect
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default submission for testing
  window.location.href = 'https://convertrex.qzz.io/thank-you'; // Redirect to Thank You page
});

// Track Button Clicks
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    console.log('CTA Clicked: ' + button.textContent); // Replace with Google/Meta tracking code
  });
});

// Active Navigation State
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.getAttribute('id');
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('section').forEach(section => {
  navObserver.observe(section);
});

// Keyboard Accessibility for Forms
document.querySelectorAll('input, select, textarea, .btn').forEach(el => {
  el.setAttribute('tabindex', '0');
});
