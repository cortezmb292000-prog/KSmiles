document.addEventListener('DOMContentLoaded', () => {
  /* ---------- Mobile hamburger menu ---------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  function setMenu(open) {
    navMenu.classList.toggle('open', open);
    navToggle.classList.toggle('active', open);
    navToggle.setAttribute('aria-expanded', String(open));
  }

  navToggle.addEventListener('click', () => {
    setMenu(!navMenu.classList.contains('open'));
  });

  // Close the menu after tapping a link
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  // Close with the Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });

  /* ---------- Footer year ---------- */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});