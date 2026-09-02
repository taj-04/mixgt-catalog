const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');
button?.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('is-open', !open);
});
document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
  nav?.classList.remove('is-open'); button?.setAttribute('aria-expanded', 'false');
}));
