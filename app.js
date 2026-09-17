const menuButton = document.querySelector('.mobile-menu');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Keep the navigation state in sync with the section currently in view.
const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.main-nav a');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach((section) => observer.observe(section));
