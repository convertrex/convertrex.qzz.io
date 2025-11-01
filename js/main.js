// main.js
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('show');
      hamburger.textContent = 'Menu';
    }
  });
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.contains('show');
  navLinks.classList.toggle('show', !isOpen);
  hamburger.textContent = isOpen ? 'Menu' : 'Close';
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('show');
    hamburger.textContent = 'Menu';
  }
});

// Fade-In Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section, .case-study, .case-study-card, .pricing-card').forEach(el => {
  observer.observe(el);
});

// Track CTA Clicks
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const text = button.textContent.trim();
    if (text.includes('Surgically Fix My Leak')) {
      gtag('event', 'cta_click', { tier: '750_leak_fix' });
    } else if (text.includes('Quantify Your Leak Now')) {
      gtag('event', 'cta_click', { tier: '5k_audit' });
    } else {
      gtag('event', 'cta_click', { tier: 'generic', label: text });
    }
  });
});

// Active Navigation
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('section').forEach(section => {
  navObserver.observe(section);
});

// Sticky CTA
const stickyCTA = document.querySelector('.sticky-cta');
const hero = document.getElementById('hero');
const stickyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      stickyCTA.classList.remove('hidden-on-load');
    } else {
      stickyCTA.classList.add('hidden-on-load');
    }
  });
}, { threshold: 0.1 });
stickyObserver.observe(hero);
