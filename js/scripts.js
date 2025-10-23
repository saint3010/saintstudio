document.getElementById('year').textContent = new Date().getFullYear();
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => nav.classList.toggle('open'));
}