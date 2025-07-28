// Js #1
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.textContent = navLinks.classList.contains('show') ? '✕' : '☰';
});

// Fade-In Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('animate');
      }, index * 200); // 0.2s stagger
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section, .email-card, .testimonials-grid blockquote, .case-study').forEach(el => {
  observer.observe(el);
});

// Proof Bar Slide-In
const proofBar = document.querySelector('#proof-bar');
if (proofBar) {
  setTimeout(() => proofBar.classList.add('animate'), 1000);
}

// Form Submission Pop-up
document.querySelector('form').addEventListener('submit', function(e) {
  const popup = document.createElement('div');
  popup.className = 'popup show';
  popup.innerHTML = `
    <p>Thanks for reaching out. A response crafted for impact is on the way within 24 hrs.</p>
    <button onclick="this.parentElement.remove()">Close</button>
  `;
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 5000);
});

// Dark Mode Toggle
const toggleButton = document.querySelector('.dark-mode-toggle');
const body = document.body;
const currentMode = localStorage.getItem('theme') || 'dark';
if (currentMode === 'light') body.classList.add('light-mode');
toggleButton.textContent = currentMode === 'light' ? '🌞' : '🌙';

toggleButton.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const newMode = body.classList.contains('light-mode') ? 'light' : 'dark';
  localStorage.setItem('theme', newMode);
  toggleButton.textContent = newMode === 'light' ? '🌞' : '🌙';
});
