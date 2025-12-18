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
  } else {
    navLinks.classList.add('hidden');
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

document.querySelectorAll('section, .yield-card, .testimonials-grid blockquote, .case-study, .investment-card').forEach(el => {
  observer.observe(el);
});

// Form Submission Pop-up (Removed per directive, as form is gone)
 

// Dark Mode Toggle (Removed per directive, as dark mode is removed)
